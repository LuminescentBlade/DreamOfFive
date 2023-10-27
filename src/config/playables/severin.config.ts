import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Severin: IDoFCharacter = {
    name: DoFCharKey.Severin,
    profileName: 'Severin Tourmalet',
    artists: [DoFArtist.Lumi],
    blurb: '"... ever aspiring to improve his lot in life. He had come so far from nothing, yet never quite far enough..."',
    class: DoFClasses.Harrier,
    nationality: DoFNationality.Musain,
    height: 172,
    routeConfig:{
        musain: {
            player: 15,
            enemy: [11,12],
            npc: [7,13]
        }
    }
};
