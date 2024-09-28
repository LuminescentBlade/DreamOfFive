import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Rozelle: IDoFCharacter = {
    name: DoFCharKey.Rozelle,
    artists: [DoFArtist.Lumi],
    blurb: '"Could a woman so soft-spoken truly be a heretic? Appearances could be deceiving, but not always..."',
    class: DoFClasses.Warlock,
    nationality: DoFNationality.Musain,
    routeConfig:{
        musain: {
            player: 11
        }
    },
    alt:{
        promo: { artists: [DoFArtist.Lumi], displayName: 'Promoted' },
    },
    height: 178,
    epithet: 'Black Rose',
    stats: {
        hp: 38, pow: 17, skl: 18, spd: 8, luk: 18, def: 2, res: 17, con: 13
    },
    level: 15,
    growths: {hp: 90, pow: 55, skl: 60, spd: 25, luk: 55, def: 5, res: 65},
    promotesTo: DoFClasses.Sorcerer,
    ranks: {
        [DoFWeaponType.Dark]: 121
    },
    affinity: DoFAffinities.Light

};
