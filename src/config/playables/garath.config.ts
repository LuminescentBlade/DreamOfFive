import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Garath: IDoFPlayable = {
    name: DoFCharKey.Garath,
    artists: [DoFArtist.Astra],
    nationality: DoFNationality.Aukema,
    class: DoFClasses.Warrior,
    routeConfig: {
        allRoute: {
            player: 0
        }
    }
};
