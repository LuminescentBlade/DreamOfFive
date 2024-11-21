import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Kai: IDoFCharacter = {
    name: DoFCharKey.Kai,
    profileName: 'Kaias Etruscion',
    artists: [DoFArtist.Sev],
    class: DoFClasses.DrakeKnight,
    nationality: DoFNationality.Vishara,
    routeConfig: {
        allRoute: {
            npc: 23.5,
            player: 24
        }
    },
    epithet: 'Iron Fist',
    blurb: `"... war-legend in his name. The bard sang of a spear-arm that never tired, courage that never wavered..."`,
    level: 12,
    stats: { hp: 53, pow: 27, skl: 23, spd: 19, luk: 15, def: 24, res: 1, con: 12 },
    growths: { hp: 70, pow: 50, skl: 30, spd: 25, luk: 20, def: 35, res: 5 },
    ranks: { [DoFWeaponType.Lance]: 251, [DoFWeaponType.Axe]: 251 },
    height: 184,
    affinity: DoFAffinities.Ice,
    supports: [DoFCharKey.Meliza]
};
