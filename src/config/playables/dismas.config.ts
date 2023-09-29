import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Dismas: IDoFPlayable = {
    name: DoFCharKey.Dismas,
    artists: [DoFArtist.Astra],
    blurb: '"... still bearing the scars that we carved into him. He was a man changed, no longer cocksure..."',
    class: DoFClasses.Brigand,
    nationality: DoFNationality.Aukema,
    alt: {
        punished: { artists: [DoFArtist.Astra], chapter: 15, displayName: 'Returns', isSpoiler: true }
    },
    conditional: {
        chapter: {
            chapter: 15,
            swapPortrait: 'punished',
            ogPortraitName: 'Dismas Prologue'
        }
    },
    routeConfig:{
        allRoute: {
            player: 16,
            enemy: [0,15]
        }
    }
};
