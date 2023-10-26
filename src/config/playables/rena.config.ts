import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Rena: IDoFCharacter =  {
    name: DoFCharKey.Rena,
    displayName: 'Rena',
    artists: [DoFArtist.AK],
    alt: {
        angry: { artists: [DoFArtist.AK, DoFArtist.Amelia] },
        sad: { artists: [DoFArtist.AK, DoFArtist.Amelia] },
        promo: { artists: [DoFArtist.AK, DoFArtist.Lumi], chapter: 14.5, displayName: 'Promoted' },
        promo_angry: { artists: [DoFArtist.AK, DoFArtist.Lumi], chapter: 14.5, displayName: 'Pr. Angry' },
        promo_sad: { artists: [DoFArtist.AK, DoFArtist.Lumi], chapter: 14.5, displayName: 'Pr. Sad' },
    },
    blurb: '"Many Frontier Strider captains were well-heeled second sons in soft posts; but I strived to do my part..."',
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Captain,
    promotesTo: DoFClasses.Questant,
    routeConfig:{
        allRoute: {
            player: 0
        }
    },
    age: 21,
    epithet: 'Leveller',
    height: 165,
    level: 2,
    bases:{
        hp: 21,
        pow: 7,
        skl: 13,
        spd: 12, 
        luk: 9,
        def: 6,
        res: 3,
        con: 7
    },
    growths:{
        hp: 70,
        pow: 45,
        skl: 55,
        spd: 60, 
        luk: 50,
        def: 30,
        res: 20
    },
};
