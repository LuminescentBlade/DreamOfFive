import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Saskia: IDoFPlayable = {
    name: DoFCharKey.Saskia,
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    class: DoFClasses.Rogue,
    nationality: DoFNationality.Aukema,
    routeConfig:{
        allRoute: {
            player: 16
        }   
    }
};
