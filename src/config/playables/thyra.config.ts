import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Thyra: IDoFPlayable = {
    name: 'thyra',
    altNames: ['Long Tingyu','龍庭玉'],
    artists: [DoFArtist.Lumi],
    class: DoFClasses.Enforcer,
    nationality: DoFNationality.Svanhild,
    routeConfig: {
        allRoute: {
            player: 17
        }
    },
    growths: { hp: 75, pow: 55, skl: 50, spd: 45, luk: 25, def: 35, res: 5 }
};
