import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Asher: IDoFCharacter = {
    name: DoFCharKey.Asher,
    artists: [DoFArtist.Sev, DoFArtist.Lumi],
    blurb: '"... did not quite know what to make of him, but whether or not his affect is sincere, he is no charlatan..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Priest,
    routeConfig: {
        allRoute: {
            player: 0
        }
    },
    alt:{
        promo: { artists: [DoFArtist.Sev, DoFArtist.Lumi], displayName: 'Promoted' },
    },
    height: 177,
    stats: {
        hp: 21, pow: 7, skl: 5, spd: 6, luk: 7, def: 3, res: 8, con: 7
    },
    level: 1,
    promotesTo: DoFClasses.HighPriest,
    growths: {hp: 90, pow: 70, skl: 55, spd: 35, luk: 40, def: 35, res: 50 },
    ranks: {
        [DoFWeaponType.Staff]: 121,
    },
    affinity: DoFAffinities.Thunder,
    epithet: 'Layer of Hands',
};
