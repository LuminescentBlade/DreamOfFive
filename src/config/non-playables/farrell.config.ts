import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFAffinities, DoFArtist, DoFClasses, DoFNationality, DoFRoute } from "@dof/src/models/enums";

const stats = { hp: 52, pow: 21, skl: 27, spd: 22, luk: 18, def: 21, res: 14, con: 12 };
export const Farrell: IDoFCharacter = {
    name: 'farrell',
    profileName: 'Cuthbert Farrell',
    epithet: 'Bold Deceiver',
    artists: [DoFArtist.Sev, DoFArtist.Astra, DoFArtist.TBA, DoFArtist.Lumi],
    class: DoFClasses.FirstLance,
    nationality: DoFNationality.Aukema,
    age: 44,
    routeConfig: {
        onduris: {
            enemy: [8, 9, 10, 17, 22],
            npc: 4
        },
        musain: {
            enemy: [17, 22],
            npc: 4
        }
    },
    alt: {
        injured: {
            artists: [DoFArtist.Sev, DoFArtist.Astra, DoFArtist.TBA, DoFArtist.Lumi],
            chapter: 22
        }
    },
    blurb: `"... at last stood before the bold deceiver.
    Something had changed. I was no longer
    mere prey, but the beginning of his end..."`,
    affinity: DoFAffinities.Ice,
    bossStats: [
        {
            chapter: 22,
            level: 14,
            stats,
            ranks: { lance: 251 },
            weapons: ['Nithhad'] 
        },
        {
            chapter: 17,
            level: 14,
            stats,
            ranks: { lance: 251 },
            weapons: ['Nithhad'],
            optional: true,
        },
        { chapter: 10, gameOver: true, route: DoFRoute.Onduris, optional: true },
        { chapter: 9, gameOver: true, route: DoFRoute.Onduris, optional: true },
        { chapter: 8, gameOver: true, route: DoFRoute.Onduris, optional: true },
    ],
    height: 185,
    gateProfileDetailsChapter: 17
};