import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Dahlia: IDoFPlayable = {
    name: DoFCharKey.Dahlia,
    artists: [DoFArtist.Pi],
    blurb: '"... content for so long just to read fate. Evidently, at this stage, she felt that the dice of fate needed loading..."',
    class: DoFClasses.Sibyl,
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
