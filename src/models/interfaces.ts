import { DoFArtist, DoFNationality } from "./enums";

export interface IDoFUnit {
    name: string; //displayed name 
    displayName?: string;
    fullName?: string;
    alt?: { name: string, artists: DoFArtist[] }[];
    artists: DoFArtist[];
    nationality?: DoFNationality,
    class?: string,
    hidden?: boolean
};

export interface IDoFCharacter extends IDoFUnit{
    chapter?: string
}

export interface IDoFCharacterConfigs {
    player: IDoFCharacter[];
    enemy: IDoFCharacter[];
    npc: IDoFCharacter[];
    generic: IDoFUnit[];
};


