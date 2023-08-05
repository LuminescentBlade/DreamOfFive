'use client';

import { IDoFUnit } from "@/src/models/interfaces";
import Image from 'next/image'

import styles from './index.module.scss';
import { DoFArtistConfig } from "@/src/config/artists.config";
export default function UnitSheetSprite({ type, characterDef }: { type: string, characterDef: IDoFUnit }) {
    const url = `/mugs/${type}/${characterDef.name}.png`;
    return (<div className={styles.wrapper}>
        <div className={`
            ${styles.name} 
            ${characterDef.displayName ? '' : styles.default}
            ${styles[type]}
            `}>
            <button className={styles.tooltip}>
                <div className={styles.data}>
                    <div className={styles.label}>Artists:</div>
                    <ul>
                    {characterDef.artists.map(artist => (
                        <li key={artist}>{DoFArtistConfig[artist].name}</li>
                    ))}
                    </ul>
                </div>
                {characterDef.artists.map(artist => (
                    <div key={artist} className={styles.artist} style={{ backgroundColor: `var(--dof-artist-${artist})` }}></div>
                ))}
            </button>
            {characterDef.displayName || characterDef.name}
        </div>
        <div className={styles.sprite}>
            <img src={url} />
        </div>
    </div>);
}
