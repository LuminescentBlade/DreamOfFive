import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFAffinities, DoFArtist, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";

export const Tanaquil: IDoFCharacter =
{
    name: 'tanaquil',
    profileName: 'Tanaquil Samnia',
    level: 13,
    artists: [DoFArtist.Lumi],
    nationality: DoFNationality.Vishara,
    class: DoFClasses.HighPriest,
    routeConfig: {
        allRoute: {
            enemy: 25
        }
    },
    height: 164,
    affinity: DoFAffinities.Wind,
    blurb: `"... wielded the will of the Goddess like a cudgel. And Yscatra's desires fell neatly in line with her own..."`,
    bossStats: [
        {
            chapter: 25,
            level: 13,
            stats: { hp: 42, pow: 21, skl: 26, spd: 21, luk: 23, def: 19, res: 26, con: 9 },
            weapons: ['Frodafridh', 'Berserk'],
            ranks: {
                [DoFWeaponType.Light]: 251,
                [DoFWeaponType.Staff]: 251
            },
            optional: true
        }
    ],
    epithet: 'False Prophet'
};
