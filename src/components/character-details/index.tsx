import { DoFPromotedClasses, DoFUnpromotedClasses } from "@/src/config/classes.config";
import { IDoFRenderPlayable, IDoFRenderUnit, IDoFStats } from "@/src/models/dream-of-five.interfaces";
import { useState } from "react";
import styles from './index.module.scss';
import Overlay from "../overlay";

let init = false;
export default function CharacterDetails({ characterDef, clear }: { characterDef: IDoFRenderPlayable, clear: () => void }) {
    const defaultLevels = getDefaultLevelByCharacter(characterDef);
    const [levelData, setLevelData] = useState(defaultLevels);

    // show hide items
    const showStats = (characterDef.bases || characterDef.growths);

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

    function renderStatChecker() {
        if (!showStats) return '';
        const statKeys = Object.keys(promotedCaps ?? {});
        const result = <>
            <table className={styles.statTable}>
                <thead>
                    <tr>
                        <td></td>
                        {statKeys.map(s => <td className='capitalize'>{s}</td>)}
                    </tr>
                </thead>
                <tbody>
                    {characterDef.bases ?
                        <tr>
                            <th className='capitalize'>bases</th>
                            {statKeys.map(s => <td>{characterDef.bases ? characterDef.bases[s] : ''}</td>)}
                        </tr>
                        : ''
                    }
                    {characterDef.growths ?
                        <tr>
                            <th className='capitalize'>growths</th>
                            {statKeys.map(s => <td>{characterDef.growths && characterDef.growths[s] != null ? `${characterDef.growths[s]}%` : '--'}</td>)}
                        </tr>
                        : ''
                    }
                    {promoBonuses != null ?
                        <tr>
                            <th className='capitalize'>Promo</th>
                            {statKeys.map(s => <td>{promoBonuses![s]}</td>)}
                        </tr>
                        : ''
                    }
                    {characterDef.bases && characterDef.growths ?
                        <tr>

                            <th>Lv.{
                                //@ts-ignore
                                `${promoBonuses ? levelData.unpromotedLevel : ''}${promoBonuses && isPromoted() ? '/' : ''}${isPromoted() ? levelData.promotedLevel : ''}`
                            }
                            </th>
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
                        <th className='capitalize'>caps</th>
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
    }

    return <>
        <Overlay />
        <div className={styles.characterDetails}>
            <div className={styles.controls}>
                <button onClick={clear}>x</button>
            </div>
            <div className={styles.content}>
                <div className={styles.profile}>
                    <div className={styles.portraitWrapper}>
                        <img className="pixel-art" src={characterDef.path}></img>
                    </div>
                    <h2>{characterDef.profileName ?? characterDef.conditional?.player?.displayName ?? characterDef.displayName ?? <span className={'capitalize'}>{characterDef.name}</span>}</h2>
                    {characterDef.altNames || characterDef.conditional?.player?.displayName? <ul className={styles.altNames}>
                        {characterDef.altNames?.map(c=><li>{c}</li>)}
                        {characterDef.conditional?.player?.displayName?<li className="capitalize">{characterDef.name}</li>:''}
                    </ul> : ''}
                    
                    <div className={styles.subtitle}>{characterDef.level ? `Level ${characterDef.level}` : ''} <span className={'capitalize'}>{characterDef.class}</span></div>
                    <div className={styles.blurb}>
                        {characterDef.blurb}
                    </div>
                </div>
                <div className={styles.data}> 
                    {   // check for at least one tab
                        (showStats) ? <ul className={styles.tabs}>
                            {showStats ? <li>
                                <button className="button-wrapper">Stats</button>
                            </li> : ''}
                        </ul> : ''}
                    <div className={styles.dataContent}>
                        {renderStatChecker()}
                    </div>
                </div>
            </div>
        </div>
    </>
}