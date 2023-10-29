'use client';

import { DoFArtist, DoFRoute, DoFUnitState } from '@/src/models/enums';
import UnitSheet from '@/src/components/unit-sheet';
import styles from './page.module.scss'
import { DoFArtistConfig } from '@/src/config/artists.config';
import { useState } from 'react';
import { IDoFCharacter, IDoFCharacterRenderer, IDoFRenderCharacter, IDoFRenderUnit, IDoFUnit, IKeyMap, IRenderCharacterConfig, IRenderItemConfig } from '@/src/models/interfaces';
import { DoFCharacters } from '@/src/config/characters.config';
import { DoFChapters } from '@/src/config/chapters.config';
import OptionSelector from '@/src/components/option-selector';
import { download, renderCharactersByCountry } from './sheet_export';
import { useSearchParams } from 'next/navigation'
import CharacterDetails from '@/src/components/character-details';
import { DoFRenderCharacter } from '@/src/models/dof-render-character.class';
import { DoFGeneric } from '@/src/models/dof-render-generic.class';

const defaultRenderValues = {
    prod: { chapter: 6, limit: 14.5 },
    local: { chapter: 99 }
};

const chapterOptionsLocal = Object.values(DoFChapters).sort((a, b) => a.value - b.value);
const chapterOptionsProd = chapterOptionsLocal.filter(chapter => chapter.value <= defaultRenderValues.prod.limit);

const isProd = (process.env.NODE_ENV === 'production');
let { chapter: chapterLimit, chapterSelection } = setDisplayValues();
let cachedUnits: { characters: DoFRenderCharacter[], shopkeepers: IRenderItemConfig[], generics: IRenderItemConfig[] }; // TODO: move to global state management systems before we make tiermaker 


function getCharacters(renderRules: any) {
    // @ts-ignore
    const preParseGenerics = (key: string) => DoFCharacters[key].map(unit => (new DoFGeneric(unit, key)).data);

    return {
        characters: DoFCharacters.characters.map(character => new DoFRenderCharacter(character, renderRules)),
        shopkeepers: preParseGenerics('shopkeepers'),
        generics: preParseGenerics('generics'),
    };
}


function setDisplayValues(showAllItems: boolean = false) {
    if (showAllItems) {
        return { chapter: defaultRenderValues.local.chapter, chapterSelection: chapterOptionsLocal };
    }
    return { chapter: defaultRenderValues.prod.chapter, chapterSelection: chapterOptionsProd };
}

let unitSheetData: IDoFCharacterRenderer;
let init = false;


