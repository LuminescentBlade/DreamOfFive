import { IDoFRenderCharacter } from '@/src/models/dream-of-five.interfaces';
import styles from './index.module.scss';
import { DoFClasses, DoFWeapons } from '@/src/models/enums';
import { DoFUnpromotedClasses, DoFPromotedClasses } from '@/src/config/classes.config';


let lastCharacter: string;
let lastMSStatus: boolean;
let cachedRanks: { [key: string]: { base: any, promotion: any } } = {};
const weapons = Object.values(DoFWeapons);
export default function WeaponRanksDisplay({ characterDef, isMasterSealed }: { characterDef: IDoFRenderCharacter, isMasterSealed: boolean }) {

    if (lastCharacter !== characterDef.name || lastMSStatus !== isMasterSealed) {
        lastCharacter = characterDef.name;
        lastMSStatus = isMasterSealed;

        console.log(lastCharacter, lastMSStatus);

        const baseClassKey: string = characterDef.class!;
        const personalRanks = characterDef.weapons ?? {};
        const baseClass = characterDef.promotesTo ? DoFUnpromotedClasses[baseClassKey].weapons : DoFPromotedClasses[baseClassKey].weapons;
        const promotedClass = characterDef.promotesTo ? DoFPromotedClasses[characterDef.promotesTo].weapons : null;
        cachedRanks = weapons.reduce((ranks, weapon) => {
            if (!personalRanks[weapon] && !baseClass[weapon] && (promotedClass && !promotedClass[weapon])) {
                ranks[weapon] = null;
                return ranks;
            }

            const baseRank = Math.max(personalRanks[weapon], baseClass[weapon]);
            let promotion;
            if (promotedClass) {
                promotion = promotedClass[weapon] ? (baseRank || 0) + Math.max(promotedClass[weapon] - (baseClass[weapon] || 0), 0) : null;
            }
            ranks[weapon] = { base: getRankConfig(baseRank), promotion: promotion ? getRankConfig(promotion) : null };
            return ranks;
        }, {} as any);
    }

    function getRankConfig(value: number) {
        if (value >= 251) {
            return { value, letter: 'S', nextLevel: null };
        } else if (value >= 181) {
            return { value, letter: 'A', nextLevel: 251 - value };
        } else if (value >= 121) {
            return { value, letter: 'B', nextLevel: 181 - value };
        } else if (value >= 71) {
            return { value, letter: 'C', nextLevel: 121 - value };
        } else if (value >= 31) {
            return { value, letter: 'D', nextLevel: 71 - value };
        } else if (value >= 1) {
            return { value, letter: 'E', nextLevel: 31 - value };
        } else {
            return null;
        }
    }

    return <ul className={styles.weaponList}>
        {weapons.map(wpn => <li key={wpn}
            className={`${styles.weaponItem} ${cachedRanks[wpn]?.base ? styles.baseWeaponActive : ''} ${isMasterSealed && cachedRanks[wpn]?.promotion ? styles.promotedWeaponActive : ''}`}>
            <span className={`icon-wpn-${wpn} ${styles.weaponIcon}`}></span>
            {cachedRanks[wpn]?.base || (isMasterSealed && cachedRanks[wpn]?.promotion) ? <span className={styles.weaponRank}>
                {cachedRanks[wpn]?.base ? <span>{cachedRanks[wpn].base.letter}</span> : ''}
                {isMasterSealed && !cachedRanks[wpn].base && cachedRanks[wpn]?.promotion ? <span>{cachedRanks[wpn].promotion.letter}</span> : ''}
                {
                        isMasterSealed &&
                        cachedRanks[wpn]?.base &&
                        cachedRanks[wpn]?.promotion &&
                        cachedRanks[wpn]?.base.letter !== cachedRanks[wpn]?.promotion.letter ? <span>&rarr;{cachedRanks[wpn].promotion.letter}</span> : ''}

            </span> : ''}



        </li>)}
    </ul>
}