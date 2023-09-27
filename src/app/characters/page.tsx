'use client';

import { DoFArtist, DoFNationality, DoFRoute, DoFUnitState } from '@/src/models/enums';
import UnitSheet from '@/src/components/unit-sheet';
import styles from './page.module.scss'
import { DoFArtistConfig } from '@/src/config/artists.config';
import { useState } from 'react';
import { IDoFCharacter, IDoFCharacterRenderer, IDoFRenderUnit, IDoFUnit, IKeyMap } from '@/src/models/interfaces';
import { DoFCharacters } from '@/src/config/characters.config';
import { DoFChapters } from '@/src/config/chapters.config';
import OptionSelector from '@/src/components/option-selector';
import { download, renderCharactersByCountry } from './sheet_export';
import { useSearchParams } from 'next/navigation'

const defaultRenderValues = {
    prod: { chapter: 6, limit: 14 },
    local: { chapter: 99 }
};

const chapterOptionsLocal = Object.values(DoFChapters).sort((a, b) => a.value - b.value);
const chapterOptionsProd = chapterOptionsLocal.filter(chapter => chapter.value <= defaultRenderValues.prod.limit);

const isProd = (process.env.NODE_ENV === 'production');
let useProdOnLocal = false;
let cachedData: IDoFCharacterRenderer; // we will definitely switch to redux after this
let displayRoute = isShowingLocal() ? DoFRoute.Both : DoFRoute.Onduris; // default value
let { chapter: chapterLimit,    chapterSelection } = setDisplayValues();
const { shopkeepers, generics } = cacheStaticUnits();

function cacheStaticUnits() {
    const cacheItem = (arr: IDoFUnit[], pathType: string) => {
        return arr.map(item => {
            const path = getPath(pathType, item.name);        
            return ({ ...item, path, renderOrder: 99 })
        });
    };
    const shopkeepers: IDoFRenderUnit[] = cacheItem(DoFCharacters.shopkeepers, 'shopkeepers');
    const generics: IDoFRenderUnit[] = cacheItem(DoFCharacters.generics, 'generics');

    return { shopkeepers, generics };
}

