import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Volund: IDoFCharacter = {
    name: DoFCharKey.Volund,
    altNames: ['Murong Yunxiao', '慕容雲嘯'],
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Sentinel,
    nationality: DoFNationality.Svanhild,
    height: 193,
    age: 23,
    routeConfig:{
        allRoute: {
            player: 99,
            npc: 17.5
        }
    }
};
