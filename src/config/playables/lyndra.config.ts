import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Lyndra: IDoFPlayable =  {
    name: 'lyndra',
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    class: DoFClasses.Gladiator,
    nationality: DoFNationality.Aukema,
    routeConfig:{
        musain: {
            player: 9,
            enemy: 8.5
        }
    }
};
