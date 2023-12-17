import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFClasses, DoFNationality, DoFAffinities, DoFRoute, DoFWeaponType } from "@dof/src/models/enums";
import { DoFWeapon } from "../weapons.config";

export const SelSeir: IDoFCharacter = {
    name: 'sel-seir',
    displayName: 'sel\'Seir',
    artists: [DoFArtist.Lumi, DoFArtist.Sev],
    blurb: '"Seir was notoriously decadent and venal, but his sword-arm had not atrophied... he was still Ondurite."',
    class: DoFClasses.Swordmaster,
    height: 172,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            enemy: 14,
            npc: 9
        }
    },
    affinity: DoFAffinities.Wind,
    level: 3,
    bossStats: [
        {
            chapter: 14,
            route: DoFRoute.Onduris,
            stats: { hp: 32, pow: 13, skl: 18, spd: 23, luk: 8, def: 8, res: 12, con: 8 },
            weapons: [DoFWeapon.SilverSword], // do stat bonuses later
            ranks: {
                [DoFWeaponType.Sword]: 181
            },
            drops: 'Diamond Gem'
        }
    ],
    gateProfileDetailsChapter: 14
};
