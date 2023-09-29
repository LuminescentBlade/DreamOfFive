import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Jolyon: IDoFPlayable = {
    name: 'jolyon', // enjo
    artists: [DoFArtist.Astra, DoFArtist.Amelia],
    blurb: '"... burning with rebel spirit, the sort of man who could change the world, due in part to his elevated place in it..."',
    class: DoFClasses.Mage,
    nationality: DoFNationality.Musain,
    routeConfig: {
        musain: {
            player: 10
        },
        onduris: {
            player: 15
        }
    },
    bases: {
        hp: 28, pow: 14, skl: 17, spd: 11, luk: 8, def: 4, res: 16, con: 8
    },
    level: 13,
    growths: { hp: 60, pow: 50, skl: 65, spd: 35, luk: 35, def: 10, res: 50 },
    promotesTo: DoFClasses.Sage
};
