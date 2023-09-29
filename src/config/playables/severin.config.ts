import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Severin: IDoFPlayable = {
    name: 'severin',
    artists: [DoFArtist.Lumi],
    blurb: '"... ever aspiring to improve his lot in life. He had come so far from nothing, yet never quite far enough..."',
    class: DoFClasses.Harrier,
    nationality: DoFNationality.Musain,
    routeConfig:{
        musain: {
            player: 15,
            enemy: 12,
            npc: 7
        }
    }
};
