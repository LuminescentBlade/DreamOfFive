import { IDoFCharacter } from "@/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFClasses, DoFNationality, DoFAffinities, DoFRoute, DoFWeaponType } from "@/src/models/enums";
import { DoFWeapon } from "../weapons.config";

export const MeiDoru : IDoFCharacter =    {
    name: 'mei-doru',
    displayName: 'mei\'Doru',
    artists: [DoFArtist.Astra],
    blurb: '"... ran his frontier region with an iron fist, always looking with envy towards the capital\'s riches..."',
    class: DoFClasses.Outrider,
    height:168,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            enemy: 14,
            npc: 9
        }
    },
    affinity: DoFAffinities.Ice,
    level: 4,
    bossStats: [
        {
            chapter: 14,
            route: DoFRoute.Onduris,
            stats: { hp: 35, pow: 16, skl: 15, spd: 19, luk: 7, def: 13, res: 7, con: 9 },
            weapons: [DoFWeapon.SilverBow, DoFWeapon.Rapier], // do stat bonuses later
            ranks: {
                [DoFWeaponType.Sword]: 121,
                [DoFWeaponType.Bow]: 181
            }
        }
    ],
    gateProfileDetailsChapter: 14
};
