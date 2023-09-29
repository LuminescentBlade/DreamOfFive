import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Claudiya: IDoFPlayable = {
    name: DoFCharKey.Claudiya,
    artists: [DoFArtist.Amelia],
    class: DoFClasses.Valkyrie,
    nationality: DoFNationality.Vishara,
    routeConfig:{
        allRoute: {
            player: 99
        }
    }
};
