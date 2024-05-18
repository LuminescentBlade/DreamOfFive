import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Claudiya: IDoFCharacter = {
    name: DoFCharKey.Claudiya,
    profileName: 'Claudiya Seleuca',
    artists: [DoFArtist.Sev],
    class: DoFClasses.Sage,
    nationality: DoFNationality.Vishara,
    height: 167,
    routeConfig: {
        allRoute: {
            npc: 23.5,
            player: 24
        }
    },
    epithet: 'Velvet Glove',
    level: 12,
    ranks: { [DoFWeaponType.Anima]: 251, [DoFWeaponType.Staff]: 251 },
    blurb: `"... very vision of grace, and that role she played to perfection. But, like me, she only wore the mask that suited..."`,
    stats: { hp: 38, pow: 26, skl: 18, spd: 15, luk: 24, def: 5, res: 27, con: 8 },
    growths: { hp: 35, pow: 40, skl: 50, spd: 20, luk: 50, def: 5, res: 40 },
    affinity: DoFAffinities.Fire
};
