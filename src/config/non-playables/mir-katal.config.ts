import { DoFArtist, DoFClasses, DoFNationality, DoFAffinities, DoFRoute, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";
import { DoFWeapon } from "../weapons.config";

const katalOndRouteConfig = {
    route: DoFRoute.Onduris,
    stats: { hp: 52, pow: 24, skl: 29, spd: 27, luk: 16, def: 18, res: 13, con: 8 },
    talk: true,
    level: 16,
};
export const MirKatal: IDoFCharacter = {
    name: 'mir-katal',
    displayName: 'mir\'Katal',
    artists: [DoFArtist.Lumi, DoFArtist.Astra],
    blurb: '"... very pinnacle of the Ondurite martial ideal, a man of matchless valour. Fit to lead, but to rule?"',
    class: DoFClasses.Swordmaster,
    nationality: DoFNationality.Onduris,
    epithet: 'Oathkeeper',
    routeConfig: {
        onduris: {
            enemy: [12, 27],
            npc: [13, 14]
        }
    },
    ranks: {
        [DoFWeaponType.Sword]: 251
    },
    height: 177,
    affinity: DoFAffinities.Light,
    alt: {
        dictator: { artists: [DoFArtist.Lumi, DoFArtist.Astra], chapter: 14 }
    },
    level: 16,
    conditional: {
        chapter: {
            chapter: 14.5,
            swapPortrait: 'dictator',
            ogPortraitName: 'mir\'Katal Noble',
        }
    },
    bossStats: [
        {
            chapter: 27,
            route: DoFRoute.Onduris,
            weapons: ['Sophrosyne', 'Serendipity Ring'],
            class: 'Peerless Blade',
            level: 20,
            stats: {hp: 72, pow: 30, skl: 30, spd: 30, luk: 20, def: 25, res: 20, con: 10},
        },
        {
            ...katalOndRouteConfig,
            chapter: 12,
            weapons: [DoFWeapon.VorpalSword, 'Serendipity Ring'],
            gameOver: true,
            //serendipity ring
        }
    ],
    npcStats: [
        {
            ...katalOndRouteConfig,
            chapter: 13,
            weapons: [DoFWeapon.VorpalSword],
        }
    ]
}