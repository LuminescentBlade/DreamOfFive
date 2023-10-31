import { DoFArtist, DoFClasses, DoFNationality, DoFWeaponType } from "./enums";
import { IAltConfig, IRenderCharacterConfig, IRenderItemConfig, IRouteConfig, IUnit } from "./spritesheet.interfaces";

export interface IDoFUnit extends IUnit {
    artists: DoFArtist[];
    alt?: {
        [name: string]: IDoFAlt
    };
    class?: string,
    blurb?: string,
    nationality?: DoFNationality,
    path?: string,
};

export interface IDoFAlt extends IAltConfig {
    artists: DoFArtist[]
}

export interface IDoFBossCofig { 
    chapter: number,
    level?: number, // null means copy from base
    route?: string, // null means all routes
    class?: string, // null means copy from base
    stats?: IDoFStats, // null means copy from base
    ranks?: IDoFStats, // null means copy from base
    weapons?: string[], // null means copy from base
    optional?: boolean,
    drops?: string,
    stealable?: string,
    talk?: boolean,
    gameOver?: boolean // basically Farrell
};
export interface IDoFCharacter extends IDoFUnit {
    routeConfig: IRouteConfig
    secret?: boolean,
    altNames?: string[], // subtitles to profile names, displayed as secondary
    // overrides all other instances of name displays for the profile, otherwise if you want the same name on the sheet and profile use displayName
    // this is mostly to write in last names to display
    profileName?: string,
    //extendedProfile
    height?: number,
    age?: number,
    //stats
    promotesTo?: DoFClasses,
    bases?: IDoFStats,
    growths?: IDoFStats,
    level?: number,
    epithet?: string,
    weapons?: IDoFStats,
    affinity?: string,
    bossStats?: IDoFBossCofig[],
    // can make a more robust gating system but for now simiplicity works and is good
    gateProfileTabChapter?: number
    gateProfileDetailsChapter?: number
}
export interface IDoFStats {
    [stat: string]: number
}

export interface IRenderDoFConfig extends IRenderCharacterConfig{
    displayProfile: boolean

}
export interface IDoFCharacterConfigs {
    characters: IDoFCharacter[];
    shopkeepers: IDoFUnit[];
    generics: IDoFUnit[];
};

export type IDoFCharacterRenderer = {
    [key: string]: IRenderItemConfig[]
} & {
    player?: IRenderCharacterConfig[],
    enemy?: IRenderCharacterConfig[],
};

