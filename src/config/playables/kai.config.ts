import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

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
    height: 184,
    affinity: DoFAffinities.Ice
};
