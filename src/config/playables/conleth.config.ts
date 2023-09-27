import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Conleth: IDoFPlayable = {
    name: 'conleth',
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Skirmisher,
    nationality: DoFNationality.Aukema,
    routeConfig:{
        onduris: {
            player: 8
        },
        musain: {
            player: 15
        }
    }
};
