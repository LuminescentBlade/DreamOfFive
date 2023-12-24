import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Driscoll: IDoFCharacter = {
    name: DoFCharKey.Driscoll,
    artists: [DoFArtist.Lumi],
    blurb: '"... red-blooded Aukeman man, quick to anger, quick to forgive, never far from the fray..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Fighter,
    routeConfig: {
        allRoute: {
            player: 4,
            enemy: 4
        }
    },
    height: 181,
    stats: {
        hp: 31, pow: 14, skl: 11, spd: 8, luk: 11, def: 8, res: 0, con: 13
    },
    level: 6,
    promotesTo: DoFClasses.Warrior,
    growths: { hp: 95, pow: 45, skl: 45, spd: 60, luk: 40, def: 25, res: 10 },
    ranks: {
        [DoFWeaponType.Axe]: 71
    },
    affinity: DoFAffinities.Wind
};
