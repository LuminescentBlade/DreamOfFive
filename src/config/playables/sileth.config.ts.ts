import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Sileth: IDoFCharacter = {
    name: DoFCharKey.Sileth,
    artists: [DoFArtist.Lumi],
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
    height: 159,
    bases: {
        hp: 25, pow: 10, skl: 11, spd: 13, luk: 9, def: 8, res: 13, con: 7
    },
    level: 10,
    growths: {hp: 75, pow: 35, skl: 50, spd: 55, luk: 30, def: 25, res: 60},
    promotesTo: DoFClasses.Sage
};
