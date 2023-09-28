import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Lizaveta: IDoFPlayable = {
    name: 'lizaveta',
    profileName: 'Lizaveta Samnia',
    artists: [DoFArtist.Astra, DoFArtist.Amelia],
    nationality: DoFNationality.Vishara,
    class: DoFClasses.Troubadour,
    routeConfig: {
        allRoute: {
            player: 4
        }
    },
    bases: {
        hp: 26, pow: 8, skl: 7, spd: 12, luk: 12, def: 3, res: 10, con: 6
    },
    level: 6,
    promotesTo: DoFClasses.Valkyrie,
    growths: {hp: 85, pow: 35, skl: 60, spd: 55, luk: 45, def: 10, res: 35}
};
