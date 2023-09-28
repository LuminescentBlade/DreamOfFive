import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Cathale: IDoFPlayable = {
    name: 'cathale',
    artists: [DoFArtist.Astra],
    class: DoFClasses.Armour,
    routeConfig:{
        allRoute: {
            player: 2
        }
    },
    bases: {
        hp: 30, pow: 13, skl: 10, spd: 6, luk: 11, def: 14, res: 0, con: 14
    },
    level: 9,
    promotesTo: DoFClasses.Dreadnought,
    growths: {hp: 90, pow: 50, skl: 40, spd: 30, luk: 45, def: 55, res: 20}
};
