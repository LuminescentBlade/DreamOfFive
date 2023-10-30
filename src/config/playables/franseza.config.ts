import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Franseza: IDoFCharacter = {
    name: DoFCharKey.Franseza,
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
        hp: 26, pow: 14, skl: 15, spd: 10, luk: 11, def: 12, res: 0, con: 10
    },
    level: 9,
    growths: {hp: 75, pow: 55, skl: 70, spd: 35, luk: 40, def: 40, res: 10},
    promotesTo: DoFClasses.Marksman,
    weapons: {
        [DoFWeaponType.Bow]: 31
    },
    affinity: DoFAffinities.Dark
};
