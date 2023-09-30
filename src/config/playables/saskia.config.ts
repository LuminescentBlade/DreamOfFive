import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Saskia: IDoFCharacter = {
    name: DoFCharKey.Saskia,
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    class: DoFClasses.Rogue,
    nationality: DoFNationality.Aukema,
    height: 158,
    routeConfig:{
        allRoute: {
            player: 16
        }   
    }
};
