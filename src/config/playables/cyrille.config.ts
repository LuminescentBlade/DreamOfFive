
import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Cyrille: IDoFPlayable = {
    name: DoFCharKey.Cyrille,
    artists: [DoFArtist.Lumi],
    // blurb: '',
    nationality:DoFNationality.Musain,
    class: DoFClasses.Cavalier,
    routeConfig:{
        allRoute: {
            player: 99
        }
    },
    promotesTo: DoFClasses.Paladin,
};
