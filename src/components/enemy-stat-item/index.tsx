import { IDoFBossCofig, IDoFRenderCharacter } from '@/src/models/dream-of-five.interfaces';
import styles from './index.module.scss';
import WeaponRanksDisplay from '../weapon-ranks';

export default function EnemyStatItem({ enemyStat, characterDef }: { enemyStat: IDoFBossCofig, characterDef: IDoFRenderCharacter }) {
    const characterDefOverrides: IDoFRenderCharacter = {
        ...characterDef,
        weapons: enemyStat.ranks ?? characterDef.weapons
    };
    return <div className={styles.bossBox}>
        <div className={styles.headerRow}>
            <div>
                <h3>Chapter {enemyStat.chapter}<span className='sub capitalize'>Lv. {enemyStat.stats?.lv ?? characterDef.level}</span>
                </h3>
                {enemyStat.route ? <span className='sub capitalize'>{enemyStat.route}</span> : ''}
            </div>
            <WeaponRanksDisplay characterDef={characterDefOverrides} isMasterSealed={false} hideUnusable={true} />
        </div>
        <div>

        </div>
    </div>
}