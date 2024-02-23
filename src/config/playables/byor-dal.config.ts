import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFRoute, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";
import { DoFWeapon } from "../weapons.config";

export const ByorDal: IDoFCharacter = {
    name: DoFCharKey.byorDal,
    displayName: 'byor\'Dal',
    artists: [DoFArtist.Lumi, DoFArtist.Astra],
    blurb: '"... saw no future for himself or his land, so resolved to go out in a blaze of glory. But how many would be dragged down..."',
    class: DoFClasses.Gladiator,
    nationality: DoFNationality.Onduris,
    routeConfig:{
        onduris: {
            player: 11,
            enemy: 10.5
        }
    },
    height: 182,
    stats: {hp: 38, pow: 18, skl: 15, spd: 15, luk: 6, def: 17, res: 8, con: 13},
    level: 3, 
    growths: {hp: 90, pow: 45, skl: 55, spd: 35, luk: 15, def: 40, res: 30},
    ranks: {
        [DoFWeaponType.Axe]: 181,
        [DoFWeaponType.Sword]: 31
    },
    affinity: DoFAffinities.Ice,
    bossStats: [
        {chapter: 10.5, route: DoFRoute.Onduris, weapons: [DoFWeapon.Francisca], drops: 'Master Seal', optional: true}
    ]
};
