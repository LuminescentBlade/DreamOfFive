import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFRoute, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";
import { DoFWeapon } from "../weapons.config";

export const Eudira: IDoFCharacter = {
    name: DoFCharKey.Eudira,
    artists: [DoFArtist.AK],
    blurb: '"... though the smile never left her lips, nor did it ever reach her mournful eyes..."',
    class: DoFClasses.Sibyl,
    nationality: DoFNationality.Musain,
    routeConfig: {
        musain: {
            player: 14,
            enemy: [8, 13],
        }
    },
    epithet: 'Smiling Poppet',
    height: 168,
    stats: { hp: 37, pow: 16, skl: 22, spd: 19, luk: 0, def: 16, res: 12, con: 9 },
    level: 3,
    growths: { hp: 65, pow: 45, skl: 65, spd: 50, luk: 0, def: 35, res: 30 },
    ranks: {
        [DoFWeaponType.Light]: 181,
        [DoFWeaponType.Dark]: 181
    },
    affinity: DoFAffinities.Wind,
    bossStats: [
        { chapter: 8, route: DoFRoute.Musain, weapons: [DoFWeapon.Ennervation], optional: true },
        { chapter: 13, route: DoFRoute.Musain, weapons: [DoFWeapon.Frodafridh, DoFWeapon.Fenrir, 'Serendipity Ring'], drops: 'Serendipity Ring' }
    ],
    supports: [DoFCharKey.Gabriel, DoFCharKey.Franseza, DoFCharKey.Tricia]
};
