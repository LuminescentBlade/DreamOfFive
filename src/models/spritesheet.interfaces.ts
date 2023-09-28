export interface IUnit {
    name: string;
    artists: string[];
    displayName?: string;
    alt?: {
        [name: string]: IAltConfig
    };
    conditional?: {
        player?: IConditional;
        enemy?: IConditional;
        npc?: IConditional;
        chapter?: IConditional;
    },
    isSpoiler?: boolean;
    fullSheetRenderOrderOverride?: number
}

export interface IRenderContent{
    path: string;
    altPaths?: {
        [key: string]: string;
    },
    conditionalName?: { // used over displayName
        player?: string;
        enemy?: string;
        npc?: string;
    },
    renderOrder: number,
}

export interface IRenderUnit extends IUnit, IRenderContent{}

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

export interface ICharacterStateChapter {
    player?: number; // x chapters will be counted as .5
    enemy?: number | number[];
    npc?: number;
}

export type IRouteConfig = {
    allRoute?: ICharacterStateChapter
} & {
    [routeName: string]: ICharacterStateChapter,
}
