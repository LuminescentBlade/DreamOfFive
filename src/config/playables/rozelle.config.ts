import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Rozelle: IDoFCharacter = {
    name: DoFCharKey.Rozelle,
    artists: [DoFArtist.Lumi],
    blurb: '"Could a woman so soft-spoken truly be a heretic? Appearances could be deceiving, but not always..."',
    class: DoFClasses.Warlock,
    nationality: DoFNationality.Musain,
    routeConfig:{
        musain: {
            player: 11
        }
    },
    height: 178,
    bases: {
        hp: 32, pow: 16, skl: 17, spd: 8, luk: 18, def: 2, res: 17, con: 13
    },
    level: 15,
    growths: {hp: 85, pow: 55, skl: 60, spd: 25, luk: 55, def: 5, res: 65},
    promotesTo: DoFClasses.Sorcerer

};
