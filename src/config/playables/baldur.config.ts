import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Baldur: IDoFCharacter = {
    name: DoFCharKey.Baldur,
    artists: [DoFArtist.Lumi, DoFArtist.Astra],
    blurb: '"... feared nothing on the open sea. \'No sailor can,\' he remarked, \'because a moment\'s hesitation can sink the ship...\'"',
    class: DoFClasses.Raider,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            player: 10
        }
    },
    alt: {
        promo: { artists: [DoFArtist.Lumi, DoFArtist.Astra], displayName: 'Promoted' },
    },
    height: 178,
    stats: {
        hp: 40, pow: 17, skl: 13, spd: 15, luk: 9, def: 8, res: 6, con: 13
    },
    level: 14,
    growths: { hp: 120, pow: 70, skl: 40, spd: 40, luk: 30, def: 20, res: 20 },
    promotesTo: DoFClasses.Berserker,
    ranks: {
        [DoFWeaponType.Axe]: 71,
    },
    affinity: DoFAffinities.Thunder,
    epithet: 'Seafarer',
    supports: [DoFCharKey.Leda, DoFCharKey.Nari, DoFCharKey.Nikita]
};
