import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Bellona: IDoFCharacter = {
    name: DoFCharKey.Bellona,
    profileName: 'Bellona Quirinia',
    artists: [DoFArtist.Astra, DoFArtist.Sev],
    blurb: '"... considered herself without parallel. So she sought adventure in Onduris, and found, in us, all she could want..."',
    class: DoFClasses.DrakeRider,
    nationality: DoFNationality.Vishara,
    routeConfig: {
        onduris: {
            player: 9
        },
        musain: {
            player: 15
        }
    },
    age: 21,
    height: 165,
    stats: {
        hp: 31, pow: 15, skl: 10, spd: 13, luk: 14, def: 12, res: 0, con: 10
    },
    level: 12,
    growths: { hp: 80, pow: 65, skl: 40, spd: 45, luk: 50, def: 35, res: 5 },
    promotesTo: DoFClasses.DrakeKnight,
    ranks: {
        [DoFWeaponType.Lance]: 71,
    },
    affinity: DoFAffinities.Fire,
    mountName: 'Helga',
    epithet: 'Broken Lance'
};
