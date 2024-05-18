import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFClasses, DoFNationality, DoFAffinities, DoFWeaponType } from "@dof/src/models/enums";
import { DoFWeapon } from "../weapons.config";

export const Sorcha: IDoFCharacter = {
    name: 'sorcha',
    profileName: 'Sorcha Farrell',
    artists: [DoFArtist.Sev],
    blurb: '"Fluid gestures wove fire in intricate, deadly patterns, but my eyes were on hers... cold, onyx-dark..."',
    class: DoFClasses.Harrier,
    nationality: DoFNationality.Aukema,
    epithet: `Butterfly's Wing`,
    routeConfig: {
        allRoute: {
            enemy: [2, 3, 18, 26],
            player: 27
        }
    },
    affinity: DoFAffinities.Fire,
    alt: {
        final: { artists: [DoFArtist.Sev], chapter: 18 }
    },
    conditional: {
        chapter: {
            chapter: 18,
            swapPortrait: 'final',
            ogPortraitName: 'Sorcha c3'
        }
    },
    height: 174,
    bossStats: [
        {
            chapter: 26,
            weapons: ['Chrysophylax'],
            talk: true
        },
        {
            chapter: 18,
            weapons: ['Chrysophylax'],
            stats: { hp: 42, pow: 21, skl: 22, spd: 24, luk: 16, def: 8, res: 20, con: 8 },
            ranks: {
                [DoFWeaponType.Anima]: 251,
                [DoFWeaponType.Staff]: 181
            }
        },
        {
            chapter: 2,
            weapons: ['Chrysophylax'],
            stats: { hp: 42, pow: 21, skl: 22, spd: 24, luk: 16, def: 8, res: 20, con: 8 },
            ranks: {
                [DoFWeaponType.Anima]: 251,
                [DoFWeaponType.Staff]: 181
            },
            optional: true,
            level: 8,
        },  
    ],
    level: 16,
    stats: { hp: 42, pow: 21, skl: 26, spd: 27, luk: 10, def: 13, res: 20, con: 8 },
    growths: { hp: 65, pow: 30, skl: 30, spd: 50, luk: 15, def: 10, res: 40 },
    ranks: {
        [DoFWeaponType.Anima]: 251,
        [DoFWeaponType.Staff]: 251
    }
};