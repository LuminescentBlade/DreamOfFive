import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";
import { stat } from "fs";

export const Blixa: IDoFPlayable = {
    name: 'blixa',
    artists: [DoFArtist.Amelia, DoFArtist.Astra, DoFArtist.Lumi],
    blurb: '"... gentle in all things. I felt as though, were he to come to harm, it would rank among the great tragedies of war..."',
    class: DoFClasses.Bard,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        musain: {
            player: 9
        }
    },
    bases: { hp: 26, pow: 3, skl: 5, spd: 13, luk: 10, def: 3, res: 4 },
    level:  1,
    growths: {hp: 70, pow: 0, skl: 0, spd: 80, luk: 70, def: 25, res: 55}
};
