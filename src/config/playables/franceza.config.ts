import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Franceza: IDoFPlayable = {
    name: 'franceza',
    artists: [DoFArtist.Amelia],
    class: DoFClasses.Archer,
    nationality: DoFNationality.Musain,
    routeConfig: {
        musain: {
            player: 8
        }
    },
    bases: {
        hp: 26, pow: 14, skl: 15, spd: 10, luk: 9, def: 12, res: 0, con: 10
    },
    level: 9,
    growths: {hp: 75, pow: 55, skl: 70, spd: 35, luk: 40, def: 40, res: 10},
    promotesTo: DoFClasses.Marksman
};
