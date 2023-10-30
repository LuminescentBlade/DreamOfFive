import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Kai: IDoFCharacter = {
    name: DoFCharKey.Kai,
    artists: [DoFArtist.Sev],
    class: DoFClasses.DrakeKnight,
    nationality: DoFNationality.Vishara,
    routeConfig:{
        allRoute: {
            player: 99
        }
    },
    affinity: DoFAffinities.Ice
};
