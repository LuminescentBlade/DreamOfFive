import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Corbeau: IDoFPlayable = {
    name: 'corbeau',
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Warrior,
    nationality: DoFNationality.Musain,
    routeConfig:{
        musain: {
            npc: 8,
            player: 13
        }
    }
};
