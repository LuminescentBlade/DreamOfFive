import { IDoFCharacter, IDoFNonPlayableConfig } from "@dof/src/models/dream-of-five.interfaces";
import styles from './index.module.scss';
import CharacterProfile from "../unit-profile";
import { DoFRoute, DoFUnitState, DoFWeaponType } from "@dof/src/models/enums";
import { IRenderCharacterConfig } from "@dof/src/lib/models/spritesheet.interfaces";
import { CharacterOverlay } from "@dof/src/lib/components";
import { PlayerAverages, NonPlayableStats } from "@dof/src/lib/components";
import { INonPlayableUnitStats } from "@dof/src/lib";
import { DoFChapters } from "@dof/src/config/chapters.config";
import { DoFPromotedClasses, DoFUnpromotedClasses } from "@dof/src/config/classes.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowsUpDownLeftRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Supports from "../supports";

enum CharacterDetailState {
    Stat = 'stat',
    ExtendedProfile = 'profile',
    Gallery = 'gallery',
    BossStats = 'boss_stats',
    NPCStats = 'npc_stats',
    Supports = 'supports'
};

export default function CharacterDetails({ characterConfig, characterMap, clear, experimentalFeatures }: {
    characterConfig: IRenderCharacterConfig,
    clear: () => void,
    experimentalFeatures?: boolean,
    characterMap: { [key: string]: IRenderCharacterConfig } 
}) {
    const characterDef: IDoFCharacter = characterConfig.unitData;
    const unitType: string = characterConfig.type;
    const isPlayer = unitType === DoFUnitState.Player;
    const isEnemy = unitType === DoFUnitState.Enemy;
    const isNPC = unitType === DoFUnitState.NPC;
    // show hide items
    const showStats = (isPlayer) && (characterDef.stats || characterDef.growths);
    const showSupports = (isPlayer) && characterDef.supports;
    const showExtendedProfile = characterDef.height != null && (!characterDef.gateProfileTabChapter || characterDef.gateProfileTabChapter <= characterConfig.chapter);
    const showBossStats = characterDef.bossStats?.length;
    const showNPCStats = characterDef.npcStats?.length;
    const showGallery = false;
    const showSideProfileDetails = (characterDef.gateProfileDetailsChapter ?? 0) <= characterConfig.chapter;

    const uiIcons = {
        dragDrop: () => <FontAwesomeIcon icon={faArrowsUpDownLeftRight} size="xl" />,
        exit: () => <FontAwesomeIcon icon={faXmark} size="2x" />,
        removeBlossom: () => <FontAwesomeIcon icon={faMinus} size="lg" />,
        addBlossom: (isAtLimit: boolean) => <span className={styles.blossomDewIcon}>
            <span className="icon-blossom-dew"></span> {isAtLimit ?
                <span className={`${styles.plus} full-center`}><FontAwesomeIcon icon={faPlus} size="sm" /></span> : ''}
        </span>
    };

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

    if (showSupports) {
        validViews.add(CharacterDetailState.Supports);
        defaultView = defaultView ?? CharacterDetailState.Supports;
    }

    function getChapterLabel(statConfig: INonPlayableUnitStats) {
        const chapter = DoFChapters[statConfig.chapter];
        const routeLabel = statConfig.chapter >= 7 && statConfig.chapter <= 14 ? (statConfig.route === DoFRoute.Musain ? 'A' : statConfig.route === DoFRoute.Onduris ? 'B' : '') : ''
        return !chapter.title ?
            `Chapter ${chapter.value}${routeLabel}` :
            chapter.title.match(/\d/g) ? `Chapter ${chapter.title}` : chapter.title
    }

    function getPortrait(isPromo: boolean) {
        if (!characterDef.path) {
            return '';
        }
        if (isPromo && characterDef.alt?.promo) {
            const splitArr = characterDef.path.split('.');
            return `${splitArr[0]}_promo.${splitArr[1]}`;
        }
        return characterDef.path;
    }

    function renderSideProfile(extraState: any) {
        return <div className={styles.profile}>
            <div className={styles.portraitWrapper}>
                {characterDef.affinity && showSideProfileDetails ? <div className={`icon-affinity-${characterDef.affinity} ${styles.affinity}`}></div> : ''}
                {<img className="pixel-art" src={getPortrait(extraState.promoPortrait as boolean)}></img>}
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

    function renderCustomTags(npcData: IDoFNonPlayableConfig) {
        return <>
            {npcData.customTags?.length ? npcData.customTags.map((tag, i) => <span key={i} className={styles.customTags}>{tag}</span>) : ''}
        </>
    }

    function renderContent(state: string, stateUpdate: (data: any) => void) {
        const unitDisplayConfig = {
            promotedClasses: DoFPromotedClasses,
            unpromotedClasses: DoFUnpromotedClasses,
            totalWeaponTypes: DoFWeaponType,
            displayWeaponIcons: true,
            enableBlossomDew: true,
            blossomCap: 1,
            blossomValue: 5,
            uiIcons
        };
        switch (state) {
            case CharacterDetailState.Gallery:
                return '';
            case CharacterDetailState.ExtendedProfile:
                return <CharacterProfile characterDef={characterDef} />;
            case CharacterDetailState.Stat:

                return <PlayerAverages
                    characterDef={characterDef}
                    config={unitDisplayConfig}
                    onDataChange={
                        (data) => {
                            const usePromo = data.unpromotedLevel > 0 && data.promotedLevel > 0;
                            stateUpdate({ promoPortrait: usePromo });
                        }
                    }
                />
            case CharacterDetailState.NPCStats:
                return <NonPlayableStats stats={characterDef.npcStats!} chapterLimit={characterConfig.chapter} getChapterLabel={getChapterLabel} config={unitDisplayConfig} customTags={renderCustomTags} />
            case CharacterDetailState.BossStats:
                return <NonPlayableStats stats={characterDef.bossStats!} chapterLimit={characterConfig.chapter} getChapterLabel={getChapterLabel} config={unitDisplayConfig} customTags={renderCustomTags} />
            case CharacterDetailState.Supports:
                return <Supports characterDef={characterDef} characterMap={characterMap}></Supports>
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
        let supports = showSupports ? getSectionTab(CharacterDetailState.Supports, 'Supports'): '';

        return <ul className={styles.tabs}>
            {
                isPlayer ?
                    <>
                        {stats}
                        {profile}
                        {gallery}
                        {bossStats}
                        {npcStats}
                        {supports}
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
        uiIcons={uiIcons}
        extraStateData={{ promoPortrait: false }}
    ></CharacterOverlay>
}