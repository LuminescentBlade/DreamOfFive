import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Sheila: IDoFCharacter = {
    name: DoFCharKey.Sheila,
    artists: [DoFArtist.Sev],
    class: DoFClasses.SeraphKnight,
    nationality: DoFNationality.Aukema,
    height: 169,
    routeConfig: {
        allRoute: {
            player: 91,
            npc: 2
        }
    },
    gateProfileDetailsChapter: 91,
    affinity: DoFAffinities.Fire
};
