import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Alexis: IDoFPlayable = {
    name: 'alexis',
    artists: [DoFArtist.Astra],
    nationality: DoFNationality.Musain, // dresses like an ondurite because he's going there
    class: DoFClasses.Thief,
    routeConfig:{
        onduris: {
            player: 7
        }
    },
    bases: {
        hp: 26, pow: 9, skl: 13, spd: 16, luk: 13, def: 5, res: 7, con: 6
    },
    level: 10,
    promotesTo: DoFClasses.Rogue,
    growths: {hp: 60, pow: 35, skl: 45, spd: 70, luk: 70, def: 10, res: 25}
};
