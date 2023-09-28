import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Bellona: IDoFPlayable = {
    name: 'bellona',
    artists: [DoFArtist.Astra, DoFArtist.Amelia],
    class: DoFClasses.DrakeRider,
    nationality: DoFNationality.Vishara,
    routeConfig: {
        onduris: {
            player: 9
        },
        musain: {
            player: 15
        }
    },
    bases: {
        hp: 31, pow: 14, skl: 10, spd: 12, luk: 13, def: 11, res: 0, con: 10
    },
    level: 11,
    growths: { hp: 80, pow: 65, skl: 40, spd: 45, luk: 50, def: 35, res: 5 },
    promotesTo: DoFClasses.DrakeKnight
};
