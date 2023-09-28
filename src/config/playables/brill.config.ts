import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Brill: IDoFPlayable = {
    name: 'brill',
    artists: [DoFArtist.Amelia],
    class: DoFClasses.Marksman,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            player: 13,
            enemy: 12
        }
    },
    growths: {hp: 65, pow: 50, skl: 60, spd: 30, luk: 40, def: 35, res: 10},
    level: 3,
    bases: {hp: 32, pow: 19, skl: 21, spd: 14, luk: 13, def: 16, res: 3}
};
