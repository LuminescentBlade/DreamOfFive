import { DoFPromotedClasses, DoFUnpromotedClasses } from "@/src/config/classes.config";
import { IDoFRenderCharacter, IDoFStats } from "@/src/models/dream-of-five.interfaces";
import { useState } from "react";
import styles from './index.module.scss';
import Overlay from "../overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowsUpDownLeftRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Toggle from "../toggle";

enum CharacterDetailState {
    Stat = 'stat',
    ExtendedProfile = 'profile',
    Gallery = 'gallery'
};

let init = false;
let offset = { left: 0, top: 0 };
let isDragging = false;
let cachedState: any = {
    enableCompareMode: false,
    dragStateStyle: {},
    state: CharacterDetailState.Stat,
    blossom: [],
    resetState: false
};

let currentCharacter: string | undefined;

export default function CharacterDetails({ characterDef, clear, experimentalFeatures }: { characterDef: IDoFRenderCharacter, clear: () => void, experimentalFeatures?: boolean }) {
    // show hide items
    const showStats = (characterDef.bases || characterDef.growths);
    const showExtendedProfile = experimentalFeatures && characterDef.nationality;
    const showGallery = false;
    const BLOSSOM_LIMIT = 2;
    const LEVEL_CAP = 20;

    let defaultView: CharacterDetailState | undefined;
    const validViews = new Set();
    if (showStats) {
        validViews.add(CharacterDetailState.Stat);
        defaultView = CharacterDetailState.Stat;
    }

    if (showExtendedProfile) {
        validViews.add(CharacterDetailState.ExtendedProfile);
        defaultView = defaultView ?? CharacterDetailState.ExtendedProfile;
    }

    if (showGallery) {
        validViews.add(CharacterDetailState.Gallery);
        defaultView = defaultView ?? CharacterDetailState.Gallery;
    }

    if (cachedState.resetState) {
        cachedState.state = defaultView;
        cachedState.resetState = false;
    } else if (!validViews.has(cachedState.state)) {
        cachedState.state = defaultView;
    }
    if (currentCharacter != characterDef.name) {
        cachedState.blossom = [];
    }


    const defaultLevels = getDefaultLevelByCharacter(characterDef);
    const [levelData, setLevelData] = useState(defaultLevels);
    const [widgetState, setWidgetState] = useState(cachedState);

    currentCharacter = characterDef.name;

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

    const blossomData = getBlossomLevels();

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
            const calculatedLevel = Math.min(value, LEVEL_CAP);
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
        currentCharacter = undefined;
        setWidgetStateCaching({ ...widgetState, enableCompareMode: false, dragStateStyle: {}, resetState: true });
    }


    function setPromotedLevel(event: any) {
        const value = parseInt(event.currentTarget.value);
        if (isNaN(value) || value < promotedLevelFloor) {
            setLevelData({ ...levelData, promotedDisplay: event.currentTarget.value });
        } else {
            const calculatedLevel = Math.min(value, LEVEL_CAP);
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

    function addBlossom() {
        if (widgetState.blossom.length >= BLOSSOM_LIMIT) {
            return;
        } else if (!widgetState.blossom.length) {
            const isCharacterPromoted = promoBonuses == null;
            const isLevelPromoted = defaultLevels.promotedLevel >= 1;
            const defaultLevel = defaultLevels.promotedLevel || defaultLevels.unpromotedLevel;

            const blossomItem = { level: defaultLevel, displayLevel: defaultLevel, isLevelPromoted, isCharacterPromoted };

            setWidgetStateCaching({ ...widgetState, blossom: [...widgetState.blossom, blossomItem] });
        } else {
            setWidgetStateCaching({ ...widgetState, blossom: [...widgetState.blossom, { ...widgetState.blossom[widgetState.blossom.length - 1] }] });
        }

    }

    function removeBlossom(index: number) {
        const newBlossom = [...widgetState.blossom];
        newBlossom.splice(index, 1);

        setWidgetStateCaching({ ...widgetState, blossom: newBlossom })
    }

    function getBlossomLevelFloor(isPromoted: boolean) {
        return isPromoted ? Math.max(defaultLevels.promotedLevel, 1) : defaultLevels.unpromotedLevel;
    }

    function setBlossomLevel(index: number, event: any) {
        const value = parseInt(event.currentTarget.value);
        const isNaNValue = isNaN(value);
        const calcValue = isNaNValue ? -1 : value;
        const newBlossom = [...widgetState.blossom];
        const item = { ...newBlossom[index] };
        const minLevel = getBlossomLevelFloor(item.isLevelPromoted);
        const calculatedLevel = Math.min(LEVEL_CAP, Math.max(calcValue, minLevel!));
        item.level = calculatedLevel;
        item.displayLevel = isNaNValue ? '' : value;
        newBlossom[index] = item;
        setWidgetStateCaching({ ...widgetState, blossom: newBlossom });
    }

    function toggleBlossomPromotion(index: number) {
        const newBlossom = [...widgetState.blossom];
        const item = { ...newBlossom[index] };
        item.isLevelPromoted = !item.isLevelPromoted;
        newBlossom[index] = item;

        setWidgetStateCaching({ ...widgetState, blossom: newBlossom });
    }


    function getBlossomWidget() {
        return <div className={styles.blossomWidget}>
            {
                <button className={`${styles.blossomButton} icon-button button-wrapper`} onClick={addBlossom} disabled={widgetState.blossom.length >= BLOSSOM_LIMIT }>
                    <span className="icon-blossom-dew"></span> {widgetState.blossom.length < BLOSSOM_LIMIT ? 
                            <span className={`${styles.plus} full-center`}><FontAwesomeIcon icon={faPlus} size="sm" /></span>:''}
                </button>
            }
            {
                widgetState.blossom.map(
                    (item: any, index: number) => <div key={index} className={styles.blossomItem}>
                        Lv. <input type="number" value={widgetState.blossom[index].displayLevel} onChange={(value) => setBlossomLevel(index, value)} />
                        {
                            !item.isCharacterPromoted ? <button
                                className={
                                    `icon-button ${!item.isCharacterPromoted ? `icon-button--${item.isLevelPromoted ? 'actived' : 'inactive'} ` : ''} icon-master-seal`
                                }
                                onClick={() => toggleBlossomPromotion(index)}
                            >
                            </button> : ''
                        }
                        <button className={`${styles.removeBlossom} button-wrapper`} onClick={() => removeBlossom(index)}>
                            <FontAwesomeIcon icon={faMinus} size="lg" />
                        </button>
                    </div>
                )
            }
        </div>
    }
    function getStatInputBar(characterDef: IDoFRenderCharacter) {
        if (!characterDef.bases || !characterDef.growths) {
            return;
        }
        return <div className={styles.levelControls}>
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
            {
                getBlossomWidget()
            }
        </div>
    }

    function getBlossomLevels() {
        const totalUnpromotedLevels = (levelData.unpromotedLevel ? levelData.unpromotedLevel - unpromotedLevelFloor : 0);
        const totalPromotedLevels = promotedLevelFloor ? Math.max(levelData.promotedLevel - promotedLevelFloor, 0) : Math.max(levelData.promotedLevel - 1 - promotedLevelFloor, 0);
        const unpromoted: number[] = [totalUnpromotedLevels];
        const promoted: number[] = [totalPromotedLevels];
        const sortedBlossom = [...widgetState.blossom].sort((a, b) => {
            if (a.isLevelPromoted !== b.isLevelPromoted) {
                return a.isLevelPromoted ? 1 : -1;
            } else {
                return a.level - b.level;
            }
        });
        let lastUnpromotedLevel = unpromotedLevelFloor;
        let lastPromotedLevel = promotedLevelFloor || 1;
        for (let i = 0; i < sortedBlossom.length; i++) {
            const item = sortedBlossom[i];
            if (item.isLevelPromoted) {
                // if u take blossom at lv 2 promo and then level 5 and you're currently at lv 8
                // expected behavior is  [7] => [1, 6] => [1, 3 ,3]
                const levelDiff = Math.min(item.level - lastPromotedLevel, levelData.promotedLevel - lastPromotedLevel);; // (1) 2 - 1 = 1, (2) 5 - 2 = 3
                const minLevels = Math.max(promoted[i] - levelDiff, 0); // negatives
                promoted.push(minLevels); // (1) index 1:  8 - 2 = 6, (2) index 2: 6 - 3 = 3
                promoted[i] = levelDiff; // (1) [1, 6], (2) [1, 3, 3]
                lastPromotedLevel = item.level; // (0->1) 1, (1->2) 2 , (2->e) 4
            } else {
                promoted[i] = 0;
                promoted.push(totalPromotedLevels);
                const levelDiff = Math.min(item.level - lastUnpromotedLevel, levelData.unpromotedLevel! - lastUnpromotedLevel);
                const minLevels = Math.max(unpromoted[i] - levelDiff, 0);
                unpromoted.push(minLevels);
                unpromoted[i] = levelDiff;
                lastUnpromotedLevel = item.level;
            }

            // hybrid case: base lv 2, blossom 1 at 4, promotion at 19, blossom 2 at lv 2 promoted, lv 5 promoted currently
            // blossom config: {level: 4, promoted: false}, {level: 2, promoted: true}
            // expected behavior: unpromoted [2, 15] promoted: [0, 1, 3]
        }
        return { unpromoted, promoted };
    }

    function calcStat(base: number, growth: number, isPromoted?: boolean) {
        const levels = isPromoted ? blossomData.promoted : blossomData.unpromoted;
        return levels.reduce((total, numLvs, index) => total + (0.05 * index + growth) * numLvs, base);
    }

    function getStat(statKey: string) {
        if (!characterDef.bases) return <td></td>;
        let capped = false;
        const base = characterDef.bases[statKey];
        let value = base;
        let growth = characterDef.growths ? (characterDef.growths[statKey] ?? 0) / 100 : 0;
        if (promoBonuses) { // unpromoted unit
            value = calcStat(base, growth, false);
            capped = value >= unpromotedCaps[statKey];
            if (capped) {
                value = unpromotedCaps[statKey];
            }
            if (isPromoted()) {
                // for capbreak edition set value to unpromoted caps if capped here or it'll mess with the calcs
                const promo1Stat = value + (promoBonuses[statKey] ?? 0);
                value = value = calcStat(promo1Stat, growth, true);
                capped = value >= promotedCaps[statKey];
                if (capped) {
                    value = promotedCaps[statKey];
                }
            }
        } else {
            value = calcStat(base, growth, true);
            capped = value >= promotedCaps[statKey];
            if (capped) { value = promotedCaps[statKey] }
        }

        return <td key={statKey} className={capped ? styles.capped : ''}>{value.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
    }

    function renderStatChecker() {
        if (!showStats) return '';
        const statKeys = Object.keys(promotedCaps ?? {});
        const result = <>
            {getStatInputBar(characterDef)}
            <div className={styles.tableWrapper}>
            <table className={styles.statTable}>
                <thead>
                    <tr>
                        <td className={styles.rowHeader}></td>
                        {statKeys.map(s => <td key={s} className={`${styles.colHeader} capitalize`}>{s}</td>)}
                    </tr>
                </thead>
                <tbody>
                    {characterDef.bases ?
                        <tr>
                            <th className='capitalize'>bases</th>
                            {statKeys.map(s => <td key={s}>{characterDef.bases ? characterDef.bases[s] : ''}</td>)}
                        </tr>
                        : ''
                    }
                    {characterDef.growths ?
                        <tr>
                            <th className='capitalize'>growths</th>
                            {statKeys.map(s => <td key={s} >{characterDef.growths && characterDef.growths[s] != null ? `${characterDef.growths[s] + 5 * widgetState.blossom?.length}%` : '--'}</td>)}
                        </tr>
                        : ''
                    }
                    {promoBonuses != null ?
                        <tr>
                            <th className='capitalize'>Promo</th>
                            {statKeys.map(s => <td key={s} >{promoBonuses![s]}</td>)}
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
                                statKeys.map(s => getStat(s))
                            }
                        </tr>
                        : ''
                    }
                    <tr className={styles.caps}>
                        <th className='capitalize'>caps</th>
                        {statKeys.map(s => <td key={s} >{promotedCaps[s]}</td>)}
                    </tr>
                </tbody>
            </table>
            </div>
        </>
        return result;
    }

    function renderProfile() {
        return <div className={styles.profile}>
            {/* <div className={styles.portraitWrapper}> */}
            <img className="pixel-art" src={characterDef.path}></img>
            {/* </div> */}
            <div className={styles.profileData}>

                <h2>{characterDef.profileName ?? characterDef.conditional?.player?.displayName ?? characterDef.displayName ?? <span className={'capitalize'}>{characterDef.name}</span>}</h2>
                {characterDef.altNames || characterDef.conditional?.player?.displayName ? <ul className={styles.altNames}>
                    {characterDef.altNames?.map(c => <li key={c} >{c}</li>)}
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

    function cmToFtIn(cm: number) {
        const inches = cm / 2.54;
        let ft = Math.floor(inches / 12);
        let inchLeft = Math.round(inches - ft * 12);
        if (inchLeft >= 12) { // ideally equal 12, but
            ft += 1;
            inchLeft -= 12;
        }
        return `${ft}'${inchLeft}''`;
    }

    function renderExtendedProfile() {
        return <ul className={styles.extendedProfile}>
            <li><strong>Country of Origin: </strong><span className="capitalize">{characterDef.nationality}</span></li>
            {characterDef.height ? <li><strong>Height: </strong>{characterDef.height}cm / {cmToFtIn(characterDef.height)}</li> : ''}
            {characterDef.age ? <li><strong>Age: </strong>{characterDef.age}</li> : ''}
            {characterDef.epithet ? <li><strong>Epithet: </strong>{characterDef.epithet}</li> : ''}

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