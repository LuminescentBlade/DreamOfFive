import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Sheila: IDoFCharacter = {
    name: DoFCharKey.Sheila,
    artists: [DoFArtist.Amelia],
    class: DoFClasses.SeraphKnight,
    nationality: DoFNationality.Aukema,
    height: 169,
    routeConfig:{
        allRoute: {
            player: 91,
            npc: 2
        }
    }
};
