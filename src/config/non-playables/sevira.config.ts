import { IDoFCharacter } from "@/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFNationality } from "@/src/models/enums";

export const Sevira: IDoFCharacter = {
    name: 'sevira',
    artists: [DoFArtist.Sev],
    class: '',
    nationality: DoFNationality.Aukema,
    routeConfig: {
        allRoute: {
            npc: 6
        }
    },
    height: 160,
};