'use client';

import UnitSheetSprite from '../../components/unit-sheet-sprite';
import styles from './index.module.scss'
import { IDoFCharacterRenderer, IDoFRenderUnit, IDoFUnit } from '@/src/models/interfaces';
import { DoFArtist } from '@/src/models/enums';
import { DoFArtistConfig } from '@/src/config/artists.config';

export default function UnitSheet({data}: {data: IDoFCharacterRenderer}) {
    const sections = Object.keys(data);
    const artists = Object.values(DoFArtist);

    return (<div id='unit-sheet' className={styles.base}>
        {
            // @ts-ignore
            sections.filter(section => data[section].length).map((section) => (
                <section key={section} className={`${styles.container} ${styles.spritesheet}`}>
                    <h2>{section}</h2>
                    {
                        // @ts-ignore
                        data[section].map((character: IDoFRenderUnit) => <UnitSheetSprite key={character.name} type={section} characterDef={character} />)
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