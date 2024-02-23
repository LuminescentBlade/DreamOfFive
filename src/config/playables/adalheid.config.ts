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
    routeConfig: {
        onduris: {
            player: 23,
            enemy: 21,
            npc: 7
        },
        musain: {
            player: 90,
            enemy: 21
        }

    },
    gateProfileDetailsChapter: 21,
    affinity: DoFAffinities.Fire,
    ranks: {
        [DoFWeaponType.Sword]: 251,
        [DoFWeaponType.Lance]: 251
    },
    bossStats: [
        {
            chapter: 21,
            stats: { hp: 48, pow: 21, skl: 21, spd: 23, luk: 16, def: 18, res: 7, con: 10 },
            level: 10,
            weapons: ['Flametongue', 'Silver Lance']
        }
    ],
    blurb: `"... raised from an early age to be every git the Baron's equal, but never had that ice-cold surety of purpose..."`
};
