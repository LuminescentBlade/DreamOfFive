import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Sheila: IDoFCharacter = {
    name: DoFCharKey.Sheila,
    artists: [DoFArtist.Sev],
    class: DoFClasses.SeraphKnight,
    nationality: DoFNationality.Aukema,
    height: 169,
    routeConfig: {
        allRoute: {
            player: 20,
            npc: [2, 19]
        }
    },
    level: 8,
    alt: {
        injured: { artists: [DoFArtist.Sev, DoFArtist.Lumi], chapter: 19 }
    },
    stats: { hp: 38, pow: 19, skl: 26, spd: 24, luk: 12, def: 14, res: 17, con: 8 },
    growths: { hp: 85, pow: 30, skl: 45, spd: 40, luk: 25, def: 30, res: 25 },
    gateProfileDetailsChapter: 20,
    affinity: DoFAffinities.Fire,
    blurb: `"She had lived up to her reputation [...] the most honoured of knights. She'd have died for me, if only because..."`,
    ranks: {
        [DoFWeaponType.Sword]:181,
        [DoFWeaponType.Lance]: 251
    }
};
