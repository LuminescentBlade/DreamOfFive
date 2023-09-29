import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Hereward: IDoFPlayable = {
    name: DoFCharKey.Hereward,
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Cataphract,
    nationality: DoFNationality.Aukema,
    routeConfig: {
        allRoute: {
            player: 16,
            npc: 6
        }
    }
};
