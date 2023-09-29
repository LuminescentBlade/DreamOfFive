import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Florent: IDoFPlayable = {
    name: DoFCharKey.Florent,
    artists: [DoFArtist.Astra, DoFArtist.Amelia],
    blurb: '"His father had been elevated to knighthood through his deeds. Little wonder his son was more grounded..."',
    class: DoFClasses.Cavalier,
    nationality: DoFNationality.Musain,
    routeConfig:{
        musain: {
            player: 10
        },
        onduris: {
            player: 15
        }
    },
    bases: {
        hp: 32, pow: 15, skl: 14, spd: 12, luk: 8, def: 13, res: 0, con: 10
    },
    level: 12,
    promotesTo: DoFClasses.Paladin,
    growths: {hp: 90, pow: 55, skl: 50, spd: 40, luk: 30, def: 45, res: 10}
};
