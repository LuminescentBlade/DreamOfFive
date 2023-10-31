import { IDoFBossCofig, IDoFCharacter } from '@/src/models/dream-of-five.interfaces';
import styles from './index.module.scss';
import WeaponRanksDisplay from '../weapon-ranks';
import { DoFChapters } from '@/src/config/chapters.config';
import { DoFRoute } from '@/src/models/enums';

export default function EnemyStatItem({ enemyStat }: { enemyStat: IDoFBossCofig}) {
    const { level, class: className, stats, route, optional, gameOver, talk, ranks: weaponRanks, weapons } = enemyStat;
    const statKeys = Object.keys(stats ?? {}).filter(stat => stat != 'lv');
    const chapter = DoFChapters[enemyStat.chapter];
    const routeLabel = enemyStat.chapter >= 7 && enemyStat.chapter <= 14 ? (enemyStat.route === DoFRoute.Musain ? 'A' : enemyStat.route === DoFRoute.Onduris ? 'B' : '') : ''
    const chapterLabel = !chapter.title ?
        `Chapter ${chapter.value}${routeLabel}` :
        chapter.title.match(/\d/g) ? `Chapter ${chapter.title}` : chapter.title
    return <div className={styles.bossBox}>
        <div className={styles.headerRow}>
            <div>
                <h3>{chapterLabel}</h3>
                {<div className={styles.subTitle}>
                    {route ? <span className={`capitalize ${styles.route}`}>{route}</span> : ''}
                    {level ? <span>Lv. {level} {className ? <span className={styles.class}>{className}</span> : ''}</span> : ''}
                    {optional ? <span className={`${styles.tag} ${styles.optional}`}>Optional</span> : ''}
                    {talk ? <span className={`${styles.tag} ${styles.talk}`}>Talk</span> : ''}
                    {gameOver && talk ? <span className={`${styles.tag} ${styles.gameOver}`}>Do Not Kill</span> : ''}
                </div>}
            </div>
            {weaponRanks ? <WeaponRanksDisplay ranks={weaponRanks} isMasterSealed={false} hideUnusable={true} /> : ''}
        </div>
        {stats ?
            <>
                <ul className={styles.stats}>
                    {statKeys.map(stat => <li key={stat}>
                        <div className={styles.statLabel}>{stat}</div>
                        {stats[stat]}
                    </li>)}
                </ul>
                {weapons?.length ? <div>
                    <ul className={styles.weapons}>
                    {weapons.map(wpn=><li className={`capitalize`}>{wpn.replace('_',' ')}</li>)}
                </ul>
                </div> : ''}
            </>
            : ''}
        {
            !stats && gameOver ?
                <div>Game Over</div> : ''
        }
    </div>
}