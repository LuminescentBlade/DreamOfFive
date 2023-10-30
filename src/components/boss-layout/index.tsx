import { IDoFRenderCharacter } from '@/src/models/dream-of-five.interfaces';
import styles from './index.module.scss';
import EnemyStatItem from '../enemy-stat-item';

export default function BossLayout({ characterDef, chapterLimit }: { characterDef: IDoFRenderCharacter, chapterLimit: number }) {
    return <ul className={styles.bossList}>
        {
            characterDef.bossStats!
                .filter(item => item.chapter <= chapterLimit)
                .map(item => <li key={item.chapter}>
                    <EnemyStatItem enemyStat={item} characterDef={characterDef} />
                </li>)
        }
    </ul>
}