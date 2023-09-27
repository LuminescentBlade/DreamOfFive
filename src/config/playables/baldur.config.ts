import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Baldur: IDoFPlayable = {
    name: 'baldur',
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Raider,
    nationality: DoFNationality.Onduris,
    routeConfig:{
        onduris: {
            player: 10
        }
    }
};
