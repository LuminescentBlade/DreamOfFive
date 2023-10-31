import { DoFArtist, DoFClasses, DoFNationality, DoFAffinities, DoFRoute, DoFWeaponType } from "@/src/models/enums";
import { DoFWeapon } from "../weapons.config";

export const AVosa = {
    name: 'a-vosa',
    displayName: 'a\'Vosa',
    artists: [DoFArtist.Char],
    blurb: '"... was to obey the King\'s will, be his instrument in all ways; personal honour was irrelevant before duty..."',
    class: DoFClasses.Sentinel,
    nationality: DoFNationality.Onduris,
    height: 185,
    routeConfig: {
        onduris: {
            enemy: 11,
            npc: 9
        }
    },
    affinity: DoFAffinities.Light,
    level: 5,
    bossStats: [
        {
            chapter: 11,
            route: DoFRoute.Onduris,
            stats: { hp: 41, pow: 15, skl: 19, spd: 16, luk: 7, def: 13, res: 9, con: 13 },
            weapons: [DoFWeapon.Spear],
            ranks: {
                [DoFWeaponType.Lance]: 181
            }
        }
    ],
    gateProfileDetailsChapter: 11

};