export default function CharacterPage() {
    const searchParams = useSearchParams();
    const showUnsortedFull = false;//searchParams.get('full')?.toLowerCase() === 'true';
    const showFullData = searchParams.get('devModeEnabledSpoilers')?.toLowerCase() === 'true';
    let currentChapterLimit = chapterLimit;
    if (showFullData && !init) {
        const displayValues = setDisplayValues(true);
        chapterLimit = 99;
        currentChapterLimit = chapterLimit;
        chapterSelection = displayValues.chapterSelection;
    }
    // @ts-ignore
    if (!cachedUnits) {
        cachedUnits = getCharacters({ bypassSpoiler: showFullData, useEarliest: false });
    }
    if (!init) {
        setTimeout(() => {
            if (typeof window !== "undefined") {
                Object.values(DoFArtist).forEach(key => {
                    // @ts-ignore
                    setVariable(`--dof-artist-${key}`, DoFArtistConfig[key].color);
                });
            }
        }, 0);
        unitSheetData = getData(chapterLimit, DoFRoute.Both);
    }

    let activeCharacter: any;

    const [characterPageState, updateCharacterPage] = useState({
        chapterLimit,
        displayRoute: DoFRoute.Both,
        unitSheetData,
        expandedPortraits: new Map<string, boolean>(),
        activeCharacter
    });

    init = true;

    function changeRoute(route: DoFRoute) {
        let newChapterLimit = characterPageState.chapterLimit;
        while (newChapterLimit > 0 && route !== DoFRoute.Both &&
            (DoFChapters[newChapterLimit] == null ||
                (DoFChapters[newChapterLimit].route != null && DoFChapters[chapterLimit].route !== route)
            )
        ) {
            newChapterLimit -= .5;
        }
        unitSheetData = getData(newChapterLimit, route);
        updateCharacterPage({ ...characterPageState, chapterLimit: newChapterLimit, displayRoute: route, unitSheetData });
    }

    function chapterSelect(value: string) {
        const chapter = parseFloat(value);
        const newChapterLimit = chapter;
        unitSheetData = getData(newChapterLimit, characterPageState.displayRoute);
        updateCharacterPage({ ...characterPageState, chapterLimit: newChapterLimit, unitSheetData })
    }


    function getData(chapter: number, route: string): any {
        const useFull = false; // do later
        const config = parseCharacters(useFull ? 99 : chapter, useFull ? DoFRoute.Both : route);
        const getRenderOrder = (item: IDoFRenderUnit) => item.renderOrder;
        const sort = (items: any[]) => items.sort((a, b) => getRenderOrder(a) - getRenderOrder(b));
        const { shopkeepers, generics } = cachedUnits;
        if (useFull) {
            return {
                characters: [...sort([...config.player, ...config.enemy, ...config.npc]), ...generics, ...shopkeepers]
            }
        } else {
            return {
                player: sort(config.player),
                enemy: sort(config.enemy),
                npc: [...sort(config.npc), ...shopkeepers],
                generic: generics
            };
        }
    }

    function parseCharacters(chapter: number, route: string) {
        const baseConfig: { [key: string]: any[] } = {
            [DoFUnitState.Player]: [],
            [DoFUnitState.Enemy]: [],
            [DoFUnitState.NPC]: [],
        };
        return cachedUnits.characters.reduce((config, character) => {
            character.currentChapter = { chapter, route: route === DoFRoute.Musain || route === DoFRoute.Onduris ? route : undefined };
            const results = character.data;
            if (results) {
                config[results.type].push(results);
            }
            return config;
        },
            baseConfig
        );
    }

    function toggleCharacter(name: string) {
        return function () {
            characterPageState.expandedPortraits.set(name, !characterPageState.expandedPortraits.get(name));
            updateCharacterPage({ ...characterPageState, expandedPortraits: characterPageState.expandedPortraits });
        }
    }

    function getClickFunction(characterData: IRenderCharacterConfig) {
        if (characterData.type === DoFUnitState.Player) {
            return () => {
                updateCharacterPage({ ...characterPageState, activeCharacter: characterData.unitData });
            }
        }
    }

    function clearCharacter() {
        updateCharacterPage({ ...characterPageState, activeCharacter: undefined });
    }

    function setVariable(variable: string, value: string) {
        document.documentElement.style.setProperty(variable, value);
    }

    return (
        <main className={styles.base}>
            <h1>Dream of Five Character Sheet</h1>
            {!showUnsortedFull ? <div className={styles.controls}>
                <div className={styles.control}>
                    <label>Route Select</label>
                    <OptionSelector options={Object.values(DoFRoute)} selection={characterPageState.displayRoute} onSelect={changeRoute} />
                </div>
                <div className={styles.control}>
                    <label>Chapter Select</label>
                    <select name="chapter" onChange={(event) => { chapterSelect(event.target.value) }} value={characterPageState.chapterLimit}>
                        {
                            chapterSelection.map(chapter => {
                                if (chapter.route && chapter.route !== characterPageState.displayRoute && characterPageState.displayRoute !== DoFRoute.Both) {
                                    return ''
                                } else {
                                    return <option key={chapter.value} value={chapter.value}>
                                        {chapter.title || chapter.value} {characterPageState.displayRoute === DoFRoute.Both && chapter.route ? `(${chapter.route})` : ''}
                                    </option>
                                }
                            })
                        }
                    </select>
                </div>
            </div> : ''}
            {characterPageState.activeCharacter ? <CharacterDetails characterDef={characterPageState.activeCharacter} clear={clearCharacter} experimentalFeatures={showFullData} /> : ''}
            <UnitSheet data={characterPageState.unitSheetData} expansionState={characterPageState.expandedPortraits} toggleCharacter={toggleCharacter} chapter={currentChapterLimit} getOnClick={getClickFunction} />
            {/* {
                !isProd ? <div style={{ width: 'fit-content', margin: '12px auto', textAlign: 'center' }}>
                    {showFullData ? '' : <button style={{ padding: '12px', height: '40px' }} onClick={toggleProd}>Toggle Production Sheet</button>}
                    <button style={{ padding: '12px', height: '40px' }} onClick={renderByCountry}>Render Sheet By Country</button>
                </div> : ""
            } */}
        </main>
    );
}