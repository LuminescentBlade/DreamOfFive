import { DoFArtist, DoFNationality } from "./enums";

export interface IDoFUnit {
    name: string; //displayed name 
    displayName?: string;
    fullName?: string;
    alt?: { name: string, artists: DoFArtist[] }[];
    artists: DoFArtist[];
    nationality?: DoFNationality,
    hidden?: boolean
};

export interface IDoFCharacter extends IDoFUnit{
    class: string,
}

export interface IDoFPlayerCharacter extends IDoFCharacter {
    joinChapter: string;
}

export interface IDoFCharacterConfigs {
    player: IDoFPlayerCharacter[];
    enemy: IDoFCharacter[];
    npc: IDoFCharacter[];
    generic: IDoFUnit[];
};


