import { IDoFCharacter } from "@/src/models/dream-of-five.interfaces";
import { DoFAffinities, DoFArtist, DoFClasses, DoFNationality, DoFRoute, DoFWeaponType } from "@/src/models/enums";
import { DoFWeapon } from "../weapons.config";

export const Menida: IDoFCharacter = {
    name: 'menida',
    artists: [DoFArtist.Astra],
    blurb: '"Two souls, battling for dominance within a single husk. Little wonder her mind seemed ruined..."',
    class: DoFClasses.Sibyl,
    nationality: DoFNationality.Musain,
    routeConfig: {
        musain: {
            enemy: [8, 13]
        }
    },
    height: 168,
    level: 4,
    affinity: DoFAffinities.Fire,
    stats: { hp: 35, pow: 18, skl: 16, spd: 16, luk: 30, def: 11, res: 8, con: 9 },
    epithet: "Twice Born",
    ranks: {
        [DoFWeaponType.Light]: 181,
        [DoFWeaponType.Dark]: 181,
    },
    bossStats: [
        { chapter: 13, route: DoFRoute.Musain, weapons: [DoFWeapon.Frodafridh, DoFWeapon.Fenrir], drops: 'Horseshoe' },
        { chapter: 8, route: DoFRoute.Musain, weapons: [DoFWeapon.Ennervation], optional: true }
    ]

};
