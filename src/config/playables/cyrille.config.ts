
import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Cyrille: IDoFCharacter = {
    name: DoFCharKey.Cyrille,
    artists: [DoFArtist.Lumi],
    blurb: '"... only a few truly had the diligence and mettle for such thankless work, but their competence was beyond reproach..."',
    nationality: DoFNationality.Musain,
    class: DoFClasses.Cavalier,
    height: 170,
    routeConfig: {
        allRoute: {
            player: 1
        }
    },
    age: 23,
    bases: { hp: 28, pow: 7, skl: 8, spd: 11, luk: 5, def: 8, res: 0, con: 9 },
    level: 3,
    growths: { hp: 110, pow: 35, skl: 40, spd: 60, luk: 30, def: 40, res: 20 },
    promotesTo: DoFClasses.Paladin,
};
