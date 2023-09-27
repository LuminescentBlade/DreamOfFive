import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Cothiva: IDoFPlayable = {
    name: 'cothiva',
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Adept,
    routeConfig:{
        allRoute: {
            player: 5
        }
    }
};
