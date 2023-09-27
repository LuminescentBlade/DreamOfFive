import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Vincent: IDoFPlayable = {
    name: 'vincent',
    artists: [DoFArtist.Amelia, DoFArtist.Astra],
    class: '',
    nationality: DoFNationality.Vishara,
    routeConfig:{
        onduris: {
            player: 98
        },
        musain: {
            enemy: 99
        }
    }
};
