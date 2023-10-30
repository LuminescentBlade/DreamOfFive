import { DoFArtist, DoFClasses, DoFNationality, DoFWeaponType } from "./enums";
import { IAltConfig, IRenderCharacterConfig, IRenderContent, IRenderItemConfig, IRenderUnit, IRouteConfig, IUnit } from "./spritesheet.interfaces";

export interface IDoFUnit extends IUnit {
    artists: DoFArtist[];
    alt?: {
        [name: string]: IDoFAlt
    };
    class?: string,
    blurb?: string,
    nationality?: DoFNationality
};

export interface IDoFAlt extends IAltConfig {
    artists: DoFArtist[]
}

export interface IDoFBossCofig { 
    chapter: number,
    route?: string,
    class?: string,
    stats: IDoFStats,
    ranks: IDoFStats,
    weapons: string[],
    optional?: boolean,
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
    bossStats?: IDoFBossCofig[]
}
export interface IDoFStats {
    [stat: string]: number
}

export interface IDoFRenderUnit extends IDoFUnit, IRenderContent { }
export interface IDoFRenderCharacter extends IDoFCharacter, IRenderContent { };

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

