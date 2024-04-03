import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Jauger: IDoFCharacter = {
    name: DoFCharKey.Jauger,
    artists: [DoFArtist.Astra, DoFArtist.Sev],
    class: DoFClasses.Armour,
    nationality: DoFNationality.Aukema,
    height: 176,
    age: 19,
    routeConfig: {
        allRoute: {
            player: 16
        }
    },
    epithet: 'Ember',
    stats: { hp: 28, pow: 13, skl: 11, spd: 8, luk: 10, def: 15, res: 0, con: 13 },
    level: 5,
    growths: { hp: 115, pow: 65, skl: 60, spd: 55, luk: 35, def: 70, res: 20 },
    ranks: { [DoFWeaponType.Lance]: 31 },
    promotesTo: DoFClasses.Dreadnought,
    affinity: DoFAffinities.Thunder,
    blurb: `"... the very model of duty, all too glad to throw himself into the pyre just so he could tell Yscatra he'd served well..."`
};  
