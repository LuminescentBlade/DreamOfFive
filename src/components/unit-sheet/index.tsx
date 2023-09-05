'use client';

import UnitSheetSprite from '../../components/unit-sheet-sprite';
import styles from './index.module.scss'
import { IDoFCharacterRenderer, IDoFRenderUnit, IDoFUnit } from '@/src/models/interfaces';
import { DoFArtist, DoFUnitState } from '@/src/models/enums';
import { DoFArtistConfig } from '@/src/config/artists.config';
import { useState } from 'react';

export default function UnitSheet({ data, chapter, expansionState, toggleCharacter }: { data: IDoFCharacterRenderer, chapter: number, expansionState: Map<string, boolean>, toggleCharacter: (name: string) => () => void }) {
    const sections = Object.keys(data) as DoFUnitState[];
    const artists = Object.values(DoFArtist);


    return (<div id='unit-sheet' className={styles.base}>
        {chapter}
        {
            // @ts-ignore
            sections
                .filter((section: DoFUnitState) => data[section].length)
                .map((section: DoFUnitState) => (
                    <section key={section} className={`${styles.container} ${styles.spritesheet}`}>
                        <h2>{section}</h2>
                        {
                            data[section].map((character: IDoFRenderUnit) => {
                                if (!character.alt) {
                                    return <UnitSheetSprite key={character.name} type={section} characterDef={character} />
                                } else {
                                    const alts = Object.entries(character.alt);
                                    const validAlts = alts.filter(([, alt]) => !alt.chapter || alt.chapter <= chapter);
                                    const toggleFcn = validAlts.length ? toggleCharacter(character.name) : undefined;
                                    let conditionalPortrait: string | undefined;
                                    let conditionalOGName: string | undefined;
                                    if ((character.conditional && section !== DoFUnitState.Generic && character.conditional[section])) {
                                        conditionalPortrait =  character.conditional[section]?.swapPortrait;
                                        conditionalOGName =  character.conditional[section]?.ogPortraitName;
                                    }
                                    let characterData;
                                    if (conditionalPortrait) {
                                        const alt = character.alt[conditionalPortrait];
                                        characterData = {
                                            ...character,
                                            name: `${character.name}_${conditionalPortrait}`, 
                                            displayName: character.displayName || character.name,
                                            artists: alt.artists,
                                            path: character!.altPaths![conditionalPortrait]
                                        };
                                    } else {
                                        characterData = character;
                                    }
                                    const baseItem = <UnitSheetSprite key={character.name} type={section} characterDef={characterData} expanded={expansionState.get(character.name)} onExpand={toggleFcn} />;
                                    if (expansionState.get(character.name)) {
                                        let conditionalItem;
                                        if(conditionalPortrait){
                                            conditionalItem = <UnitSheetSprite key={`${character.name}_original`} type={section} characterDef={{...character, displayName: conditionalOGName}} />
                                        }
                                        return <>
                                            {baseItem}
                                            {conditionalItem}
                                            {validAlts.map(([altName, alt]) => {
                                                if(altName === conditionalPortrait){
                                                    return '';
                                                }
                                                const displayName = `${character.displayName || character.name} ${alt.displayName || altName}`
                                                const name = `${character.name}_${altName}`;
                                                const altData = { ...character, name, displayName, artists: alt.artists, path: character!.altPaths![altName] };
                                                return <UnitSheetSprite key={`${character.name}_${altName}`} type={section} characterDef={altData} />
                                            })}
                                        </>
                                    } else {
                                        return baseItem;
                                    }
                                }
                            })
                        }
                    </section>
                ))}
        <section className={styles.container}>
            <h2>Artist Credits</h2>
            <ul className={styles.credits}>
                {
                    artists.map(artist => (
                        <li key={artist}>
                            <div className={styles.artist} style={{ backgroundColor: `var(--dof-artist-${artist})` }}>
                            </div>
                            {DoFArtistConfig[artist].name}
                        </li>
                    ))
                }
            </ul>
        </section>
    </div>);
}