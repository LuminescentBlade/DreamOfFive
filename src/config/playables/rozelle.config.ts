import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Rozelle: IDoFCharacter = {
    name: DoFCharKey.Rozelle,
    artists: [DoFArtist.Amelia, DoFArtist.Lumi],
    blurb: '"Could a woman so soft-spoken truly be a heretic? Appearances could be deceiving, but not always..."',
    class: DoFClasses.Warlock,
    nationality: DoFNationality.Musain,
    routeConfig:{
        musain: {
            player: 11
        }
    },
    height: 156,
    bases: {
        hp: 22, pow: 13, skl: 14, spd: 11, luk: 15, def: 2, res: 14, con: 14
    },
    level: 11,
    growths: {hp: 40, pow: 50, skl: 55, spd: 45, luk: 65, def: 5, res: 65},
    promotesTo: DoFClasses.Sorcerer

};
