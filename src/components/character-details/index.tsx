import { DoFPromotedClasses, DoFUnpromotedClasses } from "@/src/config/classes.config";
import { IDoFRenderPlayable, IDoFRenderUnit, IDoFStats } from "@/src/models/dream-of-five.interfaces";
import { useState } from "react";
import styles from './index.module.scss';

export default function CharacterDetails({ characterDef, clear }: { characterDef: IDoFRenderPlayable, clear: () => void }) {
    const [levelData, setLevelData] = useState({ unpromotedLevel: characterDef.promotesTo ? characterDef.level : null, promotedLevel: characterDef.promotesTo ? 0 : characterDef.level ?? 0 });

    const unpromotedLevelFloor = (characterDef.level ?? 1);

    let promotedLevelFloor: number, promoBonuses: IDoFStats, unpromotedCaps: IDoFStats, promotedCaps: IDoFStats;
    if (characterDef.promotesTo) {
        promotedLevelFloor = 0;
        // @ts-ignore
        const promotedClass = DoFPromotedClasses[characterDef.promotesTo];
        // @ts-ignore
        unpromotedCaps = DoFUnpromotedClasses[characterDef.class].caps;
        promoBonuses = promotedClass.promo;
        promotedCaps = promotedClass.caps;
    } else {
        promotedLevelFloor = (characterDef.level ?? 1);
        // @ts-ignore
        promotedCaps = DoFPromotedClasses[characterDef.class]?.caps; // remove ? later 
    }


    function setUnpromotedLevel(event: any) {
        const value = parseInt(event.currentTarget.value);
        const effectiveValue = isNaN(value) ? 0 : value;
        const minLevel = Math.max(effectiveValue, unpromotedLevelFloor);
        setLevelData({ ...levelData, unpromotedLevel: Math.min(minLevel, 20) });
    };


    function setPromotedLevel(event: any) {
        const value = parseInt(event.currentTarget.value);
        const effectiveValue = isNaN(value) ? 0 : value;
        const minLevel = Math.max(effectiveValue, promotedLevelFloor);
        setLevelData({ ...levelData, promotedLevel: Math.min(minLevel, 20) });
    }

    function isPromoted(){
        return (!promoBonuses || (levelData.unpromotedLevel && levelData.unpromotedLevel >= 10)) && levelData.promotedLevel;
    }

    return <div>

        <div>
            <button onClick={clear}>clear {characterDef.conditional?.player?.displayName ?? characterDef.displayName ?? characterDef.name}</button>
            {
                (() => {
                    if (!characterDef.bases) return '';
                    const statKeys = Object.keys(characterDef.bases);
                    const result = <>
                        <table className={styles.statTable}>
                            <thead>
                                <tr>
                                    <td></td>
                                    {statKeys.map(s => <td>{s}</td>)}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>bases</td>
                                    {statKeys.map(s => <td>{characterDef.bases ? characterDef.bases[s] : ''}</td>)}
                                </tr>
                                <tr>
                                    <td>growths</td>
                                    {statKeys.map(s => <td>{characterDef.growths && characterDef.growths[s] ? `${characterDef.growths[s]}%` : ''}</td>)}
                                </tr>
                                {
                                    //@ts-ignore
                                    (promoBonuses != null) ? <tr>
                                        <td>promo bonuses</td>
                                        {statKeys.map(s => <td>{promoBonuses[s]}</td>)}
                                    </tr> : ''}
                                <tr>

                                    <td>Averages at level {
                                        //@ts-ignore
                                        `${promoBonuses ? levelData.unpromotedLevel : ''}${promoBonuses && isPromoted() ? '/' : ''}${isPromoted() ? levelData.promotedLevel : ''}`
                                    }</td>
                                    {
                                        statKeys.map(s => {
                                            if (!characterDef.bases) return <td></td>;
                                            let capped = false;
                                            const base = characterDef.bases[s];
                                            let value = base;
                                            let growth = characterDef.growths ? (characterDef.growths[s] ?? 0) / 100 : 0;
                                            if (promoBonuses) { // unpromoted unit
                                                const unpromotedRawStat = base + (growth * (levelData.unpromotedLevel ? levelData.unpromotedLevel - unpromotedLevelFloor : 0));
                                                const unpromotedStat = Math.min(unpromotedCaps[s], unpromotedRawStat);
                                                value = unpromotedStat;
                                                capped = unpromotedCaps[s] === unpromotedStat;

                                                if (isPromoted()) {
                                                    const promo1Stat = unpromotedStat + (promoBonuses[s] ?? 0);
                                                    const promotedRawStat = promo1Stat + (growth * Math.max(levelData.promotedLevel - unpromotedLevelFloor, 0));
                                                    const promotedStat = Math.min(promotedCaps[s], promotedRawStat);
                                                    value = promotedStat;
                                                    capped = promotedCaps[s] === promotedStat;
                                                }
                                            } else {
                                                value = base + growth * (levelData.promotedLevel ? levelData.promotedLevel - promotedLevelFloor : 0);
                                                capped = promotedCaps[s] === value;
                                            }

                                            return <td className={capped ? styles.capped : ''}>{value.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>

                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                        {levelData.unpromotedLevel != null ? <input type="number" defaultValue={levelData.unpromotedLevel} onChange={setUnpromotedLevel} /> : ''}
                        <input type="number" defaultValue={levelData.promotedLevel} onChange={setPromotedLevel} />
                    </>

                    return result;
                })()
            }
        </div>
    </div>
}