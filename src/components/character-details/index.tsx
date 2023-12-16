import { IDoFCharacter } from "@/src/models/dream-of-five.interfaces";
import styles from './index.module.scss';
import CharacterProfile from "../unit-profile";
import PlayerAverages from "../player-averages";
import { DoFUnitState } from "@/src/models/enums";
import { IRenderCharacterConfig } from "@/src/lib/models/spritesheet.interfaces";
import NonPlayableStats from "../boss-layout";
import CharacterOverlay from "../character-overlay";

enum CharacterDetailState {
    Stat = 'stat',
    ExtendedProfile = 'profile',
    Gallery = 'gallery',
    BossStats = 'boss_stats',
    NPCStats = 'npc_stats',
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
    const isNPC = unitType === DoFUnitState.NPC;
    // show hide items
    const showStats = (isPlayer) && (characterDef.bases || characterDef.growths);
    const showExtendedProfile = characterDef.height != null && (!characterDef.gateProfileTabChapter || characterDef.gateProfileTabChapter <= characterConfig.chapter);
    const showBossStats = characterDef.bossStats != null;
    const showNPCStats = characterDef.npcStats != null;
    const showGallery = false;
    const showSideProfileDetails = (characterDef.gateProfileDetailsChapter ?? 0) <= characterConfig.chapter;

    let defaultView: CharacterDetailState | undefined;
    const validViews = new Set<string>();
    if (showStats) {
        validViews.add(CharacterDetailState.Stat);
        defaultView = CharacterDetailState.Stat;
    }

    if (showBossStats) {
        validViews.add(CharacterDetailState.BossStats);
        if (isEnemy) {
            defaultView = defaultView ?? CharacterDetailState.BossStats;
        }
    }

    if (showNPCStats) {
        validViews.add(CharacterDetailState.NPCStats);
        if (isNPC) {
            defaultView = defaultView ?? CharacterDetailState.NPCStats;
        }
    }

    if (showExtendedProfile) {
        validViews.add(CharacterDetailState.ExtendedProfile);
        defaultView = defaultView ?? CharacterDetailState.ExtendedProfile;
    }

    if (showGallery) {
        validViews.add(CharacterDetailState.Gallery);
        defaultView = defaultView ?? CharacterDetailState.Gallery;
    }
  
    function renderSideProfile() {
        return <div className={styles.profile}>
            <div className={styles.portraitWrapper}>
                {characterDef.affinity && showSideProfileDetails ? <div className={`icon-affinity-${characterDef.affinity} ${styles.affinity}`}></div> : ''}
                <img className="pixel-art" src={characterDef.path}></img>
            </div>
            <div className={styles.profileData}>
                <h2>
                    {characterDef.profileName ?? characterDef.displayName ?? <span className={'capitalize'}>{characterDef.name}</span>}
                </h2>
                {showSideProfileDetails ? <>

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

                </> : ''}
            </div>
        </div>
    }

    function renderContent(state: string) {
        switch (state) {
            case CharacterDetailState.Gallery:
                return '';
            case CharacterDetailState.ExtendedProfile:
                return <CharacterProfile characterDef={characterDef} />;
            case CharacterDetailState.Stat:
                return <PlayerAverages characterDef={characterDef} />;
            case CharacterDetailState.NPCStats:
                return <NonPlayableStats stats={characterDef.npcStats!} chapterLimit={characterConfig.chapter} />
            case CharacterDetailState.BossStats:
                return <NonPlayableStats stats={characterDef.bossStats!} chapterLimit={characterConfig.chapter} />
            default:
                return ''
        }
    }




    function renderTabs(currentState: string, onTabSelect: (selectedState: string) => void) {
        if (!showStats && !showExtendedProfile && !showGallery && !showBossStats && !showNPCStats) {
            return '';
        }

        const getSectionTab = (state: CharacterDetailState, label: string) =>
        (<li>
            <button
                className={`button-wrapper ${currentState === state ? styles.selectedTab : ''}`}
                onClick={() => onTabSelect(state)}
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
        ) : '';
        let npcStats = showNPCStats ? (
            isNPC ? getSectionTab(CharacterDetailState.NPCStats, 'Stats') :
                getSectionTab(CharacterDetailState.NPCStats, 'NPC')
        ) : ''

        return <ul className={styles.tabs}>
            {
                isPlayer ?
                    <>
                        {stats}
                        {profile}
                        {gallery}
                        {bossStats}
                        {npcStats}
                    </> :
                    isEnemy ?
                        <>
                            {bossStats}
                            {profile}
                            {gallery}
                            {npcStats}
                        </> :
                        <>
                            {npcStats}
                            {profile}
                            {gallery}
                            {bossStats}
                        </>
            }
        </ul>;
    }

    return <CharacterOverlay
        clear={clear}
        renderContent={renderContent}
        renderTabs={renderTabs}
        renderSideProfile={renderSideProfile}
        initialState={defaultView!}
        validViews={validViews}
    ></CharacterOverlay>
}