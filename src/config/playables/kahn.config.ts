import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Kahn: IDoFPlayable = {
    name: 'kahn',
    artists: [DoFArtist.Astra, DoFArtist.Amelia, DoFArtist.Lumi],
    class: DoFClasses.Soldier,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            player: 9
        }
    },
    bases: {
        hp: 27, pow: 12, skl: 13, spd: 11, luk: 8, def: 10, res: 0
    },
    level: 9,
    promotesTo: DoFClasses.Sentinel,
    growths: {hp: 85, pow: 45, skl: 55, spd: 45, luk: 40, def: 40, res: 10}
};
