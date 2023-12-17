import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Garath: IDoFCharacter = {
    name: DoFCharKey.Garath,
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    blurb: '"... survivor of countless battles, destined to be forgotten by history. Yet there was a sort of kindness..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Warrior,
    routeConfig: {
        allRoute: {
            player: 0
        }
    },
    stats: { hp: 40, pow: 17, skl: 13, spd: 10, luk: 9, def: 10, res: 4, con: 18 },
    level: 1,
    height: 200,
    growths: { hp: 90, pow: 75, skl: 60, spd: 40, luk: 30, def: 45, res: 10 },
    age: 38,
    epithet: 'The Deadeye',
    ranks: {
        [DoFWeaponType.Axe]: 71,
        [DoFWeaponType.Bow]: 181
    },
    affinity: DoFAffinities.Dark
};
