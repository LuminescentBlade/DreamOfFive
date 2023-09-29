import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const ViShen: IDoFPlayable = {
    name: DoFCharKey.viShen,
    displayName: 'vi\'Shen',
    blurb: '"...little place in the scrum of pitched battle. But in a duel, where individual skill came to the fore..."',
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Myrmidon,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            player: 12
        }
    },
    bases: { hp: 30, pow: 13, skl: 20, spd: 18, luk: 11, def: 7, res: 7, con: 8 },
    level: 15,
    growths: { hp: 75, pow: 45, skl: 65, spd: 65, luk: 40, def: 20, res: 15 },
    promotesTo: DoFClasses.Swordmaster
};
