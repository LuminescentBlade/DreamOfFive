import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Arcus: IDoFCharacter = {
    name: DoFCharKey.Arcus,
    profileName: 'Arcus Scipion',
    artists: [DoFArtist.Astra],
    blurb: '"... a stiff, unbending martial man, but he was intelligent enough to realise how the world truly worked..."',
    class: DoFClasses.Ironclad,
    nationality: DoFNationality.Vishara,
    epithet: 'Resolute Heart',
    routeConfig: {
        musain: {
            player: 6.5
        },
        onduris: {
            player: 15
        }
    },
    alt: {
        injured: {
            artists: [DoFArtist.Astra],
        },
        promo: {
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            chapter: 14.5,
            displayName: 'Promoted'
        }
    },
    height: 185,
    bases: {
        hp: 32, pow: 14, skl: 10, spd: 9, luk: 7, def: 12, res: 3, con: 13
    },
    level: 10,
    promotesTo: DoFClasses.Juggernaut,
    growths: { hp: 80, pow: 65, skl: 45, spd: 35, luk: 35, def: 45, res: 25 }
};
