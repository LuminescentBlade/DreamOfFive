import { DoFArtist, DoFNationality } from "./enums";

export interface IDoFUnit {
    name: string;
    artists: DoFArtist[];
    displayName?: string;
    fullName?: string;
    alt?: { name: string, artists: DoFArtist[] }[];
    nationality?: DoFNationality,
    class?: string,
};
export interface IDoFCharacter extends IDoFUnit {
    conditionalName?: { // used over displayName
        player?: string;
        enemy?: string;
        npc?: string;
    },
    musain?: {
        player?: number; // x chapters will be counted as .5
        enemy?: number;
        npc?: number;
    },
    onduris?: {
        player?: number;
        enemy?: number;
        npc?: number;
    },
    allRoute?: {
        player?: number;
        enemy?: number;
        npc?: number;
    }
}
export interface IDoFRenderUnit extends IDoFUnit{
    path: string;
    altPaths?: {
        [key: string]: string;
    }
}
export interface IDoFCharacterConfigs {
    characters: IDoFCharacter[];
    shopkeepers: IDoFUnit[];
    generics: IDoFUnit[];
};

export interface IDoFCharacterRenderer {
    player: IDoFRenderUnit[];
    enemy: IDoFRenderUnit[];
    npc: IDoFRenderUnit[];
    generics: IDoFRenderUnit[]
};


