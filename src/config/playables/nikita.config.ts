import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Nikita: IDoFPlayable = {
    name: 'nikita',
    artists: [DoFArtist.Astra],
    class: DoFClasses.Swordmaster,
    nationality: DoFNationality.Onduris,
    routeConfig:{
        onduris: {
            player: 10.5,
            enemy: 10
        }
    }
};
