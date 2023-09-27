import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Lizaveta: IDoFPlayable = {
    name: 'lizaveta',
    artists: [DoFArtist.Astra, DoFArtist.Amelia],
    nationality: DoFNationality.Vishara,
    class: DoFClasses.Troubadour,
    routeConfig: {
        allRoute: {
            player: 4
        }
    }
};
