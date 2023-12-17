import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFClasses, DoFNationality, DoFAffinities, DoFRoute, DoFWeaponType } from "@dof/src/models/enums";
import { DoFWeapon } from "../weapons.config";

export const KaDanos: IDoFCharacter = {
    name: 'ka-danos',
    displayName: 'ka\'Danos',
    artists: [DoFArtist.Lumi],
    blurb: '"... felt that Onduris had fallen from greatness, lost sight of its culture. He alone could set it right again..."',
    class: DoFClasses.Gladiator,
    nationality: DoFNationality.Onduris,
    height: 180,
    routeConfig: {
        onduris: {
            enemy: 14,
            npc: 9
        }
    },
    affinity: DoFAffinities.Thunder,
    level: 6,
    bossStats: [
        {
            chapter: 14,
            route: DoFRoute.Onduris,
            stats: { hp: 43, pow: 22, skl: 19, spd: 14, luk: 4, def: 17, res: 4, con: 12 },
            weapons: [DoFWeapon.Francisca, DoFWeapon.BraveSword], // do stat bonuses later
            ranks: {
                [DoFWeaponType.Sword]: 181,
                [DoFWeaponType.Axe]: 251
            },
            drops: 'Master Seal'
        }
    ],
    gateProfileDetailsChapter: 14
};