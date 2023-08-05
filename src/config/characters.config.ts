import { DoFArtist, DoFClasses, DoFNationality } from "../models/enums";
import { IDoFCharacterConfigs } from "../models/interfaces";

export const DoFCharacters: IDoFCharacterConfigs = {
    player: [
        {
            name: 'renair',
            joinChapter: '0',
            artists: [DoFArtist.AK],
            alt: [
                { name: 'angry', artists: [DoFArtist.AK, DoFArtist.Amelia] },
                { name: 'sad', artists: [DoFArtist.AK, DoFArtist.Amelia] }
            ],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Captain
        },
        {
            name: 'garath',
            joinChapter: '0',
            artists: [DoFArtist.Astra],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Warrior
        },
        {
            name: 'kolbane',
            joinChapter: '0',
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Mercenary
        },
        {
            name: 'asher',
            joinChapter: '0',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Priest
        },
        {
            name: 'eileen',
            joinChapter: '1',
            artists: [DoFArtist.Astra, DoFArtist.Amelia, DoFArtist.Nih],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.PegRider
        },
        {
            name: 'amelia',
            joinChapter: '1',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Unknown,
            class: DoFClasses.Mage
        },
        {
            name: 'tricia',
            joinChapter: '2',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Henchwoman
        },
        {
            name: 'chester',
            joinChapter: '2',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Thief
        },
        {
            name: 'cathale',
            joinChapter: '2',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Armour
        },
        {
            name: 'crowe',
            joinChapter: '3',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Archer
        },
        {
            name: 'lizaveta',
            joinChapter: '4',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            nationality: DoFNationality.Vishara,
            class: DoFClasses.Troubadour
        },
        {
            name: 'driscoll',
            joinChapter: '4',
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Fighter
        },
        {
            name: 'cothiva',
            joinChapter: '5',
            artists: [DoFArtist.Astra],
            nationality: DoFNationality.Unknown,
            class: DoFClasses.Adept
        },
        {
            name: 'gabriel',
            joinChapter: '5',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Warlock
        },
        {
            name: 'ioan',
            joinChapter: '6',
            artists: [DoFArtist.Amelia, DoFArtist.Astra],
            nationality: DoFNationality.Vishara,
            class: DoFClasses.DrakeRider
        },
        // Musain route
        {
            name: 'arcus',
            joinChapter: 'xA',
            artists: [DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Vishara,
            hidden: true,
        },
        // seren
        // adrian
        {
            name: 'annelise',
            displayName: 'Annelise',
            joinChapter: 'xA',
            artists: [DoFArtist.Amelia, DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.PegRider,
            nationality: DoFNationality.Svanhild,
            hidden: true,
        },
        {
            name: 'jolyon', // enjo
            joinChapter: 'xA',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Musain,
            hidden: true,
        },
        {
            name: 'florent', // feuilly
            joinChapter: 'xA',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: DoFClasses.Cavalier,
            nationality: DoFNationality.Musain,
            hidden: true,
        },
        {
            name: 'marin', // marius
            joinChapter: 'xA',
            artists: [DoFArtist.Lumi, DoFArtist.Amelia],
            class: DoFClasses.Cavalier,
            nationality: DoFNationality.Musain,
            hidden: true,
        },
        // river
        //
        // Onduris Route
        {
            name: 'alexis',
            joinChapter: '7B',
            artists: [DoFArtist.Astra],
            nationality: DoFNationality.Unknown,
            class: DoFClasses.Thief,
            hidden: true,
        },
        // {
        //     name: 'conchur',
        //     joinChapter: 'xB',

        // },
        {
            name: 'se-mori',
            displayName: 'se\'Mori',
            joinChapter: 'xB',
            artists: [DoFArtist.Amelia, DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'wren',
            joinChapter: 'xB',
            artists: [DoFArtist.Lumi, DoFArtist.Amelia],
            class: DoFClasses.Cleric,
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'nikita',
            joinChapter: 'xB',
            artists: [DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'balder',
            joinChapter: 'xB',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Pirate,
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'leda',
            joinChapter: 'xB',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: DoFClasses.Dancer,
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'nari',
            joinChapter: 'xB',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Mercenary,
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'vi-shen',
            displayName: 'vi\'Shen',
            joinChapter: 'xB',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Mercenary,
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        // Postskip
        // leofric
        // jauger
        // odette
        {
            name: 'thyra',
            fullName: 'jianxia long',
            joinChapter: '17',
            artists: [DoFArtist.Lumi],
            class: '',
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'sheila',
            joinChapter: 'x',
            artists: [DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Aukema,
            hidden: true,
        }
    ],
    enemy: [
        // {
        //     name: 'discan',
        //     artists: [DoFArtist.Seph, DoFArtist.Astra],
        //     class: '',
        //     nationality: DoFNationality.Aukema
        // },
        // {
        //     name: 'cobbet',
        //     artists: [DoFArtist.Astra],
        //     class: DoFClasses.Brigand,
        //     nationality: DoFNationality.Aukema
        // },
        // {
        //     name: 'darrick',
        //     artists: [DoFArtist.Astra],
        //     class: DoFClasses.Brigand,
        //     nationality: DoFNationality.Aukema
        // },
        // {
        //     name: 'rankin',
        //     artists: [DoFArtist.Astra, DoFArtist.Lumi],
        //     class: DoFClasses.Mercenary,
        //     nationality: DoFNationality.Aukema
        // },
        // {
        //     name: 'crispin',
        //     artists: [DoFArtist.Astra, DoFArtist.Lumi],
        //     class: DoFClasses.Archer,
        //     nationality: DoFNationality.Aukema
        // },
        // {
        //     name: 'ganter',
        //     artists: [DoFArtist.Lumi],
        //     class: DoFClasses.Cavalier,
        //     nationality: DoFNationality.Aukema
        // },
        // {
        //     name: 'fergal',
        //     artists: [DoFArtist.Astra],
        //     class: DoFClasses.Armour,
        //     nationality: DoFNationality.Aukema
        // },
        // {
        //     name: 'gadras',
        //     artists: [DoFArtist.Astra],
        //     class: DoFClasses.Armour,
        //     nationality: DoFNationality.Aukema
        // },
        // // onduris
        // {
        //     name: 'truvane',
        //     artists: [DoFArtist.Char],
        //     class: DoFClasses.Hero,
        //     nationality: DoFNationality.Aukema
        // },
    ],
    npc: [],
    generic: []
};
