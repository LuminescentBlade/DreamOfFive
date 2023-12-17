import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Thyra: IDoFCharacter = {
    name: DoFCharKey.Thyra,
    altNames: ['Long Tingyu','龍庭玉'],
    artists: [DoFArtist.Lumi, DoFArtist.AK],
    class: DoFClasses.Enforcer,
    nationality: DoFNationality.Svanhild,
    height: 190,
    age: 23,
    routeConfig: {
        allRoute: {
            player: 17
        }
    },
    growths: { hp: 75, pow: 55, skl: 50, spd: 45, luk: 25, def: 35, res: 5 },
    affinity: DoFAffinities.Thunder
};
