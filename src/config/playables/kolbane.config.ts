import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Kolbane: IDoFPlayable = {
    name: 'kolbane',
    artists: [DoFArtist.Lumi],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Mercenary,
    routeConfig: {
        allRoute: {
            player: 0
        }
    }
};
