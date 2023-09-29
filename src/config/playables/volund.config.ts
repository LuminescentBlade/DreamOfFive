import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Volund: IDoFPlayable = {
    name: DoFCharKey.Volund,
    altNames: ['Murong Yunxiao', '慕容雲嘯'],
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Sentinel,
    nationality: DoFNationality.Svanhild,
    routeConfig:{
        allRoute: {
            player: 99,
            npc: 17.5
        }
    }
};
