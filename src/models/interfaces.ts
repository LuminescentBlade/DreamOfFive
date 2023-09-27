import { DoFArtist, DoFNationality, DoFUnitState } from "./enums";

export interface IKeyMap<T> { [key: string]: T };
export interface IUnit {
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
        chapter?: IConditional;
    },
    isSpoiler?: boolean;
    fullSheetRenderOrderOverride?: number
};

export interface IConditional {
    chapter?: number;
    displayName?: string,
    swapPortrait?: string,
    ogPortraitName?: string,
}
export interface IAltConfig {
    artists: string[],
    chapter?: number,
    displayName?: string,
    isSpoiler?: boolean
}

export interface IDoFUnit extends IUnit {
    artists: DoFArtist[];
    fullName?: string;
    alt?: {
        [name: string]: IDoFAlt
    };
    nationality?: DoFNationality,
};

export interface IDoFAlt extends IAltConfig {
    artists: DoFArtist[]
}

export interface ICharacterStateChapter {
    player?: number; // x chapters will be counted as .5
    enemy?: number | number[];
    npc?: number;
}
export interface IDoFCharacter extends IDoFUnit {
    musain?: ICharacterStateChapter,
    onduris?: ICharacterStateChapter,
    allRoute?: ICharacterStateChapter
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
    // [DoFUnitState.Player]: IDoFRenderUnit[];
    // [DoFUnitState.Enemy]: IDoFRenderUnit[];
    // [DoFUnitState.NPC]: IDoFRenderUnit[];
    // [DoFUnitState.Generic]: IDoFRenderUnit[]
    [key: string]: IDoFRenderUnit[]
};


