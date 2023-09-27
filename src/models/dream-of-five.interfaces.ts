import { DoFArtist, DoFNationality, DoFUnitState } from "./enums";
import { IAltConfig, IRouteConfig, IUnit } from "./spritesheet.interfaces";

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
}

export interface IDoFPlayable extends IDoFCharacter{
    promotesTo?: string
}
export interface IDoFRenderUnit extends IDoFUnit {
    path: string;
    altPaths?: {
        [key: string]: string;
    },
    conditionalName?: { // used over displayName
        player?: string;
        enemy?: string;
        npc?: string;
    },
    renderOrder: number
}
export interface IDoFCharacterConfigs {
    characters: IDoFCharacter[];
    shopkeepers: IDoFUnit[];
    generics: IDoFUnit[];
};

export interface IDoFCharacterRenderer {
    [key: string]: IDoFRenderUnit[]
};

