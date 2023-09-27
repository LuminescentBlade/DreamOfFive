import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Marie: IDoFPlayable = {
    name: 'marie',
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    class: DoFClasses.Thief,
    nationality: DoFNationality.Aukema,
    routeConfig: {
        musain: {
            player: 6.5
        }
    }
};
