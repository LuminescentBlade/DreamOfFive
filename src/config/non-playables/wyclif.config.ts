import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFAffinities, DoFArtist, DoFClasses, DoFNationality } from "@dof/src/models/enums";

export const Wyclif: IDoFCharacter = {
    name: 'wyclif',
    artists: [DoFArtist.Lumi, DoFArtist.Astra, DoFArtist.TBA],
    class: DoFClasses.Gladiator,
    nationality: DoFNationality.Aukema,
    routeConfig: {
        allRoute: {
            npc: [6, 17, 20]
        }
    },
    epithet: 'The Guard of Ways',
    height: 176,
    gateProfileDetailsChapter: 17,
    affinity: DoFAffinities.Light,
    npcStats: [
        {
            chapter: 20,
            level: 8,
            weapons: ['Light Brand', 'Elixir'],
            stats: { hp: 44, pow: 20, skl: 18, spd: 15, luk: 15, def: 18, res: 7, con: 12 },
            ranks: { sword: 251, axe: 181 }
        },
        {
            chapter: 17,
            weapons: ['Light Brand', 'Potion'],
            stats: { hp: 44, pow: 20, skl: 18, spd: 15, luk: 15, def: 18, res: 7, con: 12 },
            ranks: { sword: 251, axe: 181 }
        }
    ],
    blurb: `"... staunchest defender of the old ways, a resolute ally to the Crown. Yet there was something more..."`
};
