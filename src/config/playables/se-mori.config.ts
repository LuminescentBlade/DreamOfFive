import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const SeMori: IDoFCharacter = {
    name: DoFCharKey.seMori,
    displayName: 'se\'Mori',
    artists: [DoFArtist.Sev, DoFArtist.Astra],
    blurb: '"... seemed puffed up at first, but in time, I grew to respect his firm character, his direct manner, his sense of duty..."',
    class: DoFClasses.Fencer,
    nationality: DoFNationality.Onduris,
    height: 176,
    epithet: 'The Rake',
    alt: {
        promo: {
            artists: [DoFArtist.Sev, DoFArtist.Astra, DoFArtist.Lumi],
            chapter: 14.5,
            displayName: 'Promoted'
        }
    },
    routeConfig: {
        onduris: {
            player: 8
        },
        musain: {
            player: 15
        }
    },
    bases: {
        hp: 27, pow: 11, skl: 14, spd: 13, luk: 8, def: 11, res: 3, con: 9
    },
    level: 10,
    growths: { hp: 75, pow: 45, skl: 60, spd: 55, luk: 40, def: 40, res: 15 },
    promotesTo: DoFClasses.Hussar,
    weapons: {
        [DoFWeaponType.Sword]: 71,
        [DoFWeaponType.Lance]: 31
    },
    affinity: DoFAffinities.Light
};
