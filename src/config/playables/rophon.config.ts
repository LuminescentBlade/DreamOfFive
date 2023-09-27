import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Ironside: IDoFPlayable = {
    name: DoFCharKey.Ironside,
    fullName: 'Ironside',
    artists: [DoFArtist.Lumi, DoFArtist.Amelia],
    nationality: DoFNationality.Onduris,
    routeConfig:{
        allRoute: {
            npc: 99
        }
    }
};
