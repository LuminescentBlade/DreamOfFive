import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Wren: IDoFPlayable =  {
    name: 'wren',
    artists: [DoFArtist.Lumi, DoFArtist.Amelia],
    class: DoFClasses.Cleric,
    nationality: DoFNationality.Onduris,
    routeConfig:{
        onduris: {
            player: 9
        }
    }
};
