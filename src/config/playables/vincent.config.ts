import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Vincent: IDoFPlayable = {
    name: DoFCharKey.Vincent,
    artists: [DoFArtist.Amelia, DoFArtist.Astra],
    class: DoFClasses.Sentinel,
    nationality: DoFNationality.Vishara,
    routeConfig:{
        onduris: {
            player: 98
        },
        musain: {
            enemy: 99
        }
    }
};
