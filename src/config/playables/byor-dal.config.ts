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
    },
    bases: {hp: 38, pow: 18, skl: 15, spd: 15, luk: 6, def: 17, res: 8},
    level: 3, 
    growths: {hp: 90, pow: 45, skl: 55, spd: 35, luk: 15, def: 30, res: 25}
};
