import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFClasses, DoFNationality, DoFAffinities, DoFRoute, DoFWeaponType } from "@dof/src/models/enums";
import { DoFWeapon } from "../weapons.config";

export const Guillaume : IDoFCharacter =  {
    name: 'guillaume',
    artists: [DoFArtist.Astra],
    class: DoFClasses.Sage,
    nationality: DoFNationality.Musain,
    alt: {
        burned: { artists: [DoFArtist.Astra], chapter: 14 }
    },
    conditional: {
        chapter: {
            chapter: 14,
            swapPortrait: 'burned',
            ogPortraitName: 'Guillaume Normal'
        }
    },
    routeConfig: {
        musain: {
            npc: 7,
            enemy: 14
        }
    },
    affinity: DoFAffinities.Anima,
    level: 8,
    height: 172,
    bossStats: [
        {
            chapter: 14,
            route: DoFRoute.Musain,
            stats: { hp: 40, pow: 19, skl: 20, spd: 14, luk: 6, def: 12, res: 15, con: 9 },
            weapons: [DoFWeapon.Fimbulvetr, DoFWeapon.Thunder, DoFWeapon.Silence],
            ranks: {
                [DoFWeaponType.Anima]: 181,
                [DoFWeaponType.Staff]: 181
            }
        }
    ],
    gateProfileDetailsChapter: 14,
    blurb: '"... seemed not to notice his scars. He was mad, that was clear enough, but only more dangerous for it..."'

};
