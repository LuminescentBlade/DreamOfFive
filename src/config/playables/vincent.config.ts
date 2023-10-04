import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Vincent: IDoFCharacter = {
    name: DoFCharKey.Vincent,
    artists: [DoFArtist.Amelia, DoFArtist.Astra],
    class: '', // tentatively DoFClasses.Outrider,
    nationality: DoFNationality.Vishara,
    height: 177,
    routeConfig:{
        onduris: {
            player: 98
        },
        musain: {
            enemy: 99
        }
    }
};
