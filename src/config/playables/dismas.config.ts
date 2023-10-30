import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";
import { DoFWeapon } from "../weapons.config";

export const Dismas: IDoFCharacter = {
    name: DoFCharKey.Dismas,
    artists: [DoFArtist.Astra],
    blurb: '"... still bearing the scars that we carved into him. He was a man changed, no longer cocksure..."',
    class: DoFClasses.Raider,
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
            class: DoFClasses.Berserker
        }
    },
    routeConfig: {
        allRoute: {
            player: 99,
            enemy: [0, 15]
        }
    },

    affinity: DoFAffinities.Thunder,
    bossStats: [
        {
            chapter: 1,
            stats: { lv: 6, hp: 30, pow: 9, skl: 6, spd: 10, luk: 5, def: 6, res: 0, con: 13 },
            class: DoFClasses.Raider,
            ranks: {
                [DoFWeaponType.Axe]: 71
            },
            weapons: [
                DoFWeapon.HandAxe,
                DoFWeapon.SteelAxe
            ]
        },
        {
            chapter: 15,
            stats: { lv: 6, hp: 30, pow: 9, skl: 6, spd: 10, luk: 5, def: 6, res: 0, con: 13 },
            class: DoFClasses.Berserker,
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
