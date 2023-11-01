import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";
import { DoFWeapon } from "../weapons.config";

export const Corbeau: IDoFCharacter = {
    name: DoFCharKey.Corbeau,
    profileName: 'Daffodil Corbeau',
    artists: [DoFArtist.Lumi],
    blurb: '"... could not content herself with railing against injustice. There came a time to draw a line in the sand..."',
    class: DoFClasses.Warrior,
    nationality: DoFNationality.Musain,
    height: 176,
    routeConfig: {
        musain: {
            npc: 8,
            player: 9
        }
    },
    growths: { hp: 110, pow: 50, skl: 30, spd: 35, luk: 45, def: 20, res: 20 },
    level: 4,
    bases: { hp: 44, pow: 20, skl: 13, spd: 14, luk: 16, def: 11, res: 6, con: 14 },
    weapons: {
        [DoFWeaponType.Axe]: 181,
        [DoFWeaponType.Bow]: 121
    },
    affinity: DoFAffinities.Light,
    npcStats: [
        { chapter: 8, weapons: [DoFWeapon.Francisca], talk: true }
    ]
};
