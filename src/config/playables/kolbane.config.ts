import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Kolbane: IDoFCharacter = {
    name: DoFCharKey.Kolbane,
    profileName: 'Kolbane Farrier',
    artists: [DoFArtist.Lumi],
    blurb: '"The third most senior of each Strider section was to bear the banner, and so, having only three men..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Soldier,
    routeConfig: {
        allRoute: {
            player: 0
        }
    },
    conditional:{
        chapter:{
            chapter: 15,
            age: 20
        }
    },
    alt:{
        noarmor:{
            chapter: 8,
            artists: [DoFArtist.Lumi],
            displayName: 'Unarmored'
        }
    },
    height: 183,
    age: 19,
    stats: {
        hp: 24, pow: 9, skl: 11, spd: 9, luk: 5, def: 8, res: 0, con: 10
    },
    level: 2,
    promotesTo: DoFClasses.Sentinel,
    growths: {hp: 75, pow: 55, skl: 35, spd: 55, luk: 40, def: 35, res: 15},
    epithet: 'Stalwart',
    ranks: {
        [DoFWeaponType.Lance]: 31,
    },
    affinity: DoFAffinities.Wind
};
