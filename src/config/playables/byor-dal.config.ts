import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const ByorDal: IDoFPlayable = {
    name: 'byor-dal',
    displayName: 'byor\'Dal',
    artists: [DoFArtist.Lumi, DoFArtist.Astra],
    class: DoFClasses.Gladiator,
    nationality: DoFNationality.Onduris,
    routeConfig:{
        onduris: {
            player: 11,
            enemy: 10.5
        }
    }
};
