import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Claudiya: IDoFPlayable = {
    name: 'claudiya',
    artists: [DoFArtist.Amelia],
    class: DoFClasses.Sibyl,
    nationality: DoFNationality.Vishara,
    routeConfig:{
        allRoute: {
            player: 99
        }
    }
};
