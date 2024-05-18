import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFClasses, DoFNationality, DoFAffinities, DoFRoute, DoFWeaponType } from "@dof/src/models/enums";
import { DoFWeapon } from "../weapons.config";

export const Fleurre: IDoFCharacter = {
    name: 'fleurre',
    profileName: 'Fleurre Domremie',
    blurb: '"...greeted me with a warm smile, but I could see behind her eyes she was appraising me, calculating..."',
    artists: [DoFArtist.Sev],
    class: DoFClasses.Sage,
    nationality: DoFNationality.Musain,
    height: 163,
    routeConfig: {
        musain: {
            npc: [7, 13],
            enemy: [12, 27]
        }
    },
    epithet: 'Mask In Shadows',
    affinity: DoFAffinities.Wind,
    alt: {
        provost: { artists: [DoFArtist.Sev, DoFArtist.Lumi], chapter: 14 }
    },
    level: 6,
    conditional: {
        chapter: {
            chapter: 14.5,
            swapPortrait: 'provost',
            ogPortraitName: 'Fleurre Chancellor'
        }
    },
    bossStats: [
        {
            chapter: 27,
            route: DoFRoute.Musain,
            level: 20,
            class: 'Enchantress',
            stats: { hp: 75, pow: 27, skl: 30, spd: 27, luk: 22, def: 18, res: 25, con: 7 },
            ranks: {
                [DoFWeaponType.Anima]: 251,
                [DoFWeaponType.Light]: 251,
                [DoFWeaponType.Dark]: 251,
                [DoFWeaponType.Staff]: 251,
            },
            weapons: ['Implosion', 'Serendipity Ring']
        },
        {
            chapter: 12,
            route: DoFRoute.Musain,
            stats: { hp: 34, pow: 18, skl: 24, spd: 16, luk: 9, def: 7, res: 18, con: 7 },
            weapons: [DoFWeapon.Thunder],
            level: 6,
            ranks: {
                [DoFWeaponType.Anima]: 181,
                [DoFWeaponType.Staff]: 121
            },
            talk: true,
            gameOver: true
        },
    ],
    gateProfileDetailsChapter: 12
};
