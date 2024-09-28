import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Ioan: IDoFCharacter = {
    name: DoFCharKey.Ioan,
    artists: [DoFArtist.Lumi],
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
    alt:{
        promo: { artists: [DoFArtist.Lumi], displayName: 'Promoted' },
    },
    stats: {
        hp: 32, pow: 14, skl: 11, spd: 10, luk: 7, def: 13, res: 0, con: 12
    },
    level: 10, 
    epithet: 'Starbound',
    promotesTo: DoFClasses.DrakeKnight,
    growths: {hp: 85, pow: 50, skl: 50, spd: 40, luk: 25, def: 45, res: 10},
    ranks: {
        [DoFWeaponType.Lance]: 71
    },
    affinity: DoFAffinities.Anima,
    mountName: 'Ruslan'
};