function getData(useFull: boolean, bypassSpoiler: boolean): IDoFCharacterRenderer {
    const config = parseCharacters(useFull ? 99 : chapterLimit, useFull ? DoFRoute.Both : displayRoute, useFull, bypassSpoiler);
    const getRenderOrder = (item: IDoFRenderUnit) => item.fullSheetRenderOrderOverride ?? item.renderOrder;
    const sort = (items: IDoFRenderUnit[]) => items.sort((a, b) => getRenderOrder(a)- getRenderOrder(b));
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

function parseCharacters(chapter: number, route: DoFRoute, useEarliest = false, bypassSpoiler = false) {
    const config: { [key: string]: IDoFRenderUnit[] } = {
        [DoFUnitState.Player]: [],
        [DoFUnitState.Enemy]: [],
        [DoFUnitState.NPC]: [],
    };

    DoFCharacters.characters.forEach(character => {
        if (character.isSpoiler && !bypassSpoiler) {
            return;
        }
        let placement: { value: DoFUnitState, chapter: number } | undefined;
        if (route === DoFRoute.Musain || route === DoFRoute.Onduris) {
            placement = getSinglePlacement(route, chapter, character, useEarliest, bypassSpoiler);
        } else {
            placement = getDoublePlacement(chapter, character, useEarliest, bypassSpoiler);
        }
        if (placement) {
            let path;
            path = getPath('characters', character.name);

            const characterItem: IDoFRenderUnit = { ...character, path, renderOrder: placement.chapter };

            if (character.alt) {
                let characterAlt = character.alt;
                if (!bypassSpoiler) {
                    characterAlt = Object.keys(character.alt).reduce((alts, altName) => (characterAlt[altName].isSpoiler ? alts : { ...alts, [altName]: { ...characterAlt[altName], chapter: undefined } }), {})
                }
                characterItem.alt = Object.keys(characterAlt)?.length ? characterAlt : undefined;
            }

            if (characterItem.alt) {
                characterItem.altPaths = Object.keys(characterItem.alt).reduce((paths, altName) => ({ ...paths, [altName]: getPath('characters', `${character.name}_${altName}`) }), {});
            }

            config[placement.value].push(characterItem);
        }
    });

    return config;
}

function getSinglePlacement(route: 'musain' | 'onduris', chapter: number, character: IDoFCharacter, useEarliest = false, showSecretPlayable = false) {
    let routeConfig = character.routeConfig[route] || character.routeConfig.allRoute;
    if (!routeConfig) {
        return;
    }
    const validStates = [];
    if (routeConfig.player != null && routeConfig.player <= chapter && (!character.secret || showSecretPlayable) ) {
        validStates.push({ value: DoFUnitState.Player, chapter: routeConfig.player });
    }
    if (routeConfig.enemy != null) {
        if(typeof routeConfig.enemy === 'number'){
            if(routeConfig.enemy <= chapter){
                validStates.push({ value: DoFUnitState.Enemy, chapter: routeConfig.enemy });
            }
        } else {
            let index = -1;
            while(routeConfig.enemy[index+1] <= chapter){
                index++;
            }
            if(index >= 0){
                validStates.push({ value: DoFUnitState.Enemy, chapter: routeConfig.enemy[index] });
            }
        }
        
    }
    if (routeConfig.npc != null && routeConfig.npc <= chapter) {
        validStates.push({ value: DoFUnitState.NPC, chapter: routeConfig.npc });
    }
    if (validStates.length) {
        validStates.sort((a, b) => {
            const chapterDiff = b.chapter - a.chapter;
            if (chapterDiff) {
                return (useEarliest ? -1 : 1) * chapterDiff;
            } else {
                return b.value === DoFUnitState.Player ? 1 :
                    b.value === DoFUnitState.Enemy && a.value === DoFUnitState.NPC ? 1 : -1;
            }
        });
        return validStates[0];
    } else {
        return;
    }
}

function getDoublePlacement(chapter: number, character: IDoFCharacter, useEarliest = false, showSecretPlayable = false) {
    // refactor to be more genericized to accept n routes
    const placements = ['musain', 'onduris']
        // @ts-ignore
        .map(route => getSinglePlacement(route, chapter, character, useEarliest, showSecretPlayable))
        .filter(placement => placement != null);
    if (!placements.length) {
        return undefined;
    }
    placements.sort((a, b) => {
        if (b!.value === a!.value || useEarliest) {
            return a!.chapter - b!.chapter; // take earlier chapter if both same value for multi placements
        } else if (b!.value === DoFUnitState.Player) {
            return 1;
        } else if (b!.value === DoFUnitState.Enemy) {
            return a!.value === DoFUnitState.Player ? -1 : 1;
        } else {
            return -1;
        }
    })
    return placements[0];
}

function getPath(type: string, name: string) {
    return `/mugs/${type}/${name}.png`;
}

function setDisplayValues(prodOverride: boolean = false) {
    if (isShowingLocal() || prodOverride) {
        return { chapter: defaultRenderValues.local.chapter, chapterSelection: chapterOptionsLocal };
    }
    return { chapter: defaultRenderValues.prod.chapter, chapterSelection: chapterOptionsProd };
}

function setVariable(variable: string, value: string) {
    document.documentElement.style.setProperty(variable, value);
}

function isShowingLocal() {
    return !isProd && !useProdOnLocal;
}

let init = false;


export default function CharacterPage() {
    const searchParams = useSearchParams();
    const showUnsortedFull = searchParams.get('full')?.toLowerCase() === 'true';
    const showSortedFull = searchParams.get('devModeEnabledSpoilers')?.toLowerCase() === 'true';
    const setProdFromUrl = searchParams.get('prod')?.toLowerCase() === 'true';
    // useProdOnLocal = useProdOnLocal || setProdFromUrl;
    let currentChapterLimit = chapterLimit;
    if (showSortedFull && !init) {
        const displayValues = setDisplayValues(true);
        chapterLimit = 99;
        currentChapterLimit = chapterLimit;
        chapterSelection = displayValues.chapterSelection;
        displayRoute = DoFRoute.Both;
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
    }
    const [unitSheetData, updateData] = useState(cachedData || getData(showUnsortedFull, showSortedFull || (isShowingLocal())));
    const [expansionState, setExpansion] = useState({ data: new Map<string, boolean>() });
    init = true;

    function update() {
        cachedData = getData(showUnsortedFull, showSortedFull || (isShowingLocal()));
        updateData(cachedData);
    }

    function changeRoute(route: DoFRoute) {
        displayRoute = route;
        let newChapterLimit = chapterLimit;
        while (newChapterLimit > 0 && displayRoute !== DoFRoute.Both &&
            (DoFChapters[newChapterLimit] == null ||
                (DoFChapters[newChapterLimit].route != null && DoFChapters[chapterLimit].route !== displayRoute)
            )
        ) {
            newChapterLimit -= .5;
        }
        chapterLimit = newChapterLimit;
        currentChapterLimit = chapterLimit;
        update();
    }

    function toggleProd() {
        useProdOnLocal = !useProdOnLocal;
        const displayValues = setDisplayValues();
        chapterLimit = Math.min(displayValues.chapter, chapterLimit);
        currentChapterLimit = chapterLimit;
        chapterSelection = displayValues.chapterSelection;
        update();
    }

    function chapterSelect(value: string) {
        const chapter = parseFloat(value);
        chapterLimit = chapter;
        currentChapterLimit = chapterLimit;
        update();
    }

    function renderByCountry() {
        const result = renderCharactersByCountry(unitSheetData);
        download(result);
    }

    function toggleCharacter(name: string) {
        return function () {
            expansionState.data.set(name, !expansionState.data.get(name));
            setExpansion({ data: expansionState.data });
        }
    }

    return (
        <main className={styles.base}>
            <h1>Dream of Five Character Sheet</h1>
            {!showUnsortedFull ? <div className={styles.controls}>
                <div className={styles.control}>
                    <label>Route Select</label>
                    <OptionSelector options={Object.values(DoFRoute)} selection={displayRoute} onSelect={changeRoute} />
                </div>
                <div className={styles.control}>
                    <label>Chapter Select</label>
                    <select name="chapter" onChange={(event) => { chapterSelect(event.target.value) }} value={chapterLimit}>
                        {
                            chapterSelection.map(chapter => {
                                if (chapter.route && chapter.route !== displayRoute && displayRoute !== DoFRoute.Both) {
                                    return ''
                                } else {
                                    return <option key={chapter.value} value={chapter.value}>
                                        {chapter.title || chapter.value} {displayRoute === DoFRoute.Both && chapter.route ? `(${chapter.route})` : ''}
                                    </option>
                                }
                            })
                        }
                    </select>
                </div>
            </div> : ''}
            <UnitSheet data={unitSheetData} expansionState={expansionState.data} toggleCharacter={toggleCharacter} chapter={currentChapterLimit} />
            {
                !isProd ? <div style={{ width: 'fit-content', margin: '12px auto', textAlign: 'center' }}>
                    <p>Displaying {isShowingLocal() ? 'Local' : 'Prod'} Values</p>
                    {showSortedFull ? '' : <button style={{ padding: '12px', height: '40px' }} onClick={toggleProd}>Toggle Production Sheet</button>}
                    <button style={{ padding: '12px', height: '40px' }} onClick={renderByCountry}>Render Sheet By Country</button>
                </div> : ""
            }
        </main>
    );
}