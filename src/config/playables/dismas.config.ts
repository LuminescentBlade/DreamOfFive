import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";
import { DoFWeapon } from "../weapons.config";

export const Dismas: IDoFCharacter = {
    name: DoFCharKey.Dismas,
    artists: [DoFArtist.Astra],
    class: DoFClasses.Raider,
    epithet: 'Thrice Born',
    blurb: '"... seen his type a dozen times before. It doesn\'t matter who has to die, so long as his belly is full..."',
    nationality: DoFNationality.Aukema,
    alt: {
        punished: { artists: [DoFArtist.Astra], chapter: 15, displayName: 'Returns' },
        final: { artists: [DoFArtist.Astra, DoFArtist.Lumi], chapter: 20 }
    },
    level: 8,
    stats: { hp: 52, pow: 25, skl: 20, spd: 18, luk: 8, def: 13, res: 6, con: 13 },
    growths: { hp: 70, pow: 40, skl: 35, spd: 30, luk: 225, def: 15, res: 10 },
    height: 176,
    conditional: {
        chapter: [
            {
                chapter: 15,
                swapPortrait: 'punished',
                ogPortraitName: 'Dismas Prologue',
                class: DoFClasses.Berserker,
                blurb: '"... still bearing the scars that we carved into him. He was a man changed, no longer cocksure..."',
                epithet: 'Thrice Born'
            }, {
                chapter: 20,
                swapPortrait: 'final',
                ogPortraitName: 'Dismas Prologue',
                class: DoFClasses.Berserker,
                blurb: '"... still bearing the scars that we carved into him. He was a man changed, no longer cocksure..."',
                epithet: 'Thrice Born'
            }
        ]
    },
    routeConfig: {
        allRoute: {
            player: 21,
            enemy: [0, 15, 20]
        }
    },
    gateProfileTabChapter: 20,
    affinity: DoFAffinities.Thunder,
    bossStats: [
        {
            chapter: 20,
            class: DoFClasses.Berserker,
            ranks: {
                [DoFWeaponType.Axe]: 251
            },
            weapons: [
                'Battle Axe'
            ]
        },
        {
            chapter: 15,
            level: 3,
            stats: { hp: 46, pow: 21, skl: 18, spd: 16, luk: 7, def: 12, res: 6, con: 13 },
            class: DoFClasses.Berserker,
            ranks: {
                [DoFWeaponType.Axe]: 181
            },
            weapons: [
                'Swordreaver',
                DoFWeapon.Francisca
            ]
        },
        {
            chapter: 0,
            level: 6,
            stats: { hp: 30, pow: 9, skl: 6, spd: 10, luk: 5, def: 6, res: 0, con: 12 },
            class: DoFClasses.Raider,
            ranks: {
                [DoFWeaponType.Axe]: 71
            },
            weapons: [
                DoFWeapon.HandAxe,
                DoFWeapon.SteelAxe
            ]
        }
    ],
    supports: [DoFCharKey.Asher, DoFCharKey.Crowe, DoFCharKey.Tricia]
};
