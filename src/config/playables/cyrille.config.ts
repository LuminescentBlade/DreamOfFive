
import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Cyrille: IDoFCharacter = {
    name: DoFCharKey.Cyrille,
    artists: [DoFArtist.Lumi],
    blurb: '"... in no place to turn aside recruits. Only a few truly had the diligence and mettle for such thankless work..."',
    nationality: DoFNationality.Musain,
    class: DoFClasses.Cavalier,
    height: 170,
    routeConfig: {
        allRoute: {
            player: 1
        }
    },
    age: 23,
    bases: { hp: 28, pow: 8, skl: 8, spd: 11, luk: 5, def: 9, res: 0, con: 9 },
    level: 4,
    growths: { hp: 110, pow: 40, skl: 40, spd: 60, luk: 30, def: 45, res: 10 },
    promotesTo: DoFClasses.Paladin,
};
