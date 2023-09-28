import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Tricia: IDoFPlayable =   {
    name: 'tricia',
    artists: [DoFArtist.Amelia, DoFArtist.Lumi],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Henchwoman,
    routeConfig:{
        allRoute: {
            player: 2
        }
    },
    bases: {
        hp: 20, pow: 7, skl: 6, spd: 5, luk: 7, def: 4, res: 2, con: 6
    }, 
    level: 1,
    promotesTo: DoFClasses.Blademaiden,
    growths: {hp: 50, pow: 45, skl: 35, spd: 60, luk: 75, def: 25, res: 30}
};

