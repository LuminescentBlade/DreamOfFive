import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFAffinities, DoFArtist, DoFClasses, DoFNationality } from "@dof/src/models/enums";

export const Wyclif: IDoFCharacter = {
    name: 'wyclif',
    altNames: ['Earl Stour'],
    artists: [DoFArtist.Lumi, DoFArtist.Astra, DoFArtist.TBA],
    class: DoFClasses.Gladiator,
    nationality: DoFNationality.Aukema,
    routeConfig: {
        allRoute: {
            npc: [6, 17, 20],
            enemy: [23]
        }
    },
    alt: {
        armored: {
            artists: [DoFArtist.Lumi, DoFArtist.Astra, DoFArtist.TBA],
            chapter: 17
        }
    },
    conditional:{
        chapter:  {
            chapter: 17,
            swapPortrait: 'armored',
            ogPortraitName: 'Wyclif Court'
        }
    },
    epithet: 'Guard of Ways',
    height: 176,
    gateProfileDetailsChapter: 17,
    affinity: DoFAffinities.Light,
    bossStats: [
        {
            chapter: 23,
            level: 11,
            weapons: ['Rune Sword', 'Brave Sword'],
            stats: { hp: 51, pow: 22, skl: 21, spd: 16, luk: 17, def: 19, res: 9, con: 12 },
            ranks: { sword: 251, axe: 181 }
        },
    ],
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
            level: 8,
            weapons: ['Light Brand', 'Potion'],
            stats: { hp: 44, pow: 20, skl: 18, spd: 15, luk: 15, def: 18, res: 7, con: 12 },
            ranks: { sword: 251, axe: 181 }
        }
    ],
    blurb: `"... staunchest defender of the old ways, a resolute ally to the Crown. Yet there was something more..."`
};
