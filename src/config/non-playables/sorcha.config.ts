import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFClasses, DoFNationality, DoFAffinities, DoFWeaponType } from "@dof/src/models/enums";
import { DoFWeapon } from "../weapons.config";

export const Sorcha : IDoFCharacter =         {
    name: 'sorcha',
    profileName: 'Sorcha Farrell',
    artists: [DoFArtist.Sev],
    blurb: '"Fluid gestures wove fire in intricate, deadly patterns, but my eyes were on hers... cold, onyx-dark..."',
    class: DoFClasses.Harrier,
    nationality: DoFNationality.Aukema,
    routeConfig: {
        allRoute: {
            enemy: [2, 3, 18, 99]
        }
    },
    level: 8,
    affinity: DoFAffinities.Fire,
    alt: {
        final: { artists: [DoFArtist.Sev], chapter: 99, isSpoiler: true }
    },
    conditional: {
        chapter: {
            chapter: 99,
            swapPortrait: 'final',
            ogPortraitName: 'Sorcha c3'
        }
    },
    height: 174,
    bossStats: [
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
            optional: true
        },
    ]
};