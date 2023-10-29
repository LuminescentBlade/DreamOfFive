import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeapons } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Alexis: IDoFCharacter = {
    name: DoFCharKey.Alexis,
    artists: [DoFArtist.Astra],
    blurb: '"... oft left to wonder, after this journal is left to gather dust, who will pick it up? Who tells the tale?"',
    nationality: DoFNationality.Musain, // dresses like an ondurite because he's going there
    class: DoFClasses.Thief,
    routeConfig:{
        onduris: {
            player: 7
        }
    },
    height: 171,
    bases: {
        hp: 26, pow: 9, skl: 13, spd: 16, luk: 13, def: 5, res: 7, con: 6
    },
    level: 10,
    promotesTo: DoFClasses.Rogue,
    growths: {hp: 60, pow: 35, skl: 45, spd: 70, luk: 70, def: 10, res: 25},
    weapons: {
        [DoFWeapons.Sword]: 71,
    }
};
