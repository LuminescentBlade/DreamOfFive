import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Brill: IDoFCharacter = {
    name: DoFCharKey.Brill,
    artists: [DoFArtist.Sev],
    blurb: '"The Ondurites regarded helot women as chattel, archers as cowards, and yet she had battled her way to command..."',
    class: DoFClasses.Marksman,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            player: 13,
            enemy: 12
        }
    },
    height: 167,
    epithet: 'The Huntress',
    growths: {hp: 65, pow: 50, skl: 60, spd: 30, luk: 40, def: 35, res: 10},
    level: 3,
    bases: {hp: 32, pow: 19, skl: 21, spd: 14, luk: 13, def: 16, res: 3, con: 12},
    weapons: {
        [DoFWeaponType.Bow]: 181,
    },
    affinity: DoFAffinities.Dark
};
