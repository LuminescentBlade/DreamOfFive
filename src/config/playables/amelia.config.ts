import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Amelia: IDoFPlayable = {
    name: 'amelia',
    artists: [DoFArtist.Amelia],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Mage,
    routeConfig:{
        allRoute: {
            player: 1
        }
    }
};
