import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Saskia: IDoFCharacter = {
    name: DoFCharKey.Saskia,
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    class: DoFClasses.Rogue,
    nationality: DoFNationality.Aukema,
    height: 158,
    routeConfig:{
        allRoute: {
            player: 16
        }   
    },
    affinity: DoFAffinities.Wind
};
