import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFAffinities, DoFArtist, DoFClasses, DoFNationality, DoFRoute } from "@dof/src/models/enums";

export const Farrell: IDoFCharacter = {
    name: 'farrell',
    profileName: 'Cuthbert Farrell',
    epithet: 'The Pursuer',
    artists: [DoFArtist.Sev, DoFArtist.Astra, DoFArtist.TBA],
    class: DoFClasses.FirstLance,
    nationality: DoFNationality.Aukema,
    routeConfig: {
        onduris: {
            enemy: [8, 9, 10, 99],
            npc: 4
        },
        musain: {
            enemy: 99,
            npc: 4
        }
    },
    affinity: DoFAffinities.Ice,
    bossStats: [
        { chapter: 10, gameOver: true, route: DoFRoute.Onduris, optional: true },
        { chapter: 9, gameOver: true, route: DoFRoute.Onduris, optional: true },
        { chapter: 8, gameOver: true, route: DoFRoute.Onduris, optional: true },

    ],
    height: 185,
    gateProfileDetailsChapter: 6.5
};