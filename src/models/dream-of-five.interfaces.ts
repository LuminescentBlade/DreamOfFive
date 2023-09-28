import { DoFArtist, DoFClasses, DoFNationality } from "./enums";
import { IAltConfig, IRenderContent, IRenderUnit, IRouteConfig, IUnit } from "./spritesheet.interfaces";

export interface IDoFUnit extends IUnit {
    artists: DoFArtist[];
    fullName?: string;
    alt?: {
        [name: string]: IDoFAlt
    };
    class?: string,
    nationality?: DoFNationality,
};

export interface IDoFAlt extends IAltConfig {
    artists: DoFArtist[]
}

export interface IDoFCharacter extends IDoFUnit {
    routeConfig: IRouteConfig
    secret?: boolean,
}
export interface IDoFStats {
    [stat: string]: number
}

export interface IDoFPlayable extends IDoFCharacter {
    promotesTo?: DoFClasses,
    bases?: IDoFStats,
    growths?: IDoFStats
    level?: number
}
export interface IDoFRenderUnit extends IDoFUnit, IRenderContent {}
export interface IDoFRenderCharacter extends IDoFRenderUnit, IDoFCharacter { };
export interface IDoFRenderPlayable extends IDoFRenderUnit, IDoFPlayable { };
export interface IDoFCharacterConfigs {
    characters: IDoFCharacter[];
    shopkeepers: IDoFUnit[];
    generics: IDoFUnit[];
};

export type IDoFCharacterRenderer = {
    [key: string]: IDoFRenderUnit[]
} & {
    player?: IDoFRenderPlayable[],
    enemy?: IDoFRenderCharacter[],
};

