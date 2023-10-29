import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeapons } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Ironside: IDoFCharacter = {
    name: DoFCharKey.Ironside,
    altNames: ['Ironside', 'jin\'Estal'],
    artists: [DoFArtist.Lumi, DoFArtist.Sev],
    nationality: DoFNationality.Onduris,
    class: DoFClasses.Swordmaster,
    secret: true,
    height: 186,
    routeConfig: {
        allRoute: {
            npc: 99,
            player: 99
        }
    },
    bases: { hp: 52, pow: 21, skl: 26, spd: 27, luk: 10, def: 15, res: 13, con: 10 },
    growths: { hp: 255, pow: 140, skl: 235, spd: 210, luk: 225, def: 140, res: 130 },
    level: 19,
    weapons: {
        [DoFWeapons.Sword]: 251,
    }
};
