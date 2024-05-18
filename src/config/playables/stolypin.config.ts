import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFRoute, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Stolypin: IDoFCharacter = {
    name: DoFCharKey.Stolypin,
    artists: [DoFArtist.Astra, DoFArtist.Sev, DoFArtist.Lumi],
    class: DoFClasses.Harrier,
    nationality: DoFNationality.Vishara,
    height: 173,
    routeConfig: {
        onduris: {
            player: 15
        },
        musain: {
            enemy: 25
        }
    },
    age: 19,
    level: 4,
    stats: { hp: 29, pow: 13, skl: 19, spd: 20, luk: 16, def: 10, res: 12, con: 8 },
    growths: { hp: 55, pow: 30, skl: 40, spd: 55, luk: 45, def: 25, res: 35 },
    ranks: {
        [DoFWeaponType.Anima]: 181,
        [DoFWeaponType.Staff]: 71
    },
    epithet: 'Omen-Bearer',
    affinity: DoFAffinities.Light,
    blurb: `"... remarked, 'If he's good enough, he's old enough.' However callow his look, his reputation as a scholar preceded him..."`,
    bossStats: [
        {
            chapter: 25,
            route: DoFRoute.Musain,
            stats: { hp: 30, pow: 15, skl: 21, spd: 23, luk: 19, def: 12, res: 13, con: 8 },
            level: 7,
            weapons: ['Fimbulvetr'],
            optional: true,
        }
    ]
};
