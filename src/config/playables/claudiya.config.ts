import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Claudiya: IDoFCharacter = {
    name: DoFCharKey.Claudiya,
    artists: [DoFArtist.Sev],
    class: DoFClasses.Valkyrie,
    nationality: DoFNationality.Vishara,
    height: 167,
    routeConfig:{
        allRoute: {
            player: 99
        }
    },
    affinity: DoFAffinities.Fire
};
