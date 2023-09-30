import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Seren: IDoFCharacter = {
    name: DoFCharKey.Seren,
    artists: [DoFArtist.Amelia, DoFArtist.Astra],
    blurb: '"... patriotic belief gradually eroded by the grinding reality of simply living in Musain, under the noble heel..."',
    class: DoFClasses.Soldier,
    nationality: DoFNationality.Musain,
    height: 157,
    routeConfig: {
        musain: {
            player: 8
        }
    },
    bases: {
        hp: 28, pow: 10, skl: 13, spd: 14, luk: 8, def: 11, res: 5, con: 9
    },
    level: 9,
    promotesTo: DoFClasses.Sentinel,
    growths: { hp: 60, pow: 35, skl: 65, spd: 60, luk: 60, def: 25, res: 20 }
};
