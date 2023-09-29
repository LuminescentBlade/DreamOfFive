import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Rena: IDoFPlayable =  {
    name: DoFCharKey.Rena,
    displayName: 'Rena',
    artists: [DoFArtist.AK],
    alt: {
        angry: { artists: [DoFArtist.AK, DoFArtist.Amelia] },
        sad: { artists: [DoFArtist.AK, DoFArtist.Amelia] },
        promo: { artists: [DoFArtist.AK, DoFArtist.Lumi], chapter: 15, displayName: 'Promoted' },
        promo_angry: { artists: [DoFArtist.AK, DoFArtist.Lumi], chapter: 15, displayName: 'Pr. Angry' },
        promo_sad: { artists: [DoFArtist.AK, DoFArtist.Lumi], chapter: 15, displayName: 'Pr. Sad' },
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
    level: 2,
    bases:{
        hp: 21,
        pow: 6,
        skl: 11,
        spd: 12, 
        luk: 8,
        def: 5,
        res: 3,
        con: 7
    },
    growths:{
        hp: 70,
        pow: 40,
        skl: 40,
        spd: 60, 
        luk: 50,
        def: 30,
        res: 20
    },
};
