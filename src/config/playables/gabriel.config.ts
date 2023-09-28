import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Gabriel: IDoFPlayable = {
    name: 'gabriel',
    artists: [DoFArtist.Amelia],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Warlock,
    routeConfig: {
        allRoute: {
            player: 5
        }
    },
    bases: {
        hp: 27, pow: 13, skl: 8, spd: 8, luk: 6, def: 6, res: 11, con: 10
    },
    level: 7,
    promotesTo: DoFClasses.Sorcerer,
    growths: {hp: 60, pow: 65, skl: 45, spd: 35, luk: 35, def: 25, res: 55}
};
