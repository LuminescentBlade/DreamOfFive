import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Marin: IDoFPlayable = {
    name: 'marin',
    artists: [DoFArtist.Lumi, DoFArtist.Amelia],
    blurb: '"... typical example of hot-blooded Musain nobility, eager to prove his worth and fit to burst with elan..."',
    class: DoFClasses.Cavalier,
    nationality: DoFNationality.Musain,
    routeConfig: {
        musain: {
            player: 10
        }
    },
    bases: {
        hp: 33, pow: 12, skl: 11, spd: 15, luk: 13, def: 10, res: 0, con: 9
    },
    level: 12,
    growths: { hp: 105, pow: 40, skl: 35, spd: 60, luk: 55, def: 30, res: 5 },
    promotesTo: DoFClasses.Paladin
};
