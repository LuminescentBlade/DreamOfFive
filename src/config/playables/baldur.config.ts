import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Baldur: IDoFCharacter = {
    name: DoFCharKey.Baldur,
    artists: [DoFArtist.Lumi],
    blurb: '"... feared nothing on the open sea. \'No sailor can,\' he remarked, \'because a moment\'s hesitation can sink the ship...\'"',
    class: DoFClasses.Raider,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            player: 10
        }
    },
    height: 178,
    bases: {
        hp: 38, pow: 17, skl: 12, spd: 14, luk: 9, def: 8, res: 6, con: 13
    },
    level: 14,
    growths: { hp: 110, pow: 70, skl: 40, spd: 40, luk: 30, def: 20, res: 20 },
    promotesTo: DoFClasses.Berserker,
    weapons: {
        [DoFWeaponType.Axe]: 71,
    },
    affinity: DoFAffinities.Thunder
};
