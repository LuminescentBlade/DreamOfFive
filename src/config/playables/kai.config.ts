import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Kai: IDoFPlayable = {
    name: 'kai',
    artists: [DoFArtist.Amelia],
    class: DoFClasses.DrakeKnight,
    nationality: DoFNationality.Vishara,
    routeConfig:{
        allRoute: {
            player: 99
        }
    }
};
