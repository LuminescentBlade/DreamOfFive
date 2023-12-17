import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFRoute, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";
import { DoFWeapon } from "../weapons.config";

const bossStat = {
    route: DoFRoute.Musain,
    level: 4,
    stats: { hp: 31, pow: 15, skl: 22, spd: 18, luk: 11, def: 6, res: 14, con: 8 },
    optional: true,
    ranks: {
        [DoFWeaponType.Anima]: 181,
        [DoFWeaponType.Staff]: 71
    },

};

export const Severin: IDoFCharacter = {
    name: DoFCharKey.Severin,
    profileName: 'Severin Tourmalet',
    artists: [DoFArtist.Lumi],
    blurb: '"... ever aspiring to improve his lot in life. He had come so far from nothing, yet never quite far enough..."',
    class: DoFClasses.Harrier,
    nationality: DoFNationality.Musain,
    height: 172,
    epithet: 'Skyward Reach',
    routeConfig: {
        musain: {
            player: 15,
            enemy: [11, 12],
            npc: [7, 13]
        }
    },
    level: 4,
    age: 26,
    ranks: {
        [DoFWeaponType.Anima]: 181,
        [DoFWeaponType.Staff]: 71
    },
    affinity: DoFAffinities.Ice,
    bossStats: [
        {
            ...bossStat, chapter: 12, weapons: [
                DoFWeapon.Thunder,
                DoFWeapon.Fimbulvetr
            ]
        },
        { ...bossStat, chapter: 11, weapons: [DoFWeapon.Fimbulvetr] }
        
    ],
    gateProfileDetailsChapter: 11
};
