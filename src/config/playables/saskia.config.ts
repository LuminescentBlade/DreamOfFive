import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Saskia: IDoFCharacter = {
    name: DoFCharKey.Saskia,
    profileName: 'Saskia of Lerwick',
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    class: DoFClasses.Rogue,
    level: 3,
    nationality: DoFNationality.Aukema,
    height: 158,
    stats: { hp: 34, pow: 15, skl: 16, spd: 26, luk: 16, def: 14, res: 4, con: 7 },
    growths: { hp: 65, pow: 35, skl: 40, spd: 65, luk: 50, def: 35, res: 10 },
    ranks: { sword: 181 },
    routeConfig: {
        allRoute: {
            player: 16
        }
    },
    epithet: 'Knave of Diamonds',
    affinity: DoFAffinities.Wind,
    blurb: `"Sharp, laconic, professional. A woman after my own heart. Little more to say..."`,
    supports: [DoFCharKey.Lyndra, DoFCharKey.Sheila]
};
