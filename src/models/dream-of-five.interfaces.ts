import { DoFArtist, DoFClasses, DoFNationality } from "./enums";
import { IAltConfig, INonPlayableUnitStats, IRenderCharacterConfig, IRenderItemConfig, IRouteConfig, IUnit } from "../lib/models";

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

export interface IDoFNonPlayableConfig extends INonPlayableUnitStats{
    customTags?: string[]
}

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
    epithet?: string,
    affinity?: string,
    // can make a more robust gating system but for now simiplicity works and is good
    gateProfileTabChapter?: number
    gateProfileDetailsChapter?: number
    bossStats?: IDoFNonPlayableConfig[],
    mountName?: string,
    isIronside?: boolean
}
export interface IDoFStats {
    [stat: string]: number
}

export interface IRenderDoFConfig extends IRenderCharacterConfig {
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

