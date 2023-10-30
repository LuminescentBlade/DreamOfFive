import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Leda: IDoFCharacter = {
    name: DoFCharKey.Leda,
    artists: [DoFArtist.Astra, DoFArtist.Sev],
    blurb: '"She seemed almost ethereal, not quite at one with the world, but when she moved, I couldn\'t take my eyes off her..."',
    class: DoFClasses.Dancer,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            player: 10,
        }
    },
    height: 171,
    growths: {hp: 85, pow: 0, skl: 0, spd: 70, luk: 80, def: 10, res: 70},
    level: 1,
    bases: {hp: 27, pow: 1, skl: 7, spd: 12, luk: 12, def: 2, res: 6, con: 6},
    weapons: {},
    affinity: DoFAffinities.Anima
};
