import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeapons } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Wren: IDoFCharacter =  {
    name: DoFCharKey.Wren,
    artists: [DoFArtist.Lumi, DoFArtist.Amelia],
    class: DoFClasses.Cleric,
    nationality: DoFNationality.Onduris,
    blurb: '"... came a point where she tired of making small differences, and craved true change at our side..."',
    routeConfig:{
        onduris: {
            player: 9
        }
    }, 
    height: 154,
    bases: {
        hp: 22, pow: 15, skl: 12, spd: 9, luk: 11, def: 3, res: 14, con: 6
    },
    level: 10,
    growths: {hp: 40, pow: 60, skl: 50, spd: 50, luk: 60, def: 5, res: 55},
    promotesTo: DoFClasses.Bishop,
    weapons: {
        [DoFWeapons.Staff]: 121 
    }
};
