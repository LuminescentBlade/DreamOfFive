import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Ioan: IDoFPlayable = {
    name: 'ioan',
    artists: [DoFArtist.Amelia, DoFArtist.Astra],
    nationality: DoFNationality.Vishara,
    class: DoFClasses.DrakeRider,
    routeConfig: {
        allRoute: {
            player: 6,
            enemy: 6
        }
    }
};
