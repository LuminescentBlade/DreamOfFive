import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
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
            npc: 99,
            player: 99
        }
    },
    stats: { hp: 52, pow: 24, skl: 26, spd: 27, luk: 12, def: 23, res: 13, con: 10 },
    growths: { hp: 255, pow: 175, skl: 220, spd: 220, luk: 1, def: 125, res: 115 },
    level: 19,
    ranks: {
        [DoFWeaponType.Sword]: 251,
    }
};
