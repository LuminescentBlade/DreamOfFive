import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

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
    height: 168,
    bases: { hp: 37, pow: 16, skl: 19, spd: 17, luk: 0, def: 14, res: 10, con: 9 },
    level: 4,
    growths: { hp: 65, pow: 45, skl: 65, spd: 50, luk: 0, def: 35, res: 30 },
    weapons: {
        [DoFWeaponType.Light]: 181,
        [DoFWeaponType.Dark]: 181
    },
    affinity: DoFAffinities.Wind
};
