import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Franceza: IDoFPlayable = {
    name: 'franceza',
    artists: [DoFArtist.Amelia],
    class: DoFClasses.Archer,
    nationality: DoFNationality.Musain,
    routeConfig: {
        musain: {
            player: 8
        }
    }
};
