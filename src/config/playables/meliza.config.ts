import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Meliza: IDoFCharacter = {
    name: DoFCharKey.Meliza,
    profileName: 'Meliza Domremie',
    artists: [DoFArtist.Lumi],
    blurb: '"... and immediately my mind dredged up all manner of flower imagery; she seemed the model of a Musain lady..."',
    class: DoFClasses.Cleric,
    nationality: DoFNationality.Musain,
    routeConfig: {
        musain: {
            player: 12
        }
    },
    alt: {
        promo: { artists: [DoFArtist.Lumi], displayName: 'Promoted' },
    },
    stats: {
        hp: 28, pow: 12, skl: 18, spd: 17, luk: 15, def: 6, res: 12, con: 6
    },
    growths: { hp: 55, pow: 40, skl: 65, spd: 55, luk: 55, def: 15, res: 45 },
    level: 15,
    height: 165,
    promotesTo: DoFClasses.HighPriest,
    ranks: {
        [DoFWeaponType.Staff]: 121,
    },
    affinity: DoFAffinities.Light,
    epithet: 'Bellwether',
    supports: [DoFCharKey.Jolyon, DoFCharKey.Kai, DoFCharKey.Severin]
};
