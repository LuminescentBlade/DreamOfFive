import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Thyra: IDoFPlayable = {
    name: 'thyra',
    fullName: 'long tingyu', // 龍庭玉
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Enforcer,
    nationality: DoFNationality.Svanhild,
    routeConfig:{
        allRoute: {
            player: 17
        }
    }
};
