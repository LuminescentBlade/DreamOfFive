import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Hereward: IDoFCharacter = {
    name: DoFCharKey.Hereward,
    profileName: 'Hereward',
    altNames: ['Earl Griffid'],
    epithet: 'Stout-heart',
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Cataphract,
    height: 188,
    nationality: DoFNationality.Aukema,
    level: 8,
    stats: { hp: 44, pow: 21, skl: 19, spd: 14, luk: 9, def: 22, res: 6, con: 15 },
    growths: { hp: 75, pow: 50, skl: 30, spd: 30, luk: 25, def: 60, res: 15 },
    ranks: { sword: 181, axe: 181 },
    alt: {
        injured: {
            artists: [DoFArtist.Lumi], chapter: 16
        }
    },
    routeConfig: {
        allRoute: {
            player: 16,
            npc: 6
        }
    },
    gateProfileDetailsChapter: 16,
    affinity: DoFAffinities.Anima,
    blurb: `"... had no desire to involve himself in petty factional squabbles. Yet the bloodshed respected no abstention..."`
};
