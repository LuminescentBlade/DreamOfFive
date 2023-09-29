import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Marie: IDoFPlayable = {
    name: 'marie',
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    blurb: '"... oft left to wonder, after this journal is left to gather dust, who will pick it up? Who tells the tale?"',
    class: DoFClasses.Thief,
    nationality: DoFNationality.Aukema,
    routeConfig: {
        musain: {
            player: 6.5
        }
    },
    bases: {
        hp: 26, pow: 10, skl: 11, spd: 16, luk: 13, def: 6, res: 5, con: 6
    },
    level: 10,
    promotesTo: DoFClasses.Rogue,
    growths: {hp: 65, pow: 40, skl: 40, spd: 70, luk: 65, def: 15, res: 20}
};
