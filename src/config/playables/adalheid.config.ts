import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Adalheid: IDoFCharacter = {
    name: DoFCharKey.Adalheid,
    profileName: 'Adalheid Farrell',    
    artists: [DoFArtist.Lumi, DoFArtist.AK],
    class: DoFClasses.Paladin,
    nationality: DoFNationality.Aukema,
    height: 181,
    routeConfig: {
        onduris: {
            player: 90,
            enemy: 80,
            npc: 7
        },
        musain: {
            player: 90,
            enemy: 80
        }

    },
    gateProfileDetailsChapter: 90,
    affinity: DoFAffinities.Fire
};
