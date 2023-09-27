import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Asher: IDoFPlayable = {
    name: 'asher',
    artists: [DoFArtist.Amelia, DoFArtist.Lumi],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Priest,
    routeConfig: {
        allRoute: {
            player: 0
        }
    }
};
