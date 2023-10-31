import { IDoFCharacter } from "@/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFNationality } from "@/src/models/enums";

export const Bunny: IDoFCharacter = {
    name: 'bunny',
    artists: [DoFArtist.Lumi],
    nationality: DoFNationality.Unknown,
    class: 'A Rabbit',
    height: 20,
    routeConfig: {
        allRoute: {
            npc: 17.5
        }
    }
};