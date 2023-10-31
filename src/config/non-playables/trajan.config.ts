import { IDoFCharacter } from "@/src/models/dream-of-five.interfaces";
import { DoFAffinities, DoFArtist, DoFClasses, DoFNationality } from "@/src/models/enums";

export const Trajan: IDoFCharacter = 
{
    name: 'trajan',
    artists: [DoFArtist.Astra],
    nationality: DoFNationality.Vishara,
    class: DoFClasses.Dreadnought,
    routeConfig: {
        allRoute: {
            enemy: 99
        }
    },
    affinity: DoFAffinities.Anima
};
