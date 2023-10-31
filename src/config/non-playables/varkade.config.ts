import { IDoFCharacter } from "@/src/models/dream-of-five.interfaces";
import { DoFArtist, DoFNationality } from "@/src/models/enums";

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
            enemy: 99
        }
    },
    height: 172,
    gateProfileDetailsChapter: 99,
};
