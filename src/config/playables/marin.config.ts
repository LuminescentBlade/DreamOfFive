import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Marin: IDoFCharacter = {
    name: DoFCharKey.Marin,
    artists: [DoFArtist.Lumi, DoFArtist.Sev],
    blurb: '"... typical example of hot-blooded Musain nobility, eager to prove his worth and fit to burst with elan..."',
    class: DoFClasses.Cavalier,
    nationality: DoFNationality.Musain,
    routeConfig: {
        musain: {
            player: 6.5
        }
    },
    // epithet: 'Rider',
    stats: {
        hp: 35, pow: 13, skl: 11, spd: 16, luk: 15, def: 10, res: 0, con: 9
    },
    height: 176,
    level: 13,
    growths: { hp: 105, pow: 45, skl: 35, spd: 55, luk: 55, def: 30, res: 5 },
    promotesTo: DoFClasses.Paladin,
    ranks: {
        [DoFWeaponType.Sword]: 121,
        [DoFWeaponType.Lance]: 71
    },
    affinity: DoFAffinities.Fire
};
