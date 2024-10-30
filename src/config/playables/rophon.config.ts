import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Ironside: IDoFCharacter = {
    name: DoFCharKey.Ironside,
    altNames: ['Ironside', 'jin\'Estal'],
    artists: [DoFArtist.Lumi, DoFArtist.Sev],
    nationality: DoFNationality.Onduris,
    class: DoFClasses.Swordmaster,
    secret: true,
    height: 186,
    routeConfig: {
        allRoute: {
            player: 25
        }
    },
    stats: { hp: 57, pow: 21, skl: 26, spd: 27, luk: 12, def: 15, res: 13, con: 10 },
    growths: { hp: 245, pow: 175, skl: 220, spd: 220, luk: 1, def: 125, res: 125 },
    level: 19,
    ranks: {
        [DoFWeaponType.Sword]: 251,
    },
    affinity: DoFAffinities.Anima,
    isIronside: true,
    blurb: `"... ... ..."`
};
