import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Arcus: IDoFPlayable = {
    name: 'arcus',
    artists: [DoFArtist.Astra],
    class: DoFClasses.Ironclad,
    nationality: DoFNationality.Vishara,
    routeConfig:{
        musain: {
            player: 6.5
        },
        onduris: {
            player: 15
        }
    }
};
