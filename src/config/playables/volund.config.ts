import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Volund: IDoFCharacter = {
    name: DoFCharKey.Volund,
    altNames: ['Murong Yunxiao', '慕容雲嘯'],
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Sentinel,
    epithet: 'Tireless Warden',
    nationality: DoFNationality.Svanhild,
    height: 193,
    age: 23,
    routeConfig: {
        allRoute: {
            player: 21
        }
    },
    level: 10,
    affinity: DoFAffinities.Dark,
    stats: { hp: 42, pow: 18, skl: 24, spd: 25, luk: 13, def: 23, res: 5, con: 13 },
    growths: { hp: 75, pow: 30, skl: 45, spd: 55, luk: 25, def: 40, res: 10 },
    ranks: { [DoFWeaponType.Lance]: 251 },
    blurb: `'... of proud and regal bearing, scattering ranks with sweeps of the spear, and yet I recognized a true brawler's grit...'`,
    bossStats: [
        {
            chapter: 21,
            weapons: ['Vorpal Lance', 'Spear']
        }
    ]
};
