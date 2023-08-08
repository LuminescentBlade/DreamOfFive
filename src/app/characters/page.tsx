'use client';

import { DoFArtist, DoFRoute, DoFUnitState } from '@/src/models/enums';
import UnitSheet from '@/src/components/unit-sheet';
import styles from './page.module.scss'
import { DoFArtistConfig } from '@/src/config/artists.config';
import { useState } from 'react';
import { IDoFCharacter, IDoFCharacterRenderer, IDoFRenderUnit, IDoFUnit } from '@/src/models/interfaces';
import { DoFCharacters } from '@/src/config/characters.config';

const defaultRenderValues = {
    prod: { chapter: 6, route: DoFRoute.Onduris },
    local: { chapter: 99, route: DoFRoute.Both }
};
// const imageRenderCache = new Map<string, HTMLImageElement>();
const isProd = (process.env.NODE_ENV === 'production');
let useProd = false;
let cachedData: IDoFCharacterRenderer; // we will definitely switch to redux after this
let { chapter: chapterLimit, route: displayRoute } = setDisplayValues();
const { shopkeepers, generics } = cacheStaticUnits();

function cacheStaticUnits() {
    const cacheItem = (arr: IDoFUnit[], pathType: string) => {
        return arr.map(item => {
            const path = getPath(pathType, item.name);
            // const img = new Image();
            // img.src = path;
            // imageRenderCache.set(item.name, img);
            return ({ ...item, path, renderOrder: 999 })
        });
    };
    const shopkeepers: IDoFRenderUnit[] = cacheItem(DoFCharacters.shopkeepers, 'shopkeepers');
    const generics: IDoFRenderUnit[] = cacheItem(DoFCharacters.generics, 'generics');

    return { shopkeepers, generics };
}

function getData() {
    const config = parseCharacters(chapterLimit, displayRoute);
    const sort = (items: IDoFRenderUnit[])=>items.sort((a,b)=>a.renderOrder - b.renderOrder);
    return {
        player: sort(config.player),
        enemy: sort(config.enemy),
        npc: [...sort(config.npc), ...shopkeepers],
        generic: generics
    };
}

function parseCharacters(chapter: number, route: DoFRoute) {
    const config: { [key: string]: IDoFRenderUnit[] } = {
        [DoFUnitState.Player]: [],
        [DoFUnitState.Enemy]: [],
        [DoFUnitState.NPC]: [],
    };

    DoFCharacters.characters.forEach(character => {
        let placement: { value: DoFUnitState, chapter: number } | undefined;
        if (route === DoFRoute.Musain || route === DoFRoute.Onduris) {
            placement = getSinglePlacement(route, chapter, character);
        } else {
            placement = getDoublePlacement(chapter, character);
        }
        if (placement) {
            // let img = imageRenderCache.get(character.name);
            let path;
            // if (!img) {
            path = getPath('characters', character.name);
            //     img = new Image();
            //     img.src = path;
            //     imageRenderCache.set(character.name, img);
            // } else {
            // path = img.src;
            // }
            config[placement.value].push({ ...character, path, renderOrder: placement.chapter });
        }
    });

    return config;
}

function getSinglePlacement(route: 'musain' | 'onduris', chapter: number, character: IDoFCharacter) {
    let routeConfig = character[route] || character.allRoute;
    if (!routeConfig) {
        return;
    }
    if (routeConfig.player != null && routeConfig.player <= chapter) {
        return { value: DoFUnitState.Player, chapter: routeConfig.player };
    } else if (routeConfig.enemy != null && routeConfig.enemy <= chapter) {
        return { value: DoFUnitState.Enemy, chapter: routeConfig.enemy };
    } else if (routeConfig.npc != null && routeConfig.npc <= chapter) {
        return { value: DoFUnitState.NPC, chapter: routeConfig.npc };
    }
    return;
}

function getDoublePlacement(chapter: number, character: IDoFCharacter) {
    const getValueByConfig = (state: ('player' | 'enemy' | 'npc')) => {
        if (character.allRoute) {
            return character.allRoute[state];
        }
        let musain = character.musain ? character.musain[state] : null;
        let onduris = character.onduris ? character.onduris[state] : null;

        if (musain != null && onduris != null) {
            return musain < onduris ? musain : onduris;
        } else if (musain != null) {
            return musain;
        } else {
            return onduris;
        }
    }

    let player = getValueByConfig(DoFUnitState.Player);
    if (player != null && player <= chapter) {
        return { value: DoFUnitState.Player, chapter: player };
    }
    let enemy = getValueByConfig(DoFUnitState.Enemy);
    if (enemy != null && enemy <= chapter) {
        return { value: DoFUnitState.Enemy, chapter: enemy };
    }
    let npc = getValueByConfig(DoFUnitState.NPC);
    if (npc != null && npc <= chapter) {
        return { value: DoFUnitState.NPC, chapter: npc };
    }
    return;
}

function getPath(type: string, name: string) {
    return `/mugs/${type}/${name}.png`;
}

function setDisplayValues() {
    if (!isProd && !useProd) {
        return { chapter: defaultRenderValues.local.chapter, route: defaultRenderValues.local.route };
    }
    return { chapter: defaultRenderValues.prod.chapter, route: defaultRenderValues.prod.route };
}

function setVariable(variable: string, value: string) {
    document.documentElement.style.setProperty(variable, value);
}


export default function CharacterPage() {
    const [unitSheetData, updateData] = useState(cachedData || getData());

    if (typeof window !== "undefined") {
        Object.values(DoFArtist).forEach(key => {
            // @ts-ignore
            setVariable(`--dof-artist-${key}`, DoFArtistConfig[key].color);
        });
    }

    function toggleProd() {
        useProd = !useProd;
        const displayValues = setDisplayValues();
        chapterLimit = displayValues.chapter;
        displayRoute = displayValues.route;
        cachedData = getData();
        updateData(cachedData);
    }

    return (
        <main className={styles.base}>
            <UnitSheet data={unitSheetData} />
            {
                !isProd ? <div style={{ width: 'fit-content', margin: '12px auto' }}>
                    <button style={{ padding: '12px', height: '40px' }} onClick={toggleProd}>Toggle Production Sheet</button>
                </div> : ""
            }
        </main>
    );
}