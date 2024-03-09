import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Rena: IDoFCharacter = {
    name: DoFCharKey.Rena,
    displayName: 'Rena',
    artists: [DoFArtist.AK],
    alt: {
        angry: { artists: [DoFArtist.AK, DoFArtist.Sev] },
        sad: { artists: [DoFArtist.AK, DoFArtist.Sev] },
        noarmor: { artists: [DoFArtist.AK, DoFArtist.Lumi], chapter: 8, displayName: 'Unarmored' },
        noarmor_angry: { artists: [DoFArtist.AK, DoFArtist.Sev, DoFArtist.Lumi], chapter: 8, displayName: 'Unarm. Angry' },
        promo: { artists: [DoFArtist.AK, DoFArtist.Lumi], chapter: 14.5, displayName: 'Promoted' },
        promo_angry: { artists: [DoFArtist.AK, DoFArtist.Sev, DoFArtist.Lumi], chapter: 14.5, displayName: 'Pr. Angry' },
        promo_sad: { artists: [DoFArtist.AK, DoFArtist.Sev, DoFArtist.Lumi], chapter: 14.5, displayName: 'Pr. Sad' },
        promo_noarmor: { artists: [DoFArtist.AK, DoFArtist.Lumi], chapter: 14.5, displayName: 'Fancy' },
        promo_noarmor_angry: { artists: [DoFArtist.AK, DoFArtist.Sev, DoFArtist.Lumi], chapter: 14.5, displayName: 'Fancy Angry' },
        promo_noarmor_sad: { artists: [DoFArtist.AK, DoFArtist.Sev, DoFArtist.Lumi], chapter: 14.5, displayName: 'Fancy Sad' },
    },
    blurb: '"Many Frontier Strider captains were well-heeled second sons in soft posts; but I strived to do my part..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Captain,
    promotesTo: DoFClasses.Questant,
    routeConfig: {
        allRoute: {
            player: 0
        }
    },
    conditional: {
        chapter: {
            chapter: 15,
            age: 22,
        }
    },
    age: 21,
    epithet: 'Leveller',
    height: 165,
    level: 2,
    stats: {
        hp: 21,
        pow: 7,
        skl: 13,
        spd: 12,
        luk: 9,
        def: 6,
        res: 3,
        con: 8
    },
    growths: {
        hp: 70,
        pow: 40,
        skl: 55,
        spd: 65,
        luk: 50,
        def: 30,
        res: 20
    },
    ranks: {
        [DoFWeaponType.Sword]: 31,
    },
    affinity: DoFAffinities.Anima
};
