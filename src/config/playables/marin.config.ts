import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Marin: IDoFPlayable = {
    name: 'marin',
    artists: [DoFArtist.Lumi, DoFArtist.Amelia],
    class: DoFClasses.Cavalier,
    nationality: DoFNationality.Musain,
    routeConfig:{
        musain: {
            player: 10
        }
    }
};
