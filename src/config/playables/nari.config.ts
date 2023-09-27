import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Nari: IDoFPlayable = {
    name: 'nari',
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Mercenary,
    nationality: DoFNationality.Onduris,
    routeConfig:{
        onduris: {
            player: 10
        }
    }
};
