import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Hereward: IDoFCharacter = {
    name: DoFCharKey.Hereward,
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Cataphract,
    height: 188,
    nationality: DoFNationality.Aukema,
    routeConfig: {
        allRoute: {
            player: 16,
            npc: 6
        }
    },
    gateProfileDetailsChapter: 16,
    affinity: DoFAffinities.Anima
};
