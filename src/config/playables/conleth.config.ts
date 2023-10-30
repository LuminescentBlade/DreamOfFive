import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeapons } from "@/src/models/enums";
import { IDoFCharacter } from "@/src/models/interfaces";

export const Conleth: IDoFCharacter = {
    name: DoFCharKey.Conleth,
    artists: [DoFArtist.Lumi],
    blurb: '"... had thought all deserters to be vicious, desperate brutes. But he never once seemed to regret his decision..."',
    class: DoFClasses.Skirmisher,
    nationality: DoFNationality.Aukema,
    height: 166,
    routeConfig:{
        onduris: {
            player: 8
        },
        musain: {
            player: 15
        }
    },
    bases: {
        hp: 25, pow: 10, skl: 12, spd: 15, luk: 9, def: 6, res: 2, con: 8
    },
    level: 8,
    promotesTo: DoFClasses.Outrider,
    growths: {hp: 65, pow: 40, skl: 50, spd: 60, luk: 60, def: 25, res: 10},
    weapons: {
        [DoFWeapons.Bow]: 71,
    },
    affinity: DoFAffinities.Fire
};
