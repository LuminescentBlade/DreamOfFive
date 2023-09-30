import { DoFPromotedClasses, DoFUnpromotedClasses } from "@/src/config/classes.config";
import { IDoFRenderCharacter, IDoFStats } from "@/src/models/dream-of-five.interfaces";
import { cache, useState } from "react";
import styles from './index.module.scss';
import Overlay from "../overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowsUpDownLeftRight } from '@fortawesome/free-solid-svg-icons'
import Toggle from "../toggle";

enum CharacterDetailState {
    Stat = 'stat',
    ExtendedProfile = 'profile',
    Gallery = 'gallery'
};

let init = false;
let offset = { left: 0, top: 0 };
let isDragging = false;
let cachedState = {
    enableCompareMode: false,
    dragStateStyle: {},
    state: CharacterDetailState.Stat
};

export default function CharacterDetails({ characterDef, clear, experimentalFeatures }: { characterDef: IDoFRenderCharacter, clear: () => void, experimentalFeatures?: boolean }) {
    const defaultLevels = getDefaultLevelByCharacter(characterDef);
    const [levelData, setLevelData] = useState(defaultLevels);
    const [widgetState, setWidgetState] = useState(cachedState);

    // show hide items
    const showStats = (characterDef.bases || characterDef.growths);
    const showExtendedProfile = experimentalFeatures && characterDef.nationality;
    const showGallery = false;

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

    function setWidgetStateCaching(widgetStateData: any) {
        cachedState = widgetStateData;
        setWidgetState(cachedState);
    }

    function setComparisonMode(value: boolean) {
        offset = { left: 0, top: 0 };
        setWidgetStateCaching({ ...widgetState, enableCompareMode: value, dragStateStyle: {} });
    }

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

    function clearItem() {
        clear();
        offset = { left: 0, top: 0 };
        setWidgetStateCaching({ ...widgetState, enableCompareMode: false, dragStateStyle: {} });
    }


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

    function getDefaultLevelByCharacter(characterDef: IDoFRenderCharacter) {
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
            {characterDef.bases && characterDef.growths ?
                <div className={styles.levelInputs}>
                    {
                        promoBonuses && levelData.unpromotedLevel ?
                            <div className={styles.levelInputGroup}>
                                <label>Unpromoted</label>
                                <input type="number" value={levelData.unpromotedDisplay} onChange={setUnpromotedLevel} />
                            </div>

                            : ''
                    }
                    {
                        !promoBonuses || (levelData.unpromotedLevel && levelData.unpromotedLevel >= 10) ?
                            <div className={styles.levelInputGroup}>
                                <label>Promoted</label>
                                <input type="number" value={levelData.promotedDisplay} onChange={setPromotedLevel} />
                            </div>
                            : ''
                    }
                </div>
                : ''
            }
            <table className={styles.statTable}>
                <thead>
                    <tr>
                        <td className={styles.rowHeader}></td>
                        {statKeys.map(s => <td className={`${styles.colHeader} capitalize`}>{s}</td>)}
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
                        <tr className={styles.avgs}>

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
                                        value = base + (growth * (levelData.unpromotedLevel ? levelData.unpromotedLevel - unpromotedLevelFloor : 0));
                                        capped = value >= unpromotedCaps[s];
                                        if (capped) {
                                            value = unpromotedCaps[s];
                                        }
                                        if (isPromoted()) {
                                            // for capbreak edition set value to unpromoted caps if capped here or it'll mess with the calcs
                                            const promo1Stat = value + (promoBonuses[s] ?? 0);
                                            value = promo1Stat + (growth * Math.max(levelData.promotedLevel - promotedLevelFloor, 0));
                                            capped = value >= promotedCaps[s];
                                            if (capped) {
                                                value = promotedCaps[s];
                                            }
                                        }
                                    } else {
                                        value = base + growth * (levelData.promotedLevel ? levelData.promotedLevel - promotedLevelFloor : 0);
                                        capped = value >= promotedCaps[s];
                                        if (capped) { value = promotedCaps[s] }
                                    }

                                    return <td className={capped ? styles.capped : ''}>{value.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>

                                })
                            }
                        </tr>
                        : ''
                    }
                    <tr className={styles.caps}>
                        <th className='capitalize'>caps</th>
                        {statKeys.map(s => <td>{promotedCaps[s]}</td>)}
                    </tr>
                </tbody>
            </table>
        </>
        return result;
    }

    function renderProfile() {
        return <div className={styles.profile}>
            <div className={styles.portraitWrapper}>
                <img className="pixel-art" src={characterDef.path}></img>
            </div>
            <div className={styles.profileData}>

                <h2>{characterDef.profileName ?? characterDef.conditional?.player?.displayName ?? characterDef.displayName ?? <span className={'capitalize'}>{characterDef.name}</span>}</h2>
                {characterDef.altNames || characterDef.conditional?.player?.displayName ? <ul className={styles.altNames}>
                    {characterDef.altNames?.map(c => <li>{c}</li>)}
                    {characterDef.conditional?.player?.displayName ? <li className="capitalize">{characterDef.name}</li> : ''}
                </ul> : ''}

                <div className={styles.subtitle}>
                    {characterDef.level ? `Level ${characterDef.level}` : ''} <span className={styles.classText}>{characterDef.class}</span>
                    {characterDef.promotesTo ? <div className={styles.sub}>Promotes to <span className={styles.classText}>{characterDef.promotesTo}</span></div> : ''}
                </div>
                <div className={styles.blurb}>
                    {characterDef.blurb}
                </div>

            </div>
        </div>
    }

    function mouseDown() {
        isDragging = true;
        window.addEventListener('mousemove', dragging);
        window.addEventListener('mouseup', mouseUp);
    }

    function mouseUp() {
        isDragging = false;
        window.removeEventListener('mousemove', dragging);
        window.removeEventListener('mouseup', mouseUp);
    }

    function dragging(event: MouseEvent) {
        if (isDragging) {
            offset.left += event.movementX;
            offset.top += event.movementY;
            setWidgetStateCaching({ ...widgetState, enableCompareMode: true, dragStateStyle: { transform: `translateX(calc(${offset.left}px - 50%)) translateY(calc(${offset.top}px - 50%))` } })
        }
    }

    function cmToFtIn(cm: number){
        const inches = cm / 2.54;
        let ft = Math.floor(inches / 12);
        let inchLeft = Math.round(inches - ft * 12);
        if(inchLeft >= 12){ // ideally equal 12, but
            ft += 1;
            inchLeft -= 12;
        }
        return `${ft}'${inchLeft}''`;
    }

    function renderExtendedProfile(){
        return <ul>
            <li><strong>Country of Origin: </strong><span className="capitalize">{characterDef.nationality}</span></li>
            {characterDef.height ? <li><strong>Height: </strong>{characterDef.height}cm / {cmToFtIn(characterDef.height)}</li> : ''}
            
        </ul>
    }

    function renderContent(state: CharacterDetailState) {
        switch (state) {
            case CharacterDetailState.Gallery:
                return '';
            case CharacterDetailState.ExtendedProfile:
                return renderExtendedProfile();
            case CharacterDetailState.Stat:
            default:
                return renderStatChecker();
        }
    }

    

    function renderTabs() {
        if (!showStats && !showExtendedProfile && !showGallery) {
            return '';
        }

        const getSectionTab = (state: CharacterDetailState, label: string) =>
        (<li>
            <button
                className={`button-wrapper ${widgetState.state === state ? styles.selectedTab : ''}`}
                onClick={() => { setWidgetStateCaching({ ...widgetState, state }) }}
            >{label}
            </button>
        </li>);

        let stats = showStats ? getSectionTab(CharacterDetailState.Stat, 'Stats') : '';
        let profile = showExtendedProfile ? getSectionTab(CharacterDetailState.ExtendedProfile, 'Profile') : '';
        let gallery = showGallery ? getSectionTab(CharacterDetailState.Gallery, 'Gallery') : '';

        return <ul className={styles.tabs}>
            {stats}
            {profile}
            {gallery}
        </ul>;
    }

    return <>
        {widgetState.enableCompareMode ? '' : <Overlay onClick={clearItem} />}
        <div className={styles.characterDetails} style={widgetState.dragStateStyle}>
            <div className={styles.controls}>
                {widgetState.enableCompareMode ? <button className={`${styles.controlButton} button-wrapper`} onMouseDown={mouseDown}>
                    <FontAwesomeIcon icon={faArrowsUpDownLeftRight} size="xl" />
                </button> : ''}

                <button className={`${styles.controlButton} button-wrapper`} onClick={clearItem}>
                    <FontAwesomeIcon icon={faXmark} size="2x" />
                </button>
            </div>
            <div className={styles.content}>
                {renderProfile()}
                <div className={styles.data}>
                    {renderTabs()}
                    <div className={styles.dataContent}>
                        {
                            renderContent(widgetState.state)
                        }
                    </div>
                </div>
            </div>
            {<div className={styles.footer}>
                {
                    <div className={'flex-line-container'}>
                        <label>Toggle Comparison Mode</label><Toggle active={widgetState.enableCompareMode} onStateChange={setComparisonMode} />
                    </div>
                }
            </div>}
        </div>
    </>
}