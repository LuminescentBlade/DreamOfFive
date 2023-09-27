import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Cathale: IDoFPlayable = {
    name: 'cathale',
    artists: [DoFArtist.Astra],
    class: DoFClasses.Armour,
    routeConfig:{
        allRoute: {
            player: 2
        }
    }
};
