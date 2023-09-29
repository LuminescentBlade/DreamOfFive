import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Sheila: IDoFPlayable = {
    name: DoFCharKey.Sheila,
    artists: [DoFArtist.Amelia],
    class: DoFClasses.SeraphKnight,
    nationality: DoFNationality.Aukema,
    routeConfig:{
        allRoute: {
            player: 91,
            npc: 2
        }
    }
};
