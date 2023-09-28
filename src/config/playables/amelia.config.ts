import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Amelia: IDoFPlayable = {
    name: 'amelia',
    artists: [DoFArtist.Amelia],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Mage,
    routeConfig: {
        allRoute: {
            player: 1
        }
    },
    bases: {
        hp: 21, pow: 8, skl: 6, spd: 7, luk: 3, def: 3, res: 8, con: 7
    },
    level: 3,
    growths: { hp: 55, pow: 55, skl: 45, spd: 50, luk: 45, def: 20, res: 40 },
    promotesTo: DoFClasses.Sage
};
