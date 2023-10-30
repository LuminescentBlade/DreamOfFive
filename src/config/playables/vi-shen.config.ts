import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const ViShen: IDoFCharacter = {
    name: DoFCharKey.viShen,
    displayName: 'vi\'Shen',
    blurb: '"...thinking of nothing more than fealty to his lord. And it went beyond duty; I think it was love, of a sort..."',
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Myrmidon,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            player: 12
        }
    },
    height: 172,
    bases: { hp: 32, pow: 14, skl: 20, spd: 18, luk: 11, def: 8, res: 8, con: 8 },
    level: 16,
    growths: { hp: 75, pow: 45, skl: 65, spd: 65, luk: 40, def: 20, res: 15 },
    promotesTo: DoFClasses.Swordmaster,
    epithet: 'The Seneschal',
    weapons: {
        [DoFWeaponType.Sword]: 121 
    },
    affinity: DoFAffinities.Dark
};
