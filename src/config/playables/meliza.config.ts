import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Meliza: IDoFPlayable = {
    name: 'meliza',
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Mage,
    nationality: DoFNationality.Musain,
    routeConfig: {
        musain: {
            player: 12
        }
    },
    bases: {
        hp: 25, pow: 11, skl: 15, spd: 14, luk: 13, def: 5, res: 11, con: 6
    },
    growths: {hp: 55, pow: 40, skl: 65, spd: 55, luk: 55, def: 10, res: 45},
    level:  12,
    promotesTo: DoFClasses.Bishop
};
