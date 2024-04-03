import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFNationality } from "@dof/src/models/enums";

export const Agmund: IDoFCharacter = {
    name: 'agmund',
    displayName: 'Taiming',
    profileName: 'Long Taiming',
    altNames: ['Emperor of Svanhild', '龍泰銘', 'Agmund'],
    artists: [DoFArtist.Lumi],
    nationality: DoFNationality.Svanhild,
    height: 196,
    routeConfig: {
        allRoute: {
            npc: 17.5
        }
    }
};
