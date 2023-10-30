import { IDoFBossCofig, IDoFCharacter } from '@/src/models/dream-of-five.interfaces';
import styles from './index.module.scss';
import WeaponRanksDisplay from '../weapon-ranks';

export default function EnemyStatItem({ enemyStat, characterDef }: { enemyStat: IDoFBossCofig, characterDef: IDoFCharacter }) {
    const { level, class: className, stats, route, optional, gameOver, ranks: weaponRanks } = enemyStat;
    const statKeys = Object.keys(stats ?? {}).filter(stat => stat != 'lv');
    return <div className={styles.bossBox}>
        <div className={styles.headerRow}>
            <div>
                <h3>Chapter {enemyStat.chapter}</h3>
                {<div className={styles.subTitle}>
                    {route ? <span className={`capitalize ${styles.route}`}>{route}</span> : ''}
                    {level ? <span>Lv. {level}</span> : ''}
                    {className ? <span className='capitalize'>{className}</span> : ''}
                    {optional ? <span>optional</span> : ''}
                    {gameOver && stats ? <span>game over</span> : ''}
                </div>}
            </div>
            {weaponRanks ? <WeaponRanksDisplay ranks={weaponRanks} isMasterSealed={false} hideUnusable={true} /> : ''}
        </div>
        {stats ? <div>
            <table>
                <thead>
                   <tr>
                   {statKeys.map(stat => <td key={stat}>{stat}</td>)}
                   </tr>
                </thead>
               <tbody>
               <tr>
                    {statKeys.map(stat => <td key={stat}>{stats[stat]}</td>)}
                </tr>
               </tbody>
            </table>
        </div> : ''}
        {
            !stats && enemyStat.gameOver ?
                <div>Game Over</div> : ''
        }
    </div>
}