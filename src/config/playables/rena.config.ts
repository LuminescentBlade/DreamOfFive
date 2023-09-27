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
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Captain,
    promotesTo: DoFClasses.Questant,
    routeConfig:{
        allRoute: {
            player: 0
        }
    }
};
