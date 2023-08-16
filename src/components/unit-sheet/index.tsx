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
                                    const validAlts = character.alt.filter(alt => !alt.chapter || alt.chapter <= chapter);
                                    const toggleFcn = validAlts.length ? toggleCharacter(character.name) : undefined;
                                    const baseItem = <UnitSheetSprite key={character.name} type={section} characterDef={character} expanded={expansionState.get(character.name)} onExpand={toggleFcn} />;
                                    if (expansionState.get(character.name)) {
                                        return <>
                                            {baseItem}
                                            {validAlts.map(alt => {
                                                const name = `${character.displayName || character.name} ${alt.displayName || alt.name}`
                                                const altData = { ...character, name, artists: alt.artists, path: character!.altPaths![alt.name] };
                                                return <UnitSheetSprite key={`${character.name}_${alt.name}`} type={section} characterDef={altData} />
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