import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "@/src/models/enums";
import { IDoFPlayable } from "@/src/models/interfaces";

export const Nikita: IDoFPlayable = {
    name: 'nikita',
    artists: [DoFArtist.Astra],
    blurb: '"... exemplar of the Ondurite woman. Too soft-skinned for manual labour, she had devoted herself entirely to battle..."',
    class: DoFClasses.Swordmaster,
    nationality: DoFNationality.Onduris,
    routeConfig:{
        onduris: {
            player: 10.5,
            enemy: 10
        }
    },
    growths: {hp: 50, pow: 30, skl: 70, spd: 65, luk: 45, def: 20, res: 10},
    level: 2,
    bases:  {hp: 29, pow: 15, skl: 18, spd: 22, luk: 17, def: 12, res: 7}
};
