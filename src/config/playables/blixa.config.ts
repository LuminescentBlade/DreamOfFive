import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";
import { stat } from "fs";

export const Blixa: IDoFCharacter = {
    name: DoFCharKey.Blixa,
    artists: [DoFArtist.Sev, DoFArtist.Astra, DoFArtist.Lumi],
    blurb: '"... gentle in all things. I felt as though, were he to come to harm, it would rank among the great tragedies of war..."',
    class: DoFClasses.Bard,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        musain: {
            player: 9
        }
    },
    height: 166,
    stats: { hp: 26, pow: 3, skl: 5, spd: 13, luk: 10, def: 3, res: 4, con: 6},
    level:  1,
    growths: {hp: 70, pow: 0, skl: 0, spd: 80, luk: 70, def: 25, res: 55},
    ranks: {},
    affinity: DoFAffinities.Ice
};
