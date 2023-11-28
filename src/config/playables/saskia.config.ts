import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Saskia: IDoFCharacter = {
    name: DoFCharKey.Saskia,
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    class: DoFClasses.Rogue,
    level: 3,
    nationality: DoFNationality.Aukema,
    height: 158,
    stats: { hp: 34, pow: 13, skl: 16, spd: 24, luk: 16, def: 14, res: 4, con: 7},
    growths: {hp: 60, pow: 40, skl: 40, spd: 65, luk: 50, def: 30, res: 10 },
    ranks: { sword: 121 },
    routeConfig: {
        allRoute: {
            player: 16
        }
    },
    epithet: 'Lightfinger',
    affinity: DoFAffinities.Wind,
    blurb: `"Sharp, laconic, professional. A woman after my own heart. Little more to say..."`
};
