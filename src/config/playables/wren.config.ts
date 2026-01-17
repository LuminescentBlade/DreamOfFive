import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Wren: IDoFCharacter = {
    name: DoFCharKey.Wren,
    artists: [DoFArtist.Lumi, DoFArtist.Sev, DoFArtist.Astra],
    class: DoFClasses.Cleric,
    nationality: DoFNationality.Onduris,
    blurb: '"... came a point where she tired of making small differences, and craved true change at our side..."',
    routeConfig: {
        onduris: {
            player: 9
        }
    },
    alt: {
        promo: { artists: [DoFArtist.Lumi, DoFArtist.Sev, DoFArtist.Astra], displayName: 'Promoted' },
    },
    age: 22,
    height: 154,
    stats: {
        hp: 22, pow: 15, skl: 11, spd: 9, luk: 11, def: 3, res: 14, con: 6
    },
    level: 10,
    growths: { hp: 40, pow: 60, skl: 50, spd: 50, luk: 60, def: 5, res: 55 },
    promotesTo: DoFClasses.HighPriest,
    ranks: {
        [DoFWeaponType.Staff]: 121
    },
    affinity: DoFAffinities.Dark,
    epithet: 'Righteous Apostate',
    supports: [DoFCharKey.Kahn, DoFCharKey.Gabriel, DoFCharKey.Stolypin]
};
