import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeapons } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Franceza: IDoFCharacter = {
    name: DoFCharKey.Franceza,
    artists: [DoFArtist.Sev],
    blurb: '"... relaxed, with an easy laugh. But in unguarded moments, she looked to Seren with a fierce protectiveness..."',
    class: DoFClasses.Archer,
    nationality: DoFNationality.Musain,
    routeConfig: {
        musain: {
            player: 8
        }
    },
    height: 161,
    bases: {
        hp: 26, pow: 14, skl: 15, spd: 10, luk: 9, def: 12, res: 0, con: 10
    },
    level: 9,
    growths: {hp: 75, pow: 55, skl: 70, spd: 35, luk: 40, def: 40, res: 10},
    promotesTo: DoFClasses.Marksman,
    weapons: {
        [DoFWeapons.Bow]: 31
    }
};
