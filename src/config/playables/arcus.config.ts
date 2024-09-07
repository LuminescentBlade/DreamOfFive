import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

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
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
        },
        promo: {
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            chapter: 14.5,
            displayName: 'Promoted'
        },
        noarmor:{
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            chapter: 14.5,
            displayName: 'Unarmored'
        }
    },
    height: 185,
    stats: {
        hp: 32, pow: 15, skl: 10, spd: 9, luk: 7, def: 14, res: 3, con: 13
    },
    level: 10,
    age: 19,
    promotesTo: DoFClasses.Juggernaut,
    growths: { hp: 80, pow: 65, skl: 45, spd: 35, luk: 35, def: 55, res: 25 },
    ranks: {
        [DoFWeaponType.Axe]: 71,
    },
    affinity: DoFAffinities.Dark
};
