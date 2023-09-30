import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Garath: IDoFCharacter = {
    name: DoFCharKey.Garath,
    artists: [DoFArtist.Astra],
    blurb: '"... survivor of countless battles, destined to be forgotten by history. Yet there was a sort of kindness..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Warrior,
    routeConfig: {
        allRoute: {
            player: 0
        }
    },
    bases: {hp: 40, pow: 17, skl: 13, spd: 10, luk: 9, def: 10, res: 4, con: 18},
    level: 1,
    height: 195,
    growths:   {hp: 75, pow: 50, skl: 40, spd: 35, luk: 30, def: 20, res: 10}
};
