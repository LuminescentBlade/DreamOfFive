import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Artemisia: IDoFCharacter = {
    name: DoFCharKey.Artemisia,
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Valkyrie,
    nationality: DoFNationality.Aukema,
    height: 173,
    level: 7,
    stats: { hp: 34, pow: 18, skl: 21, spd: 15, luk: 15, def: 6, res: 16, con: 8 },
    growths: { hp: 60, pow: 40, skl: 55, spd: 35, luk: 40, def: 10, res: 50 },
    epithet: 'Scholar-Knight',
    routeConfig: {
        allRoute: {
            player: 19
        }
    },
    blurb: `"... among the foremost scholars of the realm. There was no match for her wit, at least with quill in hand..."`,
    ranks: {
        [DoFWeaponType.Light]: 181,
        [DoFWeaponType.Staff]: 181
    },
    bossStats: [
        {
            chapter: 19,
            talk: true,
            weapons: ['Frodafridh', 'Recovery Staff']
        }
    ]
};
