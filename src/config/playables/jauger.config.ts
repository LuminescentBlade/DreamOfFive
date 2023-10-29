import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Jauger: IDoFCharacter = {
    name: DoFCharKey.Jauger,
    artists: [DoFArtist.Astra, DoFArtist.Sev],
    class: DoFClasses.Armour,
    nationality: DoFNationality.Aukema,
    height: 176,
    routeConfig: {
        allRoute: {
            player: 16
        }
    },
    bases: { hp: 28, pow: 13, skl: 11, spd: 8, luk: 10, def: 15, res: 0 },
    level: 5, 
    growths: {hp: 115, pow: 65, skl: 60, spd: 55, luk: 35, def: 70, res: 20},
    promotesTo: DoFClasses.Dreadnought
};  
