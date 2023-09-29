import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Corbeau: IDoFPlayable = {
    name: 'corbeau',
    profileName: 'Daffodil Corbeau',
    artists: [DoFArtist.Lumi],
    blurb: '"... could not content herself with railing against injustice. There came a time to draw a line in the sand..."',
    class: DoFClasses.Warrior,
    nationality: DoFNationality.Musain,
    routeConfig:{
        musain: {
            npc: 8,
            player: 13
        }
    },
    growths: {hp: 110, pow: 50, skl: 30, spd: 35, luk: 45, def: 20, res: 20},
    level: 4,
    bases: {hp: 44, pow: 20, skl: 13, spd: 14, luk: 16, def: 11, res: 6, con: 14}
};
