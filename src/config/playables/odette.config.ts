import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Odette: IDoFCharacter = {
    name: DoFCharKey.Odette,
    artists: [DoFArtist.Sev, DoFArtist.Lumi],
    class: DoFClasses.Marksman,
    nationality: DoFNationality.Aukema,
    height: 164,
    routeConfig:{
        allRoute: {
            player: 17
        }
    },
    affinity: DoFAffinities.Ice
};
