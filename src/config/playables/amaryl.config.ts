import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Amaryl: IDoFCharacter = {
    name: DoFCharKey.Amaryl,
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
    height: 163,
    epithet: 'The Oracle',
    affinity: DoFAffinities.Dark
};
