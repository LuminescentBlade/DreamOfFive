import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Florent: IDoFCharacter = {
    name: DoFCharKey.Florent,
    artists: [DoFArtist.Astra, DoFArtist.Sev],
    blurb: '"His father had been elevated to knighthood through his deeds. Little wonder his son was more grounded..."',
    class: DoFClasses.Cavalier,
    nationality: DoFNationality.Musain,
    routeConfig:{
        musain: {
            player: 6.5
        },
        onduris: {
            player: 15
        }
    },
    height: 179,
    stats: {
        hp: 33, pow: 15, skl: 14, spd: 12, luk: 9, def: 15, res: 1, con: 10
    },
    level: 13,
    promotesTo: DoFClasses.Paladin,
    growths: {hp: 90, pow: 55, skl: 50, spd: 40, luk: 30, def: 45, res: 10},
    ranks: {
        [DoFWeaponType.Sword]: 71,
        [DoFWeaponType.Lance]: 121
    },
    affinity: DoFAffinities.Ice
};
