import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Odette: IDoFPlayable = {
    name: DoFCharKey.Odette,
    artists: [DoFArtist.Amelia, DoFArtist.Lumi],
    class: DoFClasses.Marksman,
    nationality: DoFNationality.Aukema,
    routeConfig:{
        allRoute: {
            player: 17
        }
    }
};
