import { DoFArtist, DoFNationality, DoFUnitState } from "./enums";

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
    [DoFUnitState.Player]: IDoFRenderUnit[];
    [DoFUnitState.Enemy]: IDoFRenderUnit[];
    [DoFUnitState.NPC]: IDoFRenderUnit[];
    [DoFUnitState.Generic]: IDoFRenderUnit[]
};


