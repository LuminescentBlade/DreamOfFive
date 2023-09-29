import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Cothiva: IDoFPlayable = {
    name: DoFCharKey.Cothiva,
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    blurb: '"... proud and expansive woman, who suffered neither fools nor challenges to her authority. But she backed it up..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Adept,
    routeConfig:{
        allRoute: {
            player: 5
        }
    },
    bases: {
        hp: 23, pow: 11, skl: 12, spd: 10, luk: 9, def: 4, res: 9, con: 9
    }, 
    level: 7,
    promotesTo: DoFClasses.Sibyl,
    growths: {hp: 45, pow: 50, skl: 60, spd: 40, luk: 45, def: 30, res: 45}
};
