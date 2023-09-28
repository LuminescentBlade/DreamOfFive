import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Kolbane: IDoFPlayable = {
    name: 'kolbane',
    artists: [DoFArtist.Lumi],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Mercenary,
    routeConfig: {
        allRoute: {
            player: 0
        }
    },
    bases: {
        hp: 23, pow: 8, skl: 10, spd: 9, luk: 5, def: 7, res: 0, con: 10
    },
    level: 2,
    promotesTo: DoFClasses.Gladiator,
    growths: {hp: 75, pow: 55, skl: 35, spd: 55, luk: 40, def: 35, res: 15}
};
