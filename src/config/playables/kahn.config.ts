import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Kahn: IDoFPlayable = {
    name: 'kahn',
    artists: [DoFArtist.Astra, DoFArtist.Amelia, DoFArtist.Lumi],
    class: DoFClasses.Soldier,
    nationality: DoFNationality.Onduris,
    routeConfig: {
        onduris: {
            player: 9
        }
    }
};
