'use client';

import { DoFRoute, DoFUnitState } from '@dof/src/models/enums';
import { OptionSelector, UnitSheet } from '@dof/src/lib/components';
import styles from './page.module.scss'
import { DoFArtistConfig } from '@dof/src/config/artists.config';
import { useEffect, useState } from 'react';
import { IDoFCharacterRenderer, IRenderCharacterConfig, IRenderDoFConfig, IRenderItemConfig } from '@dof/src/models/interfaces';
import { DoFCharacters } from '@dof/src/config/characters.config';
import { DoFChapters } from '@dof/src/config/chapters.config';
import { useSearchParams } from 'next/navigation'
import CharacterDetails from '@dof/src/components/character-details';
import { DoFRenderCharacter } from '@dof/src/models/dof-render-character.class';
import { DoFGeneric } from '@dof/src/models/dof-render-generic.class';

const defaultRenderValues = {
    prod: { chapter: 6, limit: 27.5 },
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
let isShowingIronside = false;
let ironsideEvent: ((e: KeyboardEvent) => void) | undefined;
let sortByCountry = false;

export default function CharacterPage() {
    const searchParams = useSearchParams();
    const showUnsortedFull = false;//searchParams.get('full')?.toLowerCase() === 'true';
    const showFullData = sortByCountry || searchParams.get('devModeEnabledSpoilers')?.toLowerCase() === 'true';
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
        unitSheetData = getData(chapterLimit, DoFRoute.Both);
    }
    useEffect(() => {
        if (!ironsideEvent && !isShowingIronside && !showFullData) {
            ironsideEvent = createIronsideEventListnerFcn(() => {
                if (ironsideEvent) {
                    window.removeEventListener('keydown', ironsideEvent);
                    ironsideEvent = undefined;
                }
            });
            window.addEventListener('keydown', ironsideEvent);
        }

        return () => {
            init = false;
            if (ironsideEvent) {
                window.removeEventListener('keydown', ironsideEvent);
            }
            ironsideEvent = undefined;
        };
    });

    let activeCharacter: any;

    const [characterPageState, updateCharacterPage] = useState({
        chapterLimit,
        displayRoute: DoFRoute.Both,
        unitSheetData,
        activeCharacter
    });

    init = true;

    function createIronsideEventListnerFcn(clearEvent: () => void) {
        let correctKeyCount = 0;
        let debounceEventId: any;
        return function (event: KeyboardEvent) {
            if (event.key === 'i' && (correctKeyCount === 0 || correctKeyCount === 5)) {
                correctKeyCount++;
            } else if (event.key === 'r' && correctKeyCount === 1) {
                correctKeyCount++;
            } else if (event.key === 'o' && correctKeyCount === 2) {
                correctKeyCount++;
            } else if (event.key === 'n' && correctKeyCount === 3) {
                correctKeyCount++;
            } else if (event.key === 's' && correctKeyCount === 4) {
                correctKeyCount++;
            } else if (event.key === 'd' && correctKeyCount === 6) {
                correctKeyCount++;
            } else if (event.key === 'e' && correctKeyCount === 7) {
                correctKeyCount++;
            } else {
                correctKeyCount = 0;
            }
            if (correctKeyCount === 8) {
                cachedUnits = getCharacters({ bypassSpoiler: showFullData, useEarliest: false, showIronside: true });
                correctKeyCount = 0;
                // @ts-ignore
                clearEvent();
                isShowingIronside = true;
                unitSheetData = getData(characterPageState.chapterLimit, characterPageState.displayRoute);
                updateCharacterPage({ ...characterPageState, unitSheetData })

            } else {
                if (debounceEventId) {
                    clearTimeout(debounceEventId);
                }
                debounceEventId = setTimeout(() => {
                    correctKeyCount = 0;
                }, 500);
            }
        }
    }

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
        const getRenderOrder = (item: IRenderCharacterConfig) => item.renderOrder;
        const sort = (items: any[]) => items.sort((a, b) => getRenderOrder(a) - getRenderOrder(b));
        const { shopkeepers, generics } = cachedUnits;
        if (useFull) {
            return {
                characters: [...sort([...config.player, ...config.enemy, ...config.npc]), ...generics, ...shopkeepers]
            }
        } else if (sortByCountry) {
            const displayChars = [...config.player, ...config.enemy, ...config.npc];
            return displayChars.reduce((chars, character: IRenderCharacterConfig) => ({
                ...chars,
                [character.unitData.nationality]: [...(chars[character.unitData.nationality] ?? []), character]
            }), {});
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
                config[results.type]?.push(results);
            }
            return config;
        },
            baseConfig
        );
    }

    function getClickFunction(characterData: IRenderDoFConfig) {
        if (characterData.displayProfile) {
            return () => {
                updateCharacterPage({ ...characterPageState, activeCharacter: characterData });
            }
        }
    }

    function clearCharacter() {
        updateCharacterPage({ ...characterPageState, activeCharacter: undefined });
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
            {characterPageState.activeCharacter ? <CharacterDetails
                characterConfig={characterPageState.activeCharacter}
                clear={clearCharacter}
                experimentalFeatures={showFullData} /> : ''}
            <UnitSheet data={characterPageState.unitSheetData} artistConfig={DoFArtistConfig} getOnClick={getClickFunction} />
            {/* {
                !isProd ? <div style={{ width: 'fit-content', margin: '12px auto', textAlign: 'center' }}>
                    {showFullData ? '' : <button style={{ padding: '12px', height: '40px' }} onClick={toggleProd}>Toggle Production Sheet</button>}
                    <button style={{ padding: '12px', height: '40px' }} onClick={renderByCountry}>Render Sheet By Country</button>
                </div> : ""
            } */}
        </main>
    );
}