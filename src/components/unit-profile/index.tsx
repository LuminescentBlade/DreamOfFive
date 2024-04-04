import { IDoFCharacter } from '@dof/src/models/dream-of-five.interfaces';
import styles from './index.module.scss';

export default function CharacterProfile({ characterDef }: { characterDef: IDoFCharacter }) {
    function cmToFtIn(cm: number) {
        const inches = cm / 2.54;
        let ft = Math.floor(inches / 12);
        let inchLeft = Math.round(inches - ft * 12);
        if (inchLeft >= 12) { // ideally equal 12, but
            ft += 1;
            inchLeft -= 12;
        }
        return `${ft}'${inchLeft}''`;
    }


    return <ul className={styles.extendedProfile}>
        <li><strong>Country of Origin: </strong><span className="capitalize">{characterDef.nationality}</span></li>
        {characterDef.height ? <li><strong>Height: </strong>{characterDef.height}cm / {cmToFtIn(characterDef.height)}</li> : ''}
        {characterDef.age ? <li><strong>Age: </strong>{characterDef.age}</li> : ''}
        {characterDef.epithet ? <li><strong>Name in the Stars: </strong><span className={styles.redText}>{characterDef.epithet}</span></li> : ''}
        {characterDef.mountName ? <li><strong>Mount Name: </strong>{characterDef.mountName}</li> : ''}

    </ul>

}