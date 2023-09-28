import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Wren: IDoFPlayable =  {
    name: 'wren',
    artists: [DoFArtist.Lumi, DoFArtist.Amelia],
    class: DoFClasses.Cleric,
    nationality: DoFNationality.Onduris,
    routeConfig:{
        onduris: {
            player: 9
        }
    }, 
    bases: {
        hp: 22, pow: 15, skl: 12, spd: 9, luk: 11, def: 3, res: 14
    },
    level: 10,
    growths: {hp: 40, pow: 60, skl: 50, spd: 50, luk: 60, def: 5, res: 55},
    promotesTo: DoFClasses.Bishop
};
