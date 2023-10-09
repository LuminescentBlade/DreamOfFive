import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Florent: IDoFCharacter = {
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
    height: 179,
    bases: {
        hp: 33, pow: 16, skl: 16, spd: 13, luk: 9, def: 15, res: 1, con: 10
    },
    level: 14,
    promotesTo: DoFClasses.Paladin,
    growths: {hp: 90, pow: 55, skl: 50, spd: 40, luk: 30, def: 45, res: 10}
};
