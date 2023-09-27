import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Florent: IDoFPlayable = {
    name: 'florent',
    artists: [DoFArtist.Astra, DoFArtist.Amelia],
    class: DoFClasses.Cavalier,
    nationality: DoFNationality.Musain,
    routeConfig:{
        musain: {
            player: 10
        },
        onduris: {
            player: 15
        }
    }
};
