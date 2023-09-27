import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Seren: IDoFPlayable = {
    name: 'seren',
    artists: [DoFArtist.Amelia, DoFArtist.Astra],
    class: DoFClasses.Soldier,
    nationality: DoFNationality.Musain,
    routeConfig: {
        musain: {
            player: 8
        }
    }
};
