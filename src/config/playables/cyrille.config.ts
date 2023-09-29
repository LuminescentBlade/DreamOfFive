
import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Cyrille: IDoFPlayable = {
    name: DoFCharKey.Cyrille,
    artists: [DoFArtist.Lumi],
    // blurb: '',
    nationality: DoFNationality.Musain,
    class: DoFClasses.Cavalier,
    routeConfig: {
        allRoute: {
            player: 1
        }
    },
    bases: { hp: 28, pow: 8, skl: 8, spd: 11, luk: 5, def: 12, res: 0, con: 9 },
    level: 3,
    growths: { hp: 110, pow: 40, skl: 40, spd: 60, luk: 30, def: 45, res: 10 },
    isSpoiler: true,
    promotesTo: DoFClasses.Paladin,
};
