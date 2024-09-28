import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Chester: IDoFCharacter = {
    name: DoFCharKey.Chester,
    artists: [DoFArtist.Sev],
    blurb: '"... nerve had already failed once, and while he would never forgive himself this, he could yet atone..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Thief,
    routeConfig: {
        allRoute: {
            player: 2
        }
    },
    alt:{
        promo: { artists: [DoFArtist.Sev, DoFArtist.Lumi], displayName: 'Promoted' },
    },
    height: 166,
    age: 19,
    epithet: 'Atoner',
    stats:{
        hp: 26, pow: 9, skl: 7, spd: 15, luk: 9, def: 6, res: 0, con: 6
    }, 
    level: 3,
    promotesTo: DoFClasses.Rogue,
    growths: {hp: 75, pow: 40, skl: 55, spd: 65, luk: 40, def: 35, res: 5},
    ranks: {
        [DoFWeaponType.Sword]: 31,
    },
    affinity: DoFAffinities.Fire
};
