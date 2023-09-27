import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Meliza: IDoFPlayable = {
    name: 'meliza',
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Mage,
    nationality: DoFNationality.Musain,
    routeConfig:{
        musain: {
            player: 12
        }
    }
};
