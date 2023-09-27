import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Crowe: IDoFPlayable = {
    name: 'crowe',
    artists: [DoFArtist.Amelia],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Archer,
    routeConfig:{
        allRoute: {
            player: 3,
            enemy: 3
        }
    }
};
