import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";
import { DoFWeapon } from "../weapons.config";

const earlyBossMorwen = {
    stats: { hp: 46, pow: 20, skl: 18, spd: 16, luk: 11, def: 16, res: 5, con: 13 },
    level: 6,
    weapons: [DoFWeapon.BraveSword],
    ranks: {
        [DoFWeaponType.Sword]: 181,
        [DoFWeaponType.Axe]: 181
    },
    optional: true
};
export const Morwen: IDoFCharacter = {
    name: DoFCharKey.Morwen,
    artists: [DoFArtist.Lumi, DoFArtist.Astra],
    blurb: '"... came to be known as \'the Baron\'s Bloodhound\', implacable once she had picked up the scent, unfailingly loyal..."',
    class: DoFClasses.Gladiator,
    nationality: DoFNationality.Aukema,
    height: 182,
    routeConfig: {
        onduris: {
            enemy: [5, 6, 99],
        },
        musain: {
            enemy: [5, 6, 97],
            player: 98
        }
    },
    affinity: DoFAffinities.Thunder,
    bossStats: [    
        {
            ...earlyBossMorwen,
            chapter: 6,   
        },
        {
            ...earlyBossMorwen,
            chapter: 5,   
        }
    ]
};
