import { IDoFCharacter } from "@/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFNationality } from "@/src/models/enums";

export const Wyclif : IDoFCharacter = {
    name: 'wyclif',
    artists: [DoFArtist.Lumi, DoFArtist.Astra, DoFArtist.TBA],
    class: '',
    nationality: DoFNationality.Aukema,
    routeConfig: {
        allRoute: {
            npc: 6
        }
    },
    height: 176,
    gateProfileDetailsChapter: 99
};
