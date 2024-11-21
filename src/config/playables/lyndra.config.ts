import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFRoute, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";
import { DoFWeapon } from "../weapons.config";

export const Lyndra: IDoFCharacter = {
    name: DoFCharKey.Lyndra,
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    blurb: '"... known as the Black Cat, for the way she seemed to have wretched luck, but many lives..."',
    class: DoFClasses.Gladiator,
    epithet: 'Black Cat',
    nationality: DoFNationality.Aukema,
    age: 27,
    routeConfig: {
        musain: {
            player: 9,
            enemy: 8.5
        },
        onduris: {
            enemy: 18
        }
    },
    height: 168,
    stats: { hp: 36, pow: 15, skl: 18, spd: 19, luk: 9, def: 18, res: 3, con: 10 },
    level: 2,
    growths: { hp: 75, pow: 35, skl: 60, spd: 60, luk: 30, def: 55, res: 10 },
    ranks: {
        [DoFWeaponType.Sword]: 181,
        [DoFWeaponType.Axe]: 71
    },
    affinity: DoFAffinities.Wind,
    bossStats: [
        {
            chapter: 18,
            route: DoFRoute.Musain,
            level: 5,
            stats: { hp: 40, pow: 17, skl: 19, spd: 21, luk: 10, def: 19, res: 3, con: 10 },
            ranks: { sword: 181, axe: 71 },
            weapons: ['Lightning Kris'],
            customTags: ['Alive and not recruited'],
            optional: true
        },
        {
            chapter: 18,
            route: DoFRoute.Onduris,
            level: 5,
            stats: { hp: 40, pow: 17, skl: 19, spd: 21, luk: 10, def: 19, res: 3, con: 10 },
            ranks: { sword: 181, axe: 71 },
            weapons: ['Lightning Kris'],
            optional: true
        },
        {
            chapter: 8.5,
            route: DoFRoute.Musain,
            weapons: [DoFWeapon.SilverBlade, 'Master Seal'],
            optional: true,
        }
    ],
    supports: [DoFCharKey.Adalheid, DoFCharKey.Saskia, DoFCharKey.Morwen, DoFCharKey.Conleth]
};
