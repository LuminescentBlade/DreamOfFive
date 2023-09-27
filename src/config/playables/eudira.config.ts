import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Eudira: IDoFPlayable = {
    name: 'eudira',
    artists: [DoFArtist.AK],
    class: DoFClasses.Hexe,
    nationality: DoFNationality.Musain,
    routeConfig: {
        musain: {
            player: 14,
            enemy: [8, 13],
        }
    }
};
