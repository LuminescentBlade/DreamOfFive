import { IDoFCharacter } from "@/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFClasses, DoFNationality, DoFAffinities, DoFWeaponType } from "@/src/models/enums";
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
            enemy: [2, 3, 99]
        }
    },
    level: 12,
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
    height: 171,
    bossStats: [
        {
            chapter: 2,
            weapons: [DoFWeapon.Fimbulvetr],
            stats: { hp: 46, pow: 18, skl: 22, spd: 24, luk: 16, def: 8, res: 20, con: 6 },
            ranks: {
                [DoFWeaponType.Anima]: 251,
                [DoFWeaponType.Staff]: 181
            },
            optional: true
        }
    ]
};