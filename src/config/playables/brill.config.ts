import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Brill: IDoFPlayable = {
    name: 'brill',
    artists: [DoFArtist.Amelia],
    class: DoFClasses.Marksman,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            player: 13,
            enemy: 12
        }
    }
};
