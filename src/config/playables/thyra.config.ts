import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";


export const Thyra: IDoFCharacter = {
    name: DoFCharKey.Thyra,
    altNames: ['Long Tingyu', '龍庭玉'],
    artists: [DoFArtist.Lumi, DoFArtist.AK, DoFArtist.Astra],
    class: DoFClasses.Enforcer,
    nationality: DoFNationality.Svanhild,
    epithet: 'Talon',
    height: 190,
    age: 23,
    routeConfig: {
        allRoute: {
            player: 17
        }
    },
    alt:{
        noarmor: {
            artists: [DoFArtist.Lumi, DoFArtist.AK, DoFArtist.Astra],
            displayName: 'Unarmored',
            chapter: 17.5
        }
    },
    level: 7,
    stats: { hp: 46, pow: 25, skl: 24, spd: 18, luk: 13, def: 19, res: 0, con: 16 },
    ranks: { [DoFWeaponType.Sword]: 251 },
    growths: { hp: 75, pow: 55, skl: 50, spd: 45, luk: 25, def: 35, res: 5 },
    affinity: DoFAffinities.Thunder,
    blurb: `"... powerhouse of a woman, regarding combat as a test of spirit more than a contest of arms. Yet, in quieter days..."`
};
