import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Gabriel: IDoFPlayable = {
    name: 'gabriel',
    artists: [DoFArtist.Amelia],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Warlock,
    routeConfig: {
        allRoute: {
            player: 5
        }
    }
};
