import { DoFPromotedClasses, DoFUnpromotedClasses } from "@/src/config/classes.config";
import { IDoFRenderPlayable, IDoFRenderUnit, IDoFStats } from "@/src/models/dream-of-five.interfaces";
import { useState } from "react";
import styles from './index.module.scss';

let debounce;
let init = false;
export default function CharacterDetails({ characterDef, clear }: { characterDef: IDoFRenderPlayable, clear: () => void }) {
    const defaultLevels = getDefaultLevelByCharacter(characterDef);
    const [levelData, setLevelData] = useState(defaultLevels);
    if (levelData.promotedLevel < defaultLevels.promotedLevel ||
        (defaultLevels.unpromotedLevel && (levelData.unpromotedLevel ?? -1) < defaultLevels.unpromotedLevel)) {
        setLevelData(defaultLevels);
    }



    const unpromotedLevelFloor = (characterDef.level ?? 1);
    let promoBonuses: IDoFStats | undefined = undefined;
    let promotedLevelFloor: number, unpromotedCaps: IDoFStats, promotedCaps: IDoFStats;
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

    init = true;

    function setUnpromotedLevel(event: any) {
        const value = parseInt(event.currentTarget.value);
        if (isNaN(value) || value < unpromotedLevelFloor) {
            setLevelData({ ...levelData, unpromotedDisplay: event.currentTarget.value });
        } else {
            const calculatedLevel = Math.min(value, 20);
            const newData = { ...levelData, unpromotedLevel: calculatedLevel, unpromotedDisplay: calculatedLevel };
            if (calculatedLevel < 10) {
                newData.promotedLevel = 0;
                newData.promotedDisplay = 0;
            }
            setLevelData(newData);
        }
    };


    function setPromotedLevel(event: any) {
        const value = parseInt(event.currentTarget.value);
        if (isNaN(value) || value < promotedLevelFloor) {
            setLevelData({ ...levelData, promotedDisplay: event.currentTarget.value });
        } else {
            const calculatedLevel = Math.min(value, 20);
            setLevelData({ ...levelData, promotedLevel: calculatedLevel, promotedDisplay: calculatedLevel });
        }
    }

    function isPromoted() {
        return (!promoBonuses || (levelData.unpromotedLevel && levelData.unpromotedLevel >= 10)) && levelData.promotedLevel;
    }

    function getDefaultLevelByCharacter(characterDef: IDoFRenderPlayable) {
        const unpromotedLevel = characterDef.promotesTo ? characterDef.level : undefined;
        const promotedLevel = characterDef.promotesTo ? 0 : characterDef.level ?? 0
        return {
            unpromotedLevel,
            promotedLevel,
            unpromotedDisplay: unpromotedLevel,
            promotedDisplay: promotedLevel
        };
    }

    return <div>

        <div>
            <button onClick={clear}>clear {characterDef.conditional?.player?.displayName ?? characterDef.displayName ?? characterDef.name}</button>
            {
                (() => {
                    if (!characterDef.bases && !characterDef.growths) return '';
                    const statKeys = Object.keys(characterDef.bases ?? characterDef.growths ?? {});
                    const result = <>
                        <table className={styles.statTable}>
                            <thead>
                                <tr>
                                    <td></td>
                                    {statKeys.map(s => <td>{s}</td>)}
                                </tr>
                            </thead>
                            <tbody>
                                {characterDef.bases ?
                                    <tr>
                                        <td>bases</td>
                                        {statKeys.map(s => <td>{characterDef.bases ? characterDef.bases[s] : ''}</td>)}
                                    </tr>
                                    : ''
                                }
                                {characterDef.growths ?
                                    <tr>
                                        <td>growths</td>
                                        {statKeys.map(s => <td>{characterDef.growths && characterDef.growths[s] ? `${characterDef.growths[s]}%` : ''}</td>)}
                                    </tr>
                                    : ''
                                }
                                {promoBonuses != null ?
                                    <tr>
                                        <td>promo bonuses</td>
                                        {statKeys.map(s => <td>{promoBonuses![s]}</td>)}
                                    </tr>
                                    : ''
                                }
                                {characterDef.bases && characterDef.growths ?
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
                                    : ''
                                }
                                <tr>
                                    <td>caps</td>
                                    {statKeys.map(s => <td>{promotedCaps[s]}</td>)}
                                </tr>
                            </tbody>
                        </table>
                        {characterDef.bases && characterDef.growths ?
                            <div>
                                {
                                    promoBonuses && levelData.unpromotedLevel ?
                                        <div>
                                            <label>Unpromoted Level</label>
                                            <input type="number" value={levelData.unpromotedDisplay} onChange={setUnpromotedLevel} />
                                        </div>

                                        : ''
                                }
                                {
                                    !promoBonuses || (levelData.unpromotedLevel && levelData.unpromotedLevel >= 10) ?
                                        <div>
                                            <label>Promoted Level</label>
                                            <input type="number" value={levelData.promotedDisplay} onChange={setPromotedLevel} />
                                        </div>
                                        : ''
                                }
                            </div>
                            : ''
                        }
                    </>

                    return result;
                })()
            }
        </div>
    </div>
}