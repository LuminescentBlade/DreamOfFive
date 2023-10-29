import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeapons } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Lizaveta: IDoFCharacter = {
    name: DoFCharKey.Lizaveta,
    profileName: 'Lizaveta Samnia',
    artists: [DoFArtist.Astra, DoFArtist.Amelia],
    blurb: '"... and sometimes she would look as though she expected aid, but she soon learned self-sufficiency..."',
    nationality: DoFNationality.Vishara,
    class: DoFClasses.Troubadour,
    routeConfig: {
        allRoute: {
            player: 4
        }
    },
    epithet: 'The Silken Spinster',
    height: 157,
    bases: {
        hp: 26, pow: 8, skl: 7, spd: 12, luk: 12, def: 3, res: 10, con: 6
    },
    level: 6,
    promotesTo: DoFClasses.Valkyrie,
    growths: {hp: 85, pow: 35, skl: 60, spd: 55, luk: 45, def: 10, res: 35},
    weapons: {
        [DoFWeapons.Staff]: 31,
    }
};
