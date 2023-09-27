import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Dahlia: IDoFPlayable = {
    name: DoFCharKey.Dahlia,
    artists: [DoFArtist.Pi],
    class: DoFClasses.Hexe,
    nationality: DoFNationality.Unknown,
    routeConfig:{
        allRoute: {
            player: 99,
            npc: 3
        }
    },
    conditional: {
        player: {displayName: 'Amaryl'}
    }
};
