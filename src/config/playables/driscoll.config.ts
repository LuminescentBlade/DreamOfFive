import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Driscoll: IDoFPlayable = {
    name: DoFCharKey.Driscoll,
    artists: [DoFArtist.Lumi],
    blurb: '"... red-blooded Aukeman man, quick to anger, quick to forgive, never far from the fray..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Fighter,
    routeConfig: {
        allRoute: {
            player: 4,
            enemy: 4
        }
    },
    bases: {
        hp: 30, pow: 13, skl: 10, spd: 8, luk: 9, def: 7, res: 0, con: 13
    },
    level: 6,
    promotesTo: DoFClasses.Warrior,
    growths: {hp: 95, pow: 45, skl: 45, spd: 55, luk: 40, def: 25, res: 10}
};
