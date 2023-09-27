import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Tricia: IDoFPlayable =   {
    name: 'tricia',
    artists: [DoFArtist.Amelia, DoFArtist.Lumi],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Henchwoman,
    routeConfig:{
        allRoute: {
            player: 2
        }
    }
};
