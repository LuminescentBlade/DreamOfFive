import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFRoute, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";
import { DoFWeapon } from "../weapons.config";

export const Nikita: IDoFCharacter = {
    name: DoFCharKey.Nikita,
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    blurb: '"... exemplar of the Ondurite woman. Too soft-skinned for manual labour, she had devoted herself entirely to battle..."',
    class: DoFClasses.Swordmaster,
    nationality: DoFNationality.Onduris,
    epithet: 'Thorn',
    height: 171,
    routeConfig: {
        onduris: {
            player: 10.5,
            enemy: 10
        }
    },
    growths: { hp: 50, pow: 40, skl: 70, spd: 70, luk: 60, def: 20, res: 15 },
    level: 1,
    stats: { hp: 29, pow: 15, skl: 18, spd: 24, luk: 17, def: 12, res: 7, con: 8 },
    ranks: {
        [DoFWeaponType.Sword]: 181
    },
    conditional:{
        player: {
            level: 1
        }
    },
    affinity: DoFAffinities.Fire,
    bossStats: [
        { chapter: 10, optional: true, level: 1, weapons: [DoFWeapon.SteelSword], route: DoFRoute.Onduris, drops: 'Lost Technique' }
    ]
};
