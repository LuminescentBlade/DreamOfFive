import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Bellona: IDoFPlayable = {
    name: 'bellona',
    artists: [DoFArtist.Astra, DoFArtist.Amelia],
    class: DoFClasses.DrakeRider,
    nationality: DoFNationality.Vishara,
    routeConfig:{
        onduris: {
            player: 9
        },
        musain: {
            player: 15
        }
    }
};
