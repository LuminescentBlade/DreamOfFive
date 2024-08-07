import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Amaryl: IDoFCharacter = {
    name: DoFCharKey.Amaryl,
    artists: [DoFArtist.Pi],
    blurb: '"... content for so long just to read fate. Evidently, at this stage, she felt that the dice of fate needed loading..."',
    class: DoFClasses.Sibyl,
    nationality: DoFNationality.Aukema,
    routeConfig: {
        allRoute: {
            player: 23,
            npc: 3
        }
    },
    level: 10,
    stats: { hp: 39, pow: 22, skl: 25, spd: 17, luk: 25, def: 11, res: 18, con: 9 },
    growths: { hp: 60, pow: 45, skl: 45, spd: 30, luk: 50, def: 15, res: 25 },
    ranks: { [DoFWeaponType.Light]: 251, [DoFWeaponType.Dark]: 251 },
    gateProfileDetailsChapter: 23,
    height: 163,
    epithet: 'Guide',
    affinity: DoFAffinities.Dark
};
