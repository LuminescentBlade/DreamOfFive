import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFAffinities, DoFArtist, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";

export const Trajan: IDoFCharacter =
{
    name: 'trajan',
    profileName: 'Trajan Scipion',
    level: 15,
    artists: [DoFArtist.Lumi],
    nationality: DoFNationality.Vishara,
    class: DoFClasses.Juggernaut,
    height: 192,
    routeConfig: {
        allRoute: {
            enemy: 25
        }
    },
    affinity: DoFAffinities.Anima,
    bossStats: [
        {
            chapter: 25,
            level: 16,
            stats: { hp: 80, pow: 28, skl: 23, spd: 19, luk: 13, def: 26, res: 18, con: 18 },
            ranks: {
                [DoFWeaponType.Lance]: 251,
                [DoFWeaponType.Axe]: 251
            },
            weapons: ['Zalmoxis'],
            drops: 'Zalmoxis'
        }
    ],
    blurb: `"... clearly saw Arcus' eyes, but without the spark fo humanity. No, I knew he would stop at nothing..."`

};
