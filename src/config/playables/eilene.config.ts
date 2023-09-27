import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Eilene: IDoFPlayable =  {
    name: DoFCharKey.Eilene,
    artists: [DoFArtist.Astra, DoFArtist.Amelia, DoFArtist.Nih],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.PegRider,
    routeConfig:{
        allRoute: {
            player: 1
        }
    }
};
