import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Eilene: IDoFCharacter =  {
    name: DoFCharKey.Eilene,
    artists: [DoFArtist.Astra, DoFArtist.Sev, DoFArtist.Nih],
    blurb: '"Only the most well-heeled could afford pegasi or the training to ride them, so one could only wonder..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.PegRider,
    routeConfig:{
        allRoute: {
            player: 1
        }
    },
    height: 162,
    bases: {
        hp: 19, pow: 7, skl: 8, spd: 11, luk: 8, def: 6, res: 9, con: 7
    },
    level: 3,
    promotesTo: DoFClasses.SeraphKnight,
    growths: {hp: 60, pow: 40, skl: 50, spd: 70, luk: 50, def: 20, res: 60},
    weapons: {
        [DoFWeaponType.Sword]: 31
    },
    affinity: DoFAffinities.Light
};
