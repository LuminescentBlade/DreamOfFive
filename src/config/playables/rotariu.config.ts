import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Rotariu: IDoFCharacter = {
    name: DoFCharKey.Rotariu,
    artists: [DoFArtist.Sev, DoFArtist.Astra],
    class: DoFClasses.Outrider,
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
