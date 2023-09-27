import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Riva: IDoFPlayable = {
    name: 'riva',
    artists: [DoFArtist.Amelia, DoFArtist.Lumi],
    class: DoFClasses.Warlock,
    nationality: DoFNationality.Musain,
    routeConfig:{
        musain: {
            player: 11
        }
    }
};
