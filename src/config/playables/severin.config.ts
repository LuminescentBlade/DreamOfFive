import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";
import { DoFWeapon } from "../weapons.config";

const bossStat = {
    stats: { lv: 4, hp: 31, pow: 15, skl: 22, spd: 18, luk: 11, def: 6, res: 14, con: 8 },
    ranks: {
        [DoFWeaponType.Anima]: 181,
        [DoFWeaponType.Staff]: 71
    },
    weapons: [
        DoFWeapon.Thunder,
        DoFWeapon.Fimbulvetr
    ]
};

export const Severin: IDoFCharacter = {
    name: DoFCharKey.Severin,
    profileName: 'Severin Tourmalet',
    artists: [DoFArtist.Lumi],
    blurb: '"... ever aspiring to improve his lot in life. He had come so far from nothing, yet never quite far enough..."',
    class: DoFClasses.Harrier,
    nationality: DoFNationality.Musain,
    height: 172,
    routeConfig: {
        musain: {
            player: 15,
            enemy: [11, 12],
            npc: [7, 13]
        }
    },
    weapons: {
        [DoFWeaponType.Anima]: 181,
        [DoFWeaponType.Staff]: 71
    },
    affinity: DoFAffinities.Ice,
    bossStats: [
        {...bossStat, chapter: 11},
        {...bossStat, chapter: 12}
    ]
};
