import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Odette: IDoFCharacter = {
    name: DoFCharKey.Odette,
    artists: [DoFArtist.Sev, DoFArtist.Lumi],
    class: DoFClasses.Marksman,
    nationality: DoFNationality.Aukema,
    height: 164,
    level: 4,
    stats: { hp: 35, pow: 19, skl: 25, spd: 19, luk: 22, def: 14, res: 8, con: 11 },
    growths: { hp: 55, pow: 40, skl: 55, spd: 40, luk: 55, def: 25, res: 25 },
    routeConfig: {
        allRoute: {
            player: 17
        }
    },
    ranks: { bow: 251 },
    blurb: `"... did not question her orders, only how she might carry them out, as quickly and efficiently as possible..."`,
    affinity: DoFAffinities.Ice
};
