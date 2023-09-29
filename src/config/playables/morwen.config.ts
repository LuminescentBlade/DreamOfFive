import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Morwen: IDoFPlayable = {
    name: DoFCharKey.Morwen,
    artists: [DoFArtist.Lumi, DoFArtist.Astra],
    blurb: '"... came to be known as \'the Baron\'s Bloodhound\', implacable once she had picked up the scent, unfailingly loyal..."',
    class: DoFClasses.Gladiator,
    nationality: DoFNationality.Aukema,
    routeConfig:{
        onduris: {
            enemy: [5,99],
        },
        musain: {
            enemy: [5,97],
            player: 98
        }
    }
};
