import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Morwen: IDoFCharacter = {
    name: DoFCharKey.Morwen,
    artists: [DoFArtist.Lumi, DoFArtist.Astra],
    blurb: '"... came to be known as \'the Baron\'s Bloodhound\', implacable once she had picked up the scent, unfailingly loyal..."',
    class: DoFClasses.Gladiator,
    nationality: DoFNationality.Aukema,
    height: 182,
    routeConfig:{
        onduris: {
            enemy: [5,6,99],
        },
        musain: {
            enemy: [5,6,97],
            player: 98
        }
    }
};
