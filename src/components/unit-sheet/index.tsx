'use client';

import UnitSheetSprite from '../../components/unit-sheet-sprite';
import styles from './index.module.scss'
import { DoFCharacters } from '../../config/characters.config'
import { IDoFUnit } from '@/src/models/interfaces';
import { DoFArtist } from '@/src/models/enums';
import { DoFArtistConfig } from '@/src/config/artists.config';

export default function UnitSheet() {
     const isProd = (process.env.NODE_ENV === 'production');
     if (typeof window !== "undefined") {
        Object.values(DoFArtist).forEach(key => {
            // @ts-ignore
            setVariable(`--dof-artist-${key}`, DoFArtistConfig[key].color);
        });
    }
    function setVariable(variable: string, value: string) {
        document.documentElement.style.setProperty(variable, value);
    }
    const sections = Object.keys(DoFCharacters);
    const artists = Object.values(DoFArtist);

    return (<div className={styles.base}>
            {
                // @ts-ignore
                sections.filter(section => DoFCharacters[section].length).map((section) => (
                    <section key={section} className={`${styles.container} ${styles.spritesheet}`}>
                        <h2>{section}</h2>
                        {
                            // @ts-ignore
                            DoFCharacters[section]
                                .filter((character: IDoFUnit) => !character.hidden || !isProd)
                                .map((character: IDoFUnit) => <UnitSheetSprite key={character.name} type={section} characterDef={character} />)
                        }
                    </section>
                ))}
        <section className={styles.container}>
            <h2>Artist Credits</h2>
            <ul className={styles.credits}>
                {
                    artists.map(artist=>(
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