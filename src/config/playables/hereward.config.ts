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
    level: 10,
    stats: { hp: 50, pow: 21, skl: 20, spd: 15, luk: 9, def: 23, res: 6, con: 15 },
    growths: { hp: 75, pow: 40, skl: 30, spd: 25, luk: 25, def: 55, res: 15 },
    ranks: { sword: 216, axe: 216 },
    alt: {
        injured: {
            artists: [DoFArtist.Lumi], chapter: 16
        },
        armored: {
            artists: [DoFArtist.Lumi], chapter: 16
        }
    },
    conditional: {
        chapter: [
            {
                chapter: 16,
                swapPortrait: 'armored',
                ogPortraitName: 'Hereward Court'
            }
        ]
    },
    routeConfig: {
        onduris: {
            player: 16,
            npc: 7
        },
        musain: {
            player: 16
        }
    },
    gateProfileDetailsChapter: 16,
    affinity: DoFAffinities.Anima,
    blurb: `"... had no desire to involve himself in petty factional squabbles. Yet the bloodshed respected no abstention..."`,
    mountName: 'Drum',
    supports: [DoFCharKey.Jauger, DoFCharKey.Odette, DoFCharKey.Artemisia, DoFCharKey.byorDal]
};
