import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Ioan: IDoFPlayable = {
    name: 'ioan',
    artists: [DoFArtist.Amelia, DoFArtist.Astra],
    nationality: DoFNationality.Vishara,
    class: DoFClasses.DrakeRider,
    routeConfig: {
        allRoute: {
            player: 6,
            enemy: 6
        }
    },
    bases: {
        hp: 30, pow: 12, skl: 8, spd: 9, luk: 7, def: 12, res: 0, con: 12
    },
    level: 8, 
    promotesTo: DoFClasses.DrakeKnight,
    growths: {hp: 85, pow: 50, skl: 50, spd: 40, luk: 25, def: 45, res: 10}
};
