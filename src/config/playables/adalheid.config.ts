import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Adalheid: IDoFPlayable = {
    name: DoFCharKey.Adalheid,
    profileName: 'Adalheid Farrell',    
    artists: [DoFArtist.Lumi, DoFArtist.AK],
    class: DoFClasses.Paladin,
    nationality: DoFNationality.Aukema,
    routeConfig: {
        allRoute: {
            player: 90,
            enemy: 80,
            npc: 6
        }
    }
};
