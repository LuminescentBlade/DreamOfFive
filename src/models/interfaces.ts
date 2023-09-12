import { DoFArtist, DoFNationality, DoFUnitState } from "./enums";

export interface IUnit{
    name: string;
    artists: string[];
    displayName?: string;
    alt?: { 
        [name: string]: IAltConfig
    };
    class?: string,
    conditional?: {
        player?: IConditional;
        enemy?: IConditional;
        npc?: IConditional;
    },
};

export interface IConditional{
    displayName?: string,
    swapPortrait?: string,
    ogPortraitName?: string,
}
export interface IAltConfig{ 
    artists: string[],
    chapter?: number,
    displayName?: string
}

export interface IDoFUnit extends IUnit {
    artists: DoFArtist[];
    fullName?: string;
    alt?: { 
        [name: string]: IDoFAlt
    };
    nationality?: DoFNationality,
};

export interface IDoFAlt extends IAltConfig{
    artists: DoFArtist[]
}
export interface IDoFCharacter extends IDoFUnit {
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
    // [DoFUnitState.Player]: IDoFRenderUnit[];
    // [DoFUnitState.Enemy]: IDoFRenderUnit[];
    // [DoFUnitState.NPC]: IDoFRenderUnit[];
    // [DoFUnitState.Generic]: IDoFRenderUnit[]
    [key: string]: IDoFRenderUnit[]
};


