import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const ViShen: IDoFPlayable = {
    name: 'vi-shen',
    displayName: 'vi\'Shen',
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Myrmidon,
    nationality: DoFNationality.Onduris,
    routeConfig:{
        onduris: {
            player: 12
        },
        musain: {
            enemy: 99
        }
    }
};
