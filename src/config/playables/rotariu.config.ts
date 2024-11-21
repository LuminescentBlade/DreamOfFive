import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Rotariu: IDoFCharacter = {
    name: DoFCharKey.Rotariu,
    artists: [DoFArtist.Sev, DoFArtist.Astra, DoFArtist.Lumi],
    class: DoFClasses.Outrider,
    nationality: DoFNationality.Vishara,
    epithet: 'Silent Watcher',
    height: 177,
    routeConfig: {
        onduris: {
            player: 25
        },
        musain: {
            enemy: 25
        }
    },
    level: 12,
    affinity: DoFAffinities.Anima,
    blurb: `"... looked every part the dashing hero. Yet here was Trajan's 'knife in the dark', a rough rider scorned by aloof knights..."`,
    stats: { hp: 46, pow: 23, skl: 23, spd: 28, luk: 12, def: 18, res: 8, con: 10 },
    growths: { hp: 70, pow: 35, skl: 50, spd: 45, luk: 35, def: 20, res: 20 },
    ranks: {
        [DoFWeaponType.Sword]: 251,
        [DoFWeaponType.Bow]: 251
    },
    age: 26,
    bossStats: [
        {
            chapter: 25,
            weapons: ['Silver Bow', 'Brutal Bow', 'Silver Sword']
        }
    ],
    supports: [DoFCharKey.Stolypin]
};
