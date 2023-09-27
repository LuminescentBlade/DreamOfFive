import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Alexis: IDoFPlayable = {
    name: 'alexis',
    artists: [DoFArtist.Astra],
    nationality: DoFNationality.Musain, // dresses like an ondurite because he's going there
    class: DoFClasses.Thief,
    routeConfig:{
        onduris: {
            player: 7
        }
    }
};
