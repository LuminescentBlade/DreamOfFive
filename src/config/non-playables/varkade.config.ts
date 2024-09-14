import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";
import { DoFAffinities, DoFArtist, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { DoFWeapon } from "../weapons.config";

export const Varkade: IDoFCharacter = {
    name: 'varkade',
    profileName: 'Varkade Hengeist',
    artists: [DoFArtist.Astra],
    blurb: '"He thought he made me. In a sense, he was right. But I had to unmake him."',
    class: '',
    affinity: DoFAffinities.Dark,
    nationality: DoFNationality.Aukema,
    alt: {
        younger: { artists: [DoFArtist.Astra] }
    },
    routeConfig: {
        allRoute: {
            npc: 0,
            enemy: 27.5
        }
    },
    height: 172,
    gateProfileDetailsChapter: 27.5,
    bossStats: [
        {
            chapter: 27.5,
            class: 'Tactician',
            level: 9,
            stats: { hp: 23, pow: 11, skl: 14, spd: 4, luk: 7, def: 2, res: 15, con: 8 },
            ranks: { [DoFWeaponType.Anima]: 121 },
            weapons: [DoFWeapon.Thunder]
        }
    ]
};
