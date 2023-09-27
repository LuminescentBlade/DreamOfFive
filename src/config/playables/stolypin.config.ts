import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Stolypin: IDoFPlayable = {
    name: 'stolypin',
    artists: [DoFArtist.Astra, DoFArtist.Amelia, DoFArtist.Lumi],
    class: DoFClasses.Harrier,
    nationality: DoFNationality.Vishara,
    routeConfig:{
        onduris: {
            player: 15
        }
    }
};
