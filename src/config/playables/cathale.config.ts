import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Cathale: IDoFCharacter = {
    name: DoFCharKey.Cathale,
    artists: [DoFArtist.Astra],
    blurb: '"Steady of eye and stout of heart, she was every inch the soldier, without a Strider\'s mercurial streak..."',
    class: DoFClasses.Armour,
    nationality: DoFNationality.Aukema,
    routeConfig:{
        allRoute: {
            player: 2
        }
    },
    height: 177,
    bases: {
        hp: 30, pow: 13, skl: 10, spd: 6, luk: 11, def: 14, res: 0, con: 14
    },
    level: 9,
    promotesTo: DoFClasses.Dreadnought,
    growths: {hp: 90, pow: 50, skl: 40, spd: 30, luk: 45, def: 55, res: 20}
};
