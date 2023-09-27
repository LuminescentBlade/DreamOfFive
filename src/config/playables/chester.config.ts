import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Chester: IDoFPlayable = {
    name: 'chester',
    artists: [DoFArtist.Amelia],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Thief,
    routeConfig: {
        allRoute: {
            player: 2
        }
    }
};
