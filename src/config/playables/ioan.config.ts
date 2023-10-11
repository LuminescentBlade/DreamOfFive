import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Ioan: IDoFCharacter = {
    name: DoFCharKey.Ioan,
    artists: [DoFArtist.Amelia, DoFArtist.Astra],
    blurb: '"... marvelled that a man of such strength could easily control his own fate, yet left it, invariably, to the cards."',
    nationality: DoFNationality.Vishara,
    class: DoFClasses.DrakeRider,
    height: 186,
    routeConfig: {
        allRoute: {
            player: 6,
            enemy: 6
        }
    },
    bases: {
        hp: 30, pow: 12, skl: 8, spd: 9, luk: 7, def: 12, res: 0, con: 12
    },
    level: 8, 
    epithet: 'The Starbound',
    promotesTo: DoFClasses.DrakeKnight,
    growths: {hp: 85, pow: 50, skl: 50, spd: 40, luk: 25, def: 45, res: 10}
};
