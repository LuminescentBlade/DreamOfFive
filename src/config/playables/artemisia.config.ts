import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Artemisia: IDoFCharacter = {
    name: DoFCharKey.Artemisia,
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Sibyl,
    nationality: DoFNationality.Aukema,
    height: 173,
    routeConfig:{
        allRoute: {
            player: 17
        }
    }
};
