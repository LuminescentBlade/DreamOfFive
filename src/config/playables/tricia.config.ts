import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Tricia: IDoFCharacter = {
    name: DoFCharKey.Tricia,
    artists: [DoFArtist.Sev, DoFArtist.Lumi],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Henchwoman,
    blurb: '"... had a way of showing up behind you, with whatever you might need at hand, and a chirpy \'This it, boss?\'"',
    routeConfig: {
        allRoute: {
            player: 2
        }
    },
    alt: {
        promo: { artists: [DoFArtist.Lumi, DoFArtist.Sev], displayName: 'Promoted' },
    },
    height: 152,
    stats: {
        hp: 20, pow: 7, skl: 6, spd: 6, luk: 7, def: 4, res: 2, con: 6
    },
    level: 1,
    promotesTo: DoFClasses.Blademaiden,
    growths: { hp: 50, pow: 55, skl: 45, spd: 70, luk: 85, def: 35, res: 40 },
    ranks: {
        [DoFWeaponType.Sword]: 1,
    },
    affinity: DoFAffinities.Anima,
    epithet: 'Lightfinger',
    supports: [DoFCharKey.Brill, DoFCharKey.Eudira, DoFCharKey.Dismas]
};

