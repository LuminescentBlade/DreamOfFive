import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Adalheid: IDoFCharacter = {
    name: DoFCharKey.Adalheid,
    profileName: 'Adalheid Farrell',
    artists: [DoFArtist.Lumi, DoFArtist.AK],
    class: DoFClasses.Paladin,
    epithet: 'Redeemer',
    nationality: DoFNationality.Aukema,
    height: 181,
    age: 23,
    routeConfig: {
        onduris: {
            player: 23,
            enemy: 21,
            npc: 7
        },
        musain: {
            npc: 15,
            player: 23,
            enemy: 21
        }

    },
    alt: {
        armored: {
            artists: [DoFArtist.Lumi, DoFArtist.AK],
            chapter: 16
        }
    },
    conditional: {
        chapter: [
            {
                chapter: 17,
                swapPortrait: 'armored',
                ogPortraitName: 'Adalheid Court'
            }
        ]
    },
    gateProfileDetailsChapter: 21,
    affinity: DoFAffinities.Fire,
    ranks: {
        [DoFWeaponType.Sword]: 251,
        [DoFWeaponType.Lance]: 251
    },
    stats: { hp: 48, pow: 20, skl: 20, spd: 24, luk: 16, def: 18, res: 7, con: 10 },
    growths: { hp: 70, pow: 35, skl: 35, spd: 50, luk: 40, def: 25, res: 15 },
    level: 10,
    bossStats: [
        {
            chapter: 21,
            weapons: ['Lightning Kris', 'Silver Lance']
        }
    ],
    blurb: `"... raised from an early age to be every git the Baron's equal, but never had that ice-cold surety of purpose..."`,
    mountName: 'Dauntless',
    supports: [DoFCharKey.Lyndra, DoFCharKey.Rena, DoFCharKey.Conleth]
};
