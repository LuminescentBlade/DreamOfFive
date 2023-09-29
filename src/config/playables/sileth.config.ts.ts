import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Sileth: IDoFPlayable = {
    name: DoFCharKey.Sileth,
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    blurb: '"... served, I sense, to keep him grounded. She had found a way to rise through her wits alone..."',
    class: DoFClasses.Mage,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            player: 8,
        },
        musain: {
            player: 15
        }
    },
    bases: {
        hp: 25, pow: 10, skl: 10, spd: 12, luk: 9, def: 7, res: 12, con: 7
    },
    level: 10,
    growths: {hp: 75, pow: 35, skl: 50, spd: 50, luk: 30, def: 20, res: 60},
    promotesTo: DoFClasses.Sage
};
