import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Conleth: IDoFCharacter = {
    name: DoFCharKey.Conleth,
    artists: [DoFArtist.Lumi],
    blurb: '"... had thought all deserters to be vicious, desperate brutes. But he never once seemed to regret his decision..."',
    class: DoFClasses.Skirmisher,
    nationality: DoFNationality.Aukema,
    height: 166,
    routeConfig: {
        onduris: {
            player: 8
        },
        musain: {
            player: 15
            // ranks: 96
        }
    },
    stats: {
        hp: 25, pow: 10, skl: 12, spd: 15, luk: 11, def: 6, res: 3, con: 8
    },
    level: 8,
    promotesTo: DoFClasses.Outrider,
    growths: { hp: 65, pow: 45, skl: 50, spd: 60, luk: 60, def: 25, res: 20 },
    ranks: {
        [DoFWeaponType.Bow]: 71,
    },
    affinity: DoFAffinities.Fire,
    mountName: 'Surefoot',
    epithet: 'Discerning Eye'
};
