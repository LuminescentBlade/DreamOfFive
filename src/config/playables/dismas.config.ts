import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";
import { DoFWeapon } from "../weapons.config";

export const Dismas: IDoFCharacter = {
    name: DoFCharKey.Dismas,
    artists: [DoFArtist.Astra],
    class: DoFClasses.Raider,
    blurb: '"... seen his type a dozen times before. It doesn\'t matter who has to die, so long as his belly is full..."',
    nationality: DoFNationality.Aukema,
    alt: {
        punished: { artists: [DoFArtist.Astra], chapter: 15, displayName: 'Returns', isSpoiler: true }
    },
    height: 176,
    conditional: {
        chapter: {
            chapter: 15,
            swapPortrait: 'punished',
            ogPortraitName: 'Dismas Prologue',
            class: DoFClasses.Berserker,
            blurb: '"... still bearing the scars that we carved into him. He was a man changed, no longer cocksure..."',
        }
    },
    routeConfig: {
        allRoute: {
            player: 99,
            enemy: [0, 15]
        }
    },

    affinity: DoFAffinities.Dark, // thunder?
    bossStats: [
        {
            chapter: 15,
            level: 5,
            stats: { hp: 0, pow: 0, skl: 0, spd: 0, luk: 0, def: 0, res: 0, con: 12 },
            class: DoFClasses.Berserker,
            ranks: {
                [DoFWeaponType.Axe]: 71
            },
            weapons: [
                DoFWeapon.HandAxe,
                DoFWeapon.SteelAxe
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
    ]
};
