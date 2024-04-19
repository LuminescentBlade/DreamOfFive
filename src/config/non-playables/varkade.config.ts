import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFNationality } from "@dof/src/models/enums";

export const Varkade : IDoFCharacter = {
    name: 'varkade',
    profileName: 'Varkade Hengeist',
    artists: [DoFArtist.Astra, DoFArtist.Sev],
    blurb: '"He thought he made me. In a sense, he was right. But I had to unmake him."',
    class: '',
    nationality: DoFNationality.Aukema,
    alt: {
        younger: { artists: [DoFArtist.Astra, DoFArtist.Sev, DoFArtist.Lumi] }
    },
    routeConfig: {
        allRoute: {
            npc: 0,
            enemy: 27.5
        }
    },
    height: 172,
    gateProfileDetailsChapter: 23,
};
