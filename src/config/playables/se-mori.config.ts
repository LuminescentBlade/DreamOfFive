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
    routeConfig: {
        onduris: {
            player: 8
        },
        musain: {
            player: 15
        }
    },
    bases: {
        hp: 27, pow: 11, skl: 14, spd: 13, luk: 8, def: 11, res: 3, con: 9
    },
    level: 10,
    growths: { hp: 75, pow: 45, skl: 60, spd: 55, luk: 40, def: 40, res: 15 },
    promotesTo: DoFClasses.Hussar
};
