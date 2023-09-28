import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Garath: IDoFPlayable = {
    name: DoFCharKey.Garath,
    artists: [DoFArtist.Astra],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Warrior,
    routeConfig: {
        allRoute: {
            player: 0
        }
    },
    bases: {hp: 40, pow: 17, skl: 13, spd: 10, luk: 9, def: 10, res: 4, con: 18},
    level: 1,
    growths:   {hp: 75, pow: 50, skl: 40, spd: 35, luk: 30, def: 20, res: 10}
};
