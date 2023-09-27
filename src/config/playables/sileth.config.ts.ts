import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Sileth: IDoFPlayable = {
    name: 'sileth',
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    class: DoFClasses.Mage,
    nationality: DoFNationality.Onduris,
    routeConfig:{
        onduris: {
            player: 8,
        },
        musain: {
            player: 15
        }
    }
};
