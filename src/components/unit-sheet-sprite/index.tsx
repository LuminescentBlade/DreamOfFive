import { IDoFUnit } from "@/src/models/interfaces";
import Image from 'next/image'

import styles from './index.module.scss';
export default function UnitSheetSprite({ type, characterDef }: { type: string, characterDef: IDoFUnit }) {
    const url = `/mugs/${type}/${characterDef.name}.png`;
    return (<div className={styles.wrapper}>
        <div className={`
            ${styles.name} 
            ${characterDef.displayName?'':styles.default}
            ${styles[type]}
            `}>{characterDef.displayName || characterDef.name}</div>
        <div className={styles.sprite}>
            <img src={url} />
        </div>
    </div>);
}
