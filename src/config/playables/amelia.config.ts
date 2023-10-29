import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeapons } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Amelia: IDoFCharacter = {
    name: DoFCharKey.Amelia,
    artists: [DoFArtist.Amelia],
    blurb: '"... made the mistake of looking too deep into her eyes. Still pools, bottomless depths, full of sorrow..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Mage,
    routeConfig: {
        allRoute: {
            player: 1
        }
    },
    height: 163,
    bases: {
        hp: 21, pow: 8, skl: 7, spd: 7, luk: 5, def: 3, res: 8, con: 7
    },
    level: 1,
    growths: { hp: 55, pow: 55, skl: 45, spd: 50, luk: 45, def: 20, res: 40 },
    promotesTo: DoFClasses.Sage,
    weapons: {
        [DoFWeapons.Anima]: 71,
    }
};
