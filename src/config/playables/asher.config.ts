import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Asher: IDoFPlayable = {
    name: 'asher',
    artists: [DoFArtist.Amelia, DoFArtist.Lumi],
    blurb: '"... did not quite know what to make of him, but whether or not his affect is sincere, he is no charlatan..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Priest,
    routeConfig: {
        allRoute: {
            player: 0
        }
    },
    bases: {
        hp: 21, pow: 6, skl: 4, spd: 4, luk: 7, def: 3, res: 8, con: 7
    },
    level: 1,
    promotesTo: DoFClasses.Bishop,
    growths: {hp: 90, pow: 70, skl: 55, spd: 35, luk: 40, def: 35, res: 50 }
};
