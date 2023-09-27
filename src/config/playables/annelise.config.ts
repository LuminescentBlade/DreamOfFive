import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Annelise: IDoFPlayable = {
    name: 'annelise',
    fullName: 'Annelise',
    artists: [DoFArtist.Amelia, DoFArtist.Astra, DoFArtist.Lumi],
    class: DoFClasses.PegRider,
    nationality: DoFNationality.Svanhild,
    routeConfig:{
        musain: {
            player: 11
        },
        onduris: {
            player: 15
        }
    }
};
