import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Eilene: IDoFPlayable =  {
    name: DoFCharKey.Eilene,
    artists: [DoFArtist.Astra, DoFArtist.Amelia, DoFArtist.Nih],
    blurb: '"Only the most well-heeled could afford pegasi or the training to ride them, so one could only wonder..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.PegRider,
    routeConfig:{
        allRoute: {
            player: 1
        }
    },
    bases: {
        hp: 19, pow: 7, skl: 8, spd: 11, luk: 8, def: 6, res: 9, con: 7
    },
    level: 3,
    promotesTo: DoFClasses.SeraphKnight,
    growths: {hp: 60, pow: 30, skl: 45, spd: 60, luk: 45, def: 20, res: 50}
};
