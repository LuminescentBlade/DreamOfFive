import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Conleth: IDoFPlayable = {
    name: 'conleth',
    artists: [DoFArtist.Lumi],
    blurb: '"... had thought all deserters to be vicious, desperate brutes. But he never once seemed to regret his decision..."',
    class: DoFClasses.Skirmisher,
    nationality: DoFNationality.Aukema,
    routeConfig:{
        onduris: {
            player: 8
        },
        musain: {
            player: 15
        }
    },
    bases: {
        hp: 25, pow: 10, skl: 12, spd: 15, luk: 9, def: 6, res: 2
    },
    level: 8,
    promotesTo: DoFClasses.Ranger,
    growths: {hp: 65, pow: 40, skl: 50, spd: 60, luk: 60, def: 25, res: 10}
};
