
import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Cyrille: IDoFCharacter = {
    name: DoFCharKey.Cyrille,
    artists: [DoFArtist.Lumi],
    blurb: '"... only a few truly had the diligence and mettle for such thankless work, but their competence was beyond reproach..."',
    nationality: DoFNationality.Musain,
    class: DoFClasses.Cavalier,
    height: 170,
    routeConfig: {
        allRoute: {
            player: 1
        }
    },
    age: 23,
    stats: { hp: 28, pow: 8, skl: 8, spd: 11, luk: 5, def: 9, res: 0, con: 9 },
    level: 3,
    growths: { hp: 115, pow: 35, skl: 35, spd: 60, luk: 35, def: 45, res: 20 },
    promotesTo: DoFClasses.Paladin,
    ranks: {
        [DoFWeaponType.Sword]: 31,
        [DoFWeaponType.Lance]: 31
    },
    affinity: DoFAffinities.Fire,
    mountName: 'Eclair',
    epithet: 'Blind Trailblazer'
};
