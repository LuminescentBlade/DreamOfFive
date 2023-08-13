import { IDoFRenderUnit, IDoFUnit } from "@/src/models/interfaces";

import styles from './index.module.scss';
import { DoFArtistConfig } from "@/src/config/artists.config";
import { DoFUnitState } from "@/src/models/enums";
export default function UnitSheetSprite({ type, characterDef }: { type: DoFUnitState, characterDef: IDoFRenderUnit }) {
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
            { // @ts-ignore
                (characterDef.conditionalName && characterDef.conditionalName[type]) ? characterDef.conditionalName[type] : (characterDef.displayName || characterDef.name)
            }
        </div>
        <div className={styles.sprite}>
            <img id={`${characterDef.name}_${type}`} src={characterDef.path} />
        </div>
    </div>);
}
