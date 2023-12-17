import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Amelia: IDoFCharacter = {
    name: DoFCharKey.Amelia,
    artists: [DoFArtist.Sev],
    blurb: '"... made the mistake of looking too deep into her eyes. Still pools, bottomless depths, full of sorrow..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Mage,
    routeConfig: {
        allRoute: {
            player: 1
        }
    },
    height: 163,
    age: 17,
    stats: {
        hp: 21, pow: 8, skl: 7, spd: 7, luk: 5, def: 3, res: 8, con: 7
    },
    level: 1,
    growths: { hp: 55, pow: 55, skl: 45, spd: 50, luk: 45, def: 20, res: 40 },
    promotesTo: DoFClasses.Sage,
    ranks: {
        [DoFWeaponType.Anima]: 71,
    },
    affinity: DoFAffinities.Wind
};
