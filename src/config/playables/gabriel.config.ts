import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeapons } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Gabriel: IDoFCharacter = {
    name: DoFCharKey.Gabriel,
    artists: [DoFArtist.Sev],
    blurb: '"... knew he was stretching his luck. He would serve his own interests, but reliably and predictably..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Warlock,
    routeConfig: {
        allRoute: {
            player: 5
        }
    },
    height: 172,
    bases: {
        hp: 27, pow: 13, skl: 8, spd: 8, luk: 6, def: 6, res: 11, con: 10
    },
    level: 7,
    epithet: 'The Prestige',
    promotesTo: DoFClasses.Sorcerer,
    growths: {hp: 60, pow: 65, skl: 45, spd: 35, luk: 35, def: 25, res: 55},
    weapons: {
        [DoFWeapons.Dark]: 71,
    },
    affinity: DoFAffinities.Ice
};
