import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Driscoll: IDoFPlayable = {
    name: 'driscoll',
    artists: [DoFArtist.Lumi],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Fighter,
    routeConfig: {
        allRoute: {
            player: 4,
            enemy: 4
        }
    }
};
