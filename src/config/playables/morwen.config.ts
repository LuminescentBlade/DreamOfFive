import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFRoute, DoFWeaponType } from "@dof/src/models/enums";
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
    age: 24,
    routeConfig: {
        onduris: {
            enemy: [5, 6, 18],
        },
        musain: {
            enemy: [5, 6, 18],
            player: 18
        }
    },
    level: 8,
    epithet: 'Bloodhound',
    stats: { hp: 48, pow: 22, skl: 17, spd: 17, luk: 21, def: 23, res: 11, con: 15 },
    growths: {hp: 85, pow: 50, skl: 35, spd: 35, luk: 55, def: 45, res: 20 },
    ranks: { sword: 181, axe: 251 },
    affinity: DoFAffinities.Thunder,
    bossStats: [
        {
            chapter: 18,
            route: DoFRoute.Musain,
            talk: true,
            weapons: ['Silver Axe', 'Wyrmslayer']
        },
        {
            chapter: 18,
            route: DoFRoute.Onduris,
            weapons: ['Silver Axe', 'Wyrmslayer']
        },
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
