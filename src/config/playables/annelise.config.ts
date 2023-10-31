import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Annelise: IDoFCharacter = {
    name: DoFCharKey.Annelise,
    altNames: ['Long Tingbai', '龍庭白'],
    artists: [DoFArtist.Sev, DoFArtist.Astra, DoFArtist.Lumi],
    blurb: '"... carried herself with a dignity that suggested she was in some way above this all, yet she never shirked..."',
    class: DoFClasses.PegRider,
    nationality: DoFNationality.Svanhild,
    routeConfig: {
        musain: {
            player: 11
        },
        onduris: {
            player: 15
        }
    },
    height: 173,
    age: 20,
    epithet: 'The Seeker',
    bases: {
        hp: 27, pow: 14, skl: 12, spd: 18, luk: 9, def: 11, res: 11, con: 8
    },
    level: 14,
    growths: { hp: 50, pow: 45, skl: 40, spd: 60, luk: 40, def: 30, res: 45 },
    promotesTo: DoFClasses.SeraphKnight,
    weapons: {
        [DoFWeaponType.Sword]: 71,
    },
    affinity: DoFAffinities.Anima
};
