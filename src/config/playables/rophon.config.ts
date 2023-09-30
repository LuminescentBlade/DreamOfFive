import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Ironside: IDoFCharacter = {
    name: DoFCharKey.Ironside,
    altNames: ['Ironside'],
    artists: [DoFArtist.Lumi, DoFArtist.Amelia],
    nationality: DoFNationality.Onduris,
    class: DoFClasses.Swordmaster,
    secret: true,
    height: 186,
    routeConfig:{
        allRoute: {
            npc: 99,
            player: 99
        }
    }
};
