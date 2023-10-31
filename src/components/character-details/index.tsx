import { IDoFCharacter } from "@/src/models/dream-of-five.interfaces";
import { useState } from "react";
import styles from './index.module.scss';
import Overlay from "../overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowsUpDownLeftRight } from '@fortawesome/free-solid-svg-icons'
import Toggle from "../toggle";
import CharacterProfile from "../unit-profile";
import PlayerAverages from "../player-averages";
import { DoFUnitState } from "@/src/models/enums";
import { IRenderCharacterConfig } from "@/src/models/spritesheet.interfaces";
import BossLayout from "../boss-layout";

enum CharacterDetailState {
    Stat = 'stat',
    ExtendedProfile = 'profile',
    Gallery = 'gallery',
    BossStats = 'boss_stats'
};

let offset = { left: 0, top: 0 };
let isDragging = false;
let cachedState: any = {
    enableCompareMode: false,
    dragStateStyle: {},
    state: CharacterDetailState.Stat,
    resetState: false
};


export default function CharacterDetails({ characterConfig, clear, experimentalFeatures }: {
    characterConfig: IRenderCharacterConfig,
    clear: () => void,
    experimentalFeatures?: boolean
}) {
    const characterDef: IDoFCharacter = characterConfig.unitData;
    const unitType: string = characterConfig.type;
    const isPlayer = unitType === DoFUnitState.Player;
    const isEnemy = unitType === DoFUnitState.Enemy;
    // show hide items
    const showStats = (isPlayer) && (characterDef.bases || characterDef.growths);
    const showExtendedProfile = characterDef.height != null;
    const showBossStats =  characterDef.bossStats != null;
    const showGallery = false;

    let defaultView: CharacterDetailState | undefined;
    const validViews = new Set();
    if (showStats) {
        validViews.add(CharacterDetailState.Stat);
        defaultView = CharacterDetailState.Stat;
    }

    if (showBossStats) {
        validViews.add(CharacterDetailState.BossStats);
        defaultView = defaultView ?? CharacterDetailState.BossStats;
    }


    if (showExtendedProfile) {
        validViews.add(CharacterDetailState.ExtendedProfile);
        defaultView = defaultView ?? CharacterDetailState.ExtendedProfile;
        if(!isEnemy && defaultView !== CharacterDetailState.Stat){
            defaultView = CharacterDetailState.ExtendedProfile;
        }
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

    const [widgetState, setWidgetState] = useState(cachedState);

    function setWidgetStateCaching(widgetStateData: any) {
        cachedState = widgetStateData;
        setWidgetState(cachedState);
    }

    function setComparisonMode(value: boolean) {
        offset = { left: 0, top: 0 };
        setWidgetStateCaching({ ...widgetState, enableCompareMode: value, dragStateStyle: {} });
    }

    function clearItem() {
        clear();
        offset = { left: 0, top: 0 };
        setWidgetStateCaching({ ...widgetState, enableCompareMode: false, dragStateStyle: {}, resetState: true });
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

    function renderSideProfile() {
        return <div className={styles.profile}>
            <div className={styles.portraitWrapper}>
                {characterDef.affinity ? <div className={`icon-affinity-${characterDef.affinity} ${styles.affinity}`}></div> : ''}
                <img className="pixel-art" src={characterDef.path}></img>
            </div>
            <div className={styles.profileData}>
                <h2>
                    {characterDef.profileName ?? characterDef.displayName ?? <span className={'capitalize'}>{characterDef.name}</span>}
                </h2>
                {characterDef.altNames || characterDef.conditional?.player?.displayName ? <ul className={styles.altNames}>
                    {characterDef.altNames?.map(c => <li key={c} >{c}</li>)}
                </ul> : ''}

                <div className={styles.subtitle}>
                    {characterDef.level ? `Level ${characterDef.level}` : ''} <span className={styles.classText}>{characterDef.class}</span>
                    {characterDef.promotesTo ? <div className="sub">Promotes to <span className={styles.classText}>{characterDef.promotesTo}</span></div> : ''}
                </div>
                <div className={styles.blurb}>
                    {characterDef.blurb}
                </div>

            </div>
        </div>
    }

    function renderContent(state: CharacterDetailState) {
        switch (state) {
            case CharacterDetailState.Gallery:
                return '';
            case CharacterDetailState.ExtendedProfile:
                return <CharacterProfile characterDef={characterDef} />;
            case CharacterDetailState.Stat:
                return <PlayerAverages characterDef={characterDef} />;
            case CharacterDetailState.BossStats:
                return <BossLayout characterDef={characterDef} chapterLimit={characterConfig.chapter} />
            default:
                return ''
        }
    }




    function renderTabs() {
        if (!showStats && !showExtendedProfile && !showGallery && !showBossStats) {
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
        let bossStats = showBossStats ? (
            isEnemy ? 
             getSectionTab(CharacterDetailState.BossStats, 'Stats') :
             getSectionTab(CharacterDetailState.BossStats, 'Enemy')
        ): '';

        return <ul className={styles.tabs}>
            {
                isPlayer ?
                <>
                    {stats}
                    {profile}
                    {gallery}
                    {bossStats}
                </> :
                isEnemy ?
                <>
                    {bossStats}
                    {profile}
                    {gallery}
                </>:
                <>
                    {profile}
                    {gallery}
                    {bossStats}
                </>
            }
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
                {renderSideProfile()}
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