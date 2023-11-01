import { IDoFCharacter, IDoFNonPlayableConfig } from '@/src/models/dream-of-five.interfaces';
import styles from './index.module.scss';
import NonPlayerStatItem from '../enemy-stat-item';

export default function NonPlayableStats({ stats, chapterLimit }: { stats: IDoFNonPlayableConfig[], chapterLimit: number }) {
    return <ul className={styles.bossList}>
        {
            stats
                .filter(item => item.chapter <= chapterLimit)
                .map(item => <li key={item.chapter}>
                    <NonPlayerStatItem statConfig={item} />
                </li>)
        }
    </ul>
}