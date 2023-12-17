import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFNationality } from "@dof/src/models/enums";

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
