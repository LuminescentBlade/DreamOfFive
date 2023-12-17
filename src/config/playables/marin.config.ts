import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

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
    stats: {
        hp: 35, pow: 13, skl: 12, spd: 17, luk: 15, def: 11, res: 0, con: 9
    },
    height: 176,
    level: 14,
    growths: { hp: 105, pow: 45, skl: 35, spd: 55, luk: 55, def: 30, res: 5 },
    promotesTo: DoFClasses.Paladin,
    ranks: {
        [DoFWeaponType.Sword]: 71,
        [DoFWeaponType.Lance]: 31
    },
    affinity: DoFAffinities.Fire
};
