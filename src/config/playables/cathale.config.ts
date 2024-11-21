import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Cathale: IDoFCharacter = {
    name: DoFCharKey.Cathale,
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    blurb: '"Steady of eye and stout of heart, she was every inch the soldier, without a Strider\'s mercurial streak..."',
    class: DoFClasses.Armour,
    nationality: DoFNationality.Aukema,
    epithet: 'Guardsman',
    routeConfig:{
        allRoute: {
            player: 2
        }
    },
    alt:{
        promo: { artists: [DoFArtist.Astra, DoFArtist.Lumi], displayName: 'Promoted' },
    },
    height: 177,
    stats: {
        hp: 31, pow: 15, skl: 12, spd: 7, luk: 11, def: 15, res: 0, con: 14
    },
    level: 9,
    promotesTo: DoFClasses.Dreadnought,
    growths: {hp: 90, pow: 50, skl: 40, spd: 35, luk: 45, def: 60, res: 20},
    ranks: {
        [DoFWeaponType.Lance]: 121,
    },
    affinity: DoFAffinities.Thunder,
    supports: [DoFCharKey.Cothiva, DoFCharKey.Florent, DoFCharKey.Sileth ]
};
