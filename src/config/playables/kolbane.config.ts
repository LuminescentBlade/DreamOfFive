import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Kolbane: IDoFCharacter = {
    name: DoFCharKey.Kolbane,
    profileName: 'Kolbane Farrier',
    artists: [DoFArtist.Lumi],
    blurb: '"The third most senior of each Strider section was to bear the banner, and so, having only three men..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Soldier,
    routeConfig: {
        allRoute: {
            player: 0
        }
    },
    height: 183,
    age: 20,
    bases: {
        hp: 24, pow: 9, skl: 11, spd: 9, luk: 5, def: 8, res: 0, con: 10
    },
    level: 2,
    promotesTo: DoFClasses.Sentinel,
    growths: {hp: 75, pow: 55, skl: 35, spd: 55, luk: 40, def: 35, res: 15},
    epithet: 'Stalwart'
};
