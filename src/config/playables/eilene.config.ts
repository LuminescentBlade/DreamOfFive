import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Eilene: IDoFCharacter = {
    name: DoFCharKey.Eilene,
    artists: [DoFArtist.Astra, DoFArtist.Sev, DoFArtist.Nih],
    blurb: '"Only the most well-heeled could afford pegasi or the training to ride them, so one could only wonder..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.PegRider,
    routeConfig: {
        allRoute: {
            player: 1
        }
    },
    alt:{
        promo: { artists: [DoFArtist.Astra, DoFArtist.Sev,DoFArtist.Nih, DoFArtist.Lumi], displayName: 'Promoted' },
    },
    height: 162,
    stats: {
        hp: 22, pow: 8, skl: 9, spd: 14, luk: 10, def: 6, res: 9, con: 7
    },
    level: 5,
    promotesTo: DoFClasses.SeraphKnight,
    growths: { hp: 60, pow: 35, skl: 45, spd: 70, luk: 50, def: 20, res: 60 },
    ranks: {
        [DoFWeaponType.Sword]: 31
    },
    affinity: DoFAffinities.Light,
epithet: 'White Wings'
};
