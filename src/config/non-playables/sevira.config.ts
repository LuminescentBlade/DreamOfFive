import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFNationality } from "@dof/src/models/enums";

export const Sevira: IDoFCharacter = {
    name: 'sevira',
    artists: [DoFArtist.Sev],
    class: '',
    conditional:{
        chapter: {
            chapter: 19,
            epithet: 'Mourning Dove'
        }
    },
    nationality: DoFNationality.Aukema,
    routeConfig: {
        allRoute: {
            npc: 6
        }
    },
    height: 160,
};