import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFRoute, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";
import { DoFWeapon } from "../weapons.config";

export const Lyndra: IDoFCharacter =  {
    name: DoFCharKey.Lyndra,
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    blurb: '"... known as the Black Cat, for the way she seemed to have wretched luck, but many lives..."',
    class: DoFClasses.Gladiator,
    nationality: DoFNationality.Aukema,
    routeConfig:{
        musain: {
            player: 9,
            enemy: 8.5
        }
    },
    height: 168,
    bases: {hp: 36, pow: 15, skl: 18, spd: 19, luk: 9, def: 18, res: 3, con: 10},
    level: 3,
    growths: {hp: 75, pow: 35, skl: 50, spd: 45, luk: 30, def: 45, res: 10},
    weapons: {
        [DoFWeaponType.Sword]: 181,
        [DoFWeaponType.Axe]: 71
    },
    affinity: DoFAffinities.Wind,
    bossStats: [
        {
            chapter: 8.5,
            route: DoFRoute.Musain,
            weapons: [DoFWeapon.SilverBlade],
            drops: 'Master Seal',
            optional: true,
        }
    ]
};
