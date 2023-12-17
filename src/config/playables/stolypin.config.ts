import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Stolypin: IDoFCharacter = {
    name: DoFCharKey.Stolypin,
    artists: [DoFArtist.Astra, DoFArtist.Sev, DoFArtist.Lumi],
    class: DoFClasses.Harrier,
    nationality: DoFNationality.Vishara,
    height: 173,
    routeConfig:{
        onduris: {
            player: 15
        }
    },
    affinity: DoFAffinities.Light
};
