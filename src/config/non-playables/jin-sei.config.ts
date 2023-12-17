import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFClasses, DoFNationality, DoFAffinities, DoFRoute, DoFWeaponType } from "@dof/src/models/enums";
import { DoFWeapon } from "../weapons.config";

export const JinSei: IDoFCharacter =  {
    name: 'jin-sei',
    displayName: 'jin\'Sei',
    artists: [DoFArtist.Astra],
    blurb: '"... true warrior-king in every respect. He may not have won his throne fairly, but he would defend it to the death..."',
    class: DoFClasses.Swordmaster,
    nationality: DoFNationality.Onduris,
    affinity: DoFAffinities.Wind,
    height: 175,
    epithet: 'The Tyrant',
    routeConfig: {
        onduris: {
            enemy: 13,
            npc: 9
        }
    },
    level: 8,
    bossStats: [
        {
            chapter: 13,
            route: DoFRoute.Onduris,
            stats: { hp: 35, pow: 16, skl: 19, spd: 19, luk: 6, def: 10, res: 6, con: 9 },
            weapons: [DoFWeapon.Sophrosyne], // do stat bonuses later
            ranks: {
                [DoFWeaponType.Sword]: 251
            }
        }
    ],
    gateProfileDetailsChapter: 13
};
