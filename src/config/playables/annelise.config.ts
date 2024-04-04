import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

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
    epithet: 'Seeker',
    stats: {
        hp: 27, pow: 14, skl: 12, spd: 19, luk: 9, def: 9, res: 11, con: 8
    },
    level: 14,
    growths: { hp: 50, pow: 45, skl: 40, spd: 60, luk: 40, def: 35, res: 45 },
    promotesTo: DoFClasses.SeraphKnight,
    ranks: {
        [DoFWeaponType.Sword]: 71,
    },
    affinity: DoFAffinities.Anima,
    mountName: '雲鳳 Yunfeng'
};
