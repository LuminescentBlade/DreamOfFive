import { DoFPromotedClasses, DoFUnpromotedClasses } from "@/src/config/classes.config";
import { IDoFRenderCharacter, IDoFStats } from "@/src/models/dream-of-five.interfaces";
import { useState } from "react";
import styles from './index.module.scss';
import Overlay from "../overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowsUpDownLeftRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Toggle from "../toggle";
import CharacterProfile from "../unit-profile";
import PlayerAverages from "../player-averages";

enum CharacterDetailState {
    Stat = 'stat',
    ExtendedProfile = 'profile',
    Gallery = 'gallery'
};

let offset = { left: 0, top: 0 };
let isDragging = false;
let cachedState: any = {
    enableCompareMode: false,
    dragStateStyle: {},
    state: CharacterDetailState.Stat,
    resetState: false
};

let currentCharacter: string | undefined;

export default function CharacterDetails({ characterDef, clear, experimentalFeatures }: { characterDef: IDoFRenderCharacter, clear: () => void, experimentalFeatures?: boolean }) {
    // show hide items
    const showStats = (characterDef.bases || characterDef.growths);
    const showExtendedProfile = experimentalFeatures && characterDef.nationality;
    const showGallery = false;

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

    const [widgetState, setWidgetState] = useState(cachedState);

    currentCharacter = characterDef.name;

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
        currentCharacter = undefined;
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
                return <CharacterProfile characterDef={characterDef}/>;
            case CharacterDetailState.Stat:
            default:
                return <PlayerAverages characterDef={characterDef}></PlayerAverages>;
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