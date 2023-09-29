import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Lyndra: IDoFPlayable =  {
    name: 'lyndra',
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    blurb: '"... known as the Black Cat, for the way she seemed to have wretched luck, but many lives..."',
    class: DoFClasses.Gladiator,
    nationality: DoFNationality.Aukema,
    routeConfig:{
        musain: {
            player: 9,
            enemy: 8.5
        }
    },
    bases: {hp: 36, pow: 16, skl: 18, spd: 19, luk: 9, def: 18, res: 3},
    level: 3,
    growths: {hp: 75, pow: 35, skl: 50, spd: 45, luk: 30, def: 45, res: 10}
};
