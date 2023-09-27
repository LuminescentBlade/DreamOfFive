import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Jolyon: IDoFPlayable = {
    name: 'jolyon', // enjo
    artists: [DoFArtist.Astra, DoFArtist.Amelia],
    class: DoFClasses.Mage,
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
