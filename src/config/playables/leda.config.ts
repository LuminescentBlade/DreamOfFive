import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Leda: IDoFPlayable = {
    name: 'leda',
    artists: [DoFArtist.Astra, DoFArtist.Amelia],
    class: DoFClasses.Dancer,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            player: 10,
        }
    }
};
