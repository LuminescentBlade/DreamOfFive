import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFNationality } from "@dof/src/models/enums";

export const Bunny: IDoFCharacter = {
    name: 'bunny',
    artists: [DoFArtist.Lumi],
    nationality: DoFNationality.Unknown,
    class: 'Rabbit',
    level: 100,
    height: 20,
    routeConfig: {
        allRoute: {
            npc: 17.5
        }
    }
};