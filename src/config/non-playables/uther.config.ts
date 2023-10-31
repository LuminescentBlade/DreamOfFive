import { IDoFCharacter } from "@/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFClasses, DoFNationality, DoFAffinities, DoFRoute, DoFWeaponType } from "@/src/models/enums";
import { DoFWeapon } from "../weapons.config";

export const Uther : IDoFCharacter = {
    name: 'uther',
    profileName: 'Uther Dalencyn',
    blurb: '"He had every chance to turn against the Provost, but in the end, he valued his honour most highly..."',
    artists: [DoFArtist.Lumi, DoFArtist.Astra],
    class: DoFClasses.FirstLance,
    nationality: DoFNationality.Musain,
    height: 182,
    routeConfig: {
        musain: {
            npc: 7,
            enemy: 12
        }
    },
    alt: {
        injured: {
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            chapter: 12
        },
    },
    affinity: DoFAffinities.Ice,
    level: 7,
    bossStats: [
        {
            chapter: 12,
            route: DoFRoute.Musain,
            stats: { hp: 36, pow: 17, skl: 20, spd: 19, luk: 7, def: 12, res: 10, con: 11 },
            weapons: [DoFWeapon.Spear],
            ranks: {
                [DoFWeaponType.Lance]: 251
            },
            drops: DoFWeapon.Spear
        }
    ],
    gateProfileDetailsChapter: 12
};
