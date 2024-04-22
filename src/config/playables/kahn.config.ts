import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Kahn: IDoFCharacter = {
    name: DoFCharKey.Kahn,
    artists: [DoFArtist.Astra, DoFArtist.Sev, DoFArtist.Lumi],
    blurb: '"... asked the secret of his courage, he answered, \'the ladies expect the best from me.\' I sighed..."',
    class: DoFClasses.Soldier,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            player: 9
        }
    },
    epithet: 'Wandering Eye',
    height: 164,
    age: 22, 
    stats: {
        hp: 27, pow: 12, skl: 13, spd: 11, luk: 8, def: 10, res: 0, con: 10
    },
    level: 9,
    promotesTo: DoFClasses.Sentinel,
    growths: {hp: 85, pow: 45, skl: 55, spd: 45, luk: 40, def: 40, res: 10},
    ranks: {
        [DoFWeaponType.Lance]: 121,
    },
    affinity: DoFAffinities.Thunder
};
