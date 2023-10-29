import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeapons } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Crowe: IDoFCharacter = {
    name: DoFCharKey.Crowe,
    artists: [DoFArtist.Amelia],
    blurb: '"It was clear that, in better times, he would only be fit for the noose. But we needed him, and he knew it..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Archer,
    routeConfig:{
        allRoute: {
            player: 3,
            enemy: 3
        }
    },
    height: 173,
    bases: {
        hp: 26, pow: 12, skl: 11, spd: 10, luk: 5, def: 8, res: 0, con: 10
    },
    level: 6,
    promotesTo: DoFClasses.Marksman,
    growths: {hp: 80, pow: 60, skl: 55, spd: 45, luk: 30, def: 25, res: 10},
    weapons: {
        [DoFWeapons.Bow]: 31    
    }
};
