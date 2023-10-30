import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

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
    height: 166,
    age: 19,
    epithet: 'The Atoner',
    bases:{
        hp: 24, pow: 8, skl: 9, spd: 14, luk: 9, def: 6, res: 0, con: 6
    }, 
    level: 3,
    promotesTo: DoFClasses.Rogue,
    growths: {hp: 75, pow: 40, skl: 55, spd: 65, luk: 40, def: 35, res: 5},
    weapons: {
        [DoFWeaponType.Sword]: 31,
    },
    affinity: DoFAffinities.Fire
};
