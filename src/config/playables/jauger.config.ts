import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Jauger: IDoFPlayable = {
    name: 'jauger',
    artists: [DoFArtist.Astra, DoFArtist.Amelia],
    class: DoFClasses.Armour,
    nationality: DoFNationality.Aukema,
    routeConfig:{
        allRoute: {
            player: 16
        }
    }
};
