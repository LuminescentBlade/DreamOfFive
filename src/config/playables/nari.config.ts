import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Nari: IDoFCharacter = {
    name: DoFCharKey.Nari,
    artists: [DoFArtist.Lumi],
    blurb: '"... yet she took any setback in stride. There was nothing unnatural in battle to her, no glory, no fear..."',
    class: DoFClasses.Mercenary,
    nationality: DoFNationality.Onduris,
    height: 161,
    routeConfig: {
        onduris: {
            player: 10
        }
    },
    alt: {
        promo: { artists: [DoFArtist.Lumi], displayName: 'Promoted' },
    },
    stats: {
        hp: 35, pow: 16, skl: 16, spd: 13, luk: 15, def: 12, res: 0, con: 11
    },
    level: 14,
    promotesTo: DoFClasses.Gladiator,
    growths: { hp: 105, pow: 60, skl: 45, spd: 35, luk: 45, def: 30, res: 5 },
    ranks: {
        [DoFWeaponType.Sword]: 71,
    },
    affinity: DoFAffinities.Anima,
    epithet: 'Sleeping Waters',
    supports: [DoFCharKey.Baldur, DoFCharKey.byorDal, DoFCharKey.Sileth]
};
