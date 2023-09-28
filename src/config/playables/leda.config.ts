import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Leda: IDoFPlayable = {
    name: 'leda',
    artists: [DoFArtist.Astra, DoFArtist.Amelia],
    class: DoFClasses.Dancer,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            player: 10,
        }
    },
    growths: {hp: 85, pow: 0, skl: 0, spd: 70, luk: 80, def: 10, res: 70},
    level: 1,
    bases: {hp: 27, pow: 1, skl: 7, spd: 12, luk: 12, def: 2, res: 6}
};
