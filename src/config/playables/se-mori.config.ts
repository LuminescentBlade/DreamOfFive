import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const SeMori: IDoFPlayable = {
    name: 'se-mori',
    displayName: 'se\'Mori',
    artists: [DoFArtist.Amelia, DoFArtist.Astra],
    class: DoFClasses.Fencer,
    nationality: DoFNationality.Onduris,
    alt: {
        promo: {
            artists: [DoFArtist.Amelia, DoFArtist.Astra, DoFArtist.Lumi],
            chapter: 15,
            displayName: 'Promoted'
        }
    },
    routeConfig:{
        onduris: {
            player: 8
        },
        musain: {
            player: 15
        }
    }
};
