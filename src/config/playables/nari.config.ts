import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Nari: IDoFPlayable = {
    name: 'nari',
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Mercenary,
    nationality: DoFNationality.Onduris,
    routeConfig:{
        onduris: {
            player: 10
        }
    },
    bases: {
        hp: 34, pow: 16, skl: 14, spd: 11, luk: 13, def: 11, res: 0
    },
    level: 13,
    promotesTo: DoFClasses.Gladiator,
    growths: {hp: 105, pow: 60, skl: 45, spd: 35, luk: 45, def: 30, res: 5}
};
