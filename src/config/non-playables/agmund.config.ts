import { IDoFCharacter } from "@/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFNationality } from "@/src/models/enums";

export const Agmund: IDoFCharacter = {
    name: 'agmund',
    altNames: ['Long Taiming', '龍泰銘'],
    artists: [DoFArtist.Lumi],
    nationality: DoFNationality.Svanhild,
    height: 196,
    routeConfig: {
        allRoute: {
            npc: 17.5
        }
    }
};
