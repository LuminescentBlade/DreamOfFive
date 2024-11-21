import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Alexis: IDoFCharacter = {
    name: DoFCharKey.Alexis,
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    blurb: '"... oft left to wonder, after this journal is left to gather dust, who will pick it up? Who tells the tale?"',
    nationality: DoFNationality.Musain, // dresses like an ondurite because he's going there
    class: DoFClasses.Thief,
    routeConfig:{
        onduris: {
            player: 7
        }
    },
    alt:{
        promo: { artists: [DoFArtist.Astra, DoFArtist.Lumi], displayName: 'Promoted' },
    },
    height: 171,
    epithet: 'Raconteur',
    stats: {
        hp: 27, pow: 10, skl: 13, spd: 18, luk: 13, def: 6, res: 7, con: 7
    },
    level: 10,
    promotesTo: DoFClasses.Rogue,
    growths: {hp: 60, pow: 40, skl: 50, spd: 70, luk: 70, def: 15, res: 25},
    ranks: {
        [DoFWeaponType.Sword]: 71,
    },
    affinity: DoFAffinities.Anima,
    supports: [DoFCharKey.Leda, DoFCharKey.Amaryl, DoFCharKey.Stolypin, DoFCharKey.Cyrille]
};
