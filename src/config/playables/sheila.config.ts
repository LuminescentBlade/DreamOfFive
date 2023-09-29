import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Sheila: IDoFPlayable = {
    name: 'sheila',
    artists: [DoFArtist.Amelia],
    blurb: '"... ringed by all manner of hangers-on, desperate to cling to the proximity of power, gladly laying down their lives..."',
    class: DoFClasses.SeraphKnight,
    nationality: DoFNationality.Aukema,
    routeConfig:{
        allRoute: {
            player: 91,
            npc: 2
        }
    }
};
