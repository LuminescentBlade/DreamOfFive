import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Crowe: IDoFPlayable = {
    name: 'crowe',
    artists: [DoFArtist.Amelia],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Archer,
    routeConfig:{
        allRoute: {
            player: 3,
            enemy: 3
        }
    },
    bases: {
        hp: 26, pow: 12, skl: 11, spd: 10, luk: 5, def: 8, res: 0, con: 10
    },
    level: 6,
    promotesTo: DoFClasses.Marksman,
    growths: {hp: 80, pow: 60, skl: 55, spd: 45, luk: 30, def: 25, res: 10}
};
