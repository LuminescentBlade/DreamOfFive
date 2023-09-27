import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Artemisia: IDoFPlayable = {
    name: 'artemisia',
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Sibyl,
    nationality: DoFNationality.Aukema,
    routeConfig:{
        allRoute: {
            player: 17
        }
    }
};
