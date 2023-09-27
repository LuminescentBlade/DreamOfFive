import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Blixa: IDoFPlayable = {
    name: 'blixa',
    artists: [DoFArtist.Amelia, DoFArtist.Astra, DoFArtist.Lumi],
    class: DoFClasses.Bard,
    nationality: DoFNationality.Onduris,
    routeConfig:{
        musain: {
            player: 9
        }
    }
};
