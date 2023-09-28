import { IDoFRenderUnit, IDoFUnit, IRenderUnit } from "@/src/models/interfaces";

import styles from './index.module.scss';
import { DoFArtistConfig } from "@/src/config/artists.config";
import { DoFUnitState } from "@/src/models/enums";
export default function UnitSheetSprite({ type, characterDef, expanded, onExpand, onCharacterClick }: {
    type: DoFUnitState, characterDef: IDoFRenderUnit, expanded?: boolean, onExpand?: () => void,
    onCharacterClick?: (characterRendered: IRenderUnit) => void
}) {
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
                (characterDef.conditional && characterDef.conditional[type]?.displayName) ? characterDef.conditional[type].displayName : (characterDef.displayName || characterDef.name)
            }
            {
                (onExpand ? <button className={styles.alts} onClick={onExpand}>{
                    expanded ? '-' : '+'
                }</button> : '')
            }
        </div>
        <div className={styles.sprite}>
        {
            (() => {
                const sprite = <img className="pixel-art" id={`${characterDef.name}_${type}`} src={characterDef.path} />
                    

                if (onCharacterClick) {
                    return <button className={'button-wrapper'} onClick={()=>onCharacterClick(characterDef)}>{sprite}</button>
                } else {
                    return sprite;
                }
            })()
        }
        </div>
    </div>);
}
