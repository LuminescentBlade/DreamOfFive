import { DoFAffinities, DoFArtist, DoFCharKey, DoFClasses, DoFNationality, DoFWeaponType } from "@dof/src/models/enums";
import { IDoFCharacter } from "@dof/src/models/interfaces";

export const Lizaveta: IDoFCharacter = {
    name: DoFCharKey.Lizaveta,
    profileName: 'Lizaveta Samnia',
    artists: [DoFArtist.Astra, DoFArtist.Lumi],
    blurb: '"... and sometimes she would look as though she expected aid, but she soon learned self-sufficiency..."',
    nationality: DoFNationality.Vishara,
    class: DoFClasses.Troubadour,
    routeConfig: {
        allRoute: {
            player: 4
        }
    },
    alt:{
        promo: { artists: [DoFArtist.Astra, DoFArtist.Lumi], displayName: 'Promoted' },
    },
    epithet: 'Silken Spinster',
    height: 157,
    age: 19,
    stats: {
        hp: 26, pow: 8, skl: 7, spd: 12, luk: 12, def: 3, res: 10, con: 6
    },
    level: 6,
    promotesTo: DoFClasses.Valkyrie,
    growths: {hp: 85, pow: 35, skl: 60, spd: 55, luk: 45, def: 10, res: 35},
    ranks: {
        [DoFWeaponType.Staff]: 31,
    },
    affinity: DoFAffinities.Light
};
