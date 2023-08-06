import { DoFArtist, DoFClasses, DoFNationality } from "../models/enums";
import { IDoFCharacterConfigs } from "../models/interfaces";

export const DoFCharacters: IDoFCharacterConfigs = {
    player: [
        {
            name: 'renair',
            chapter: '0',
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
            chapter: '0',
            artists: [DoFArtist.Astra],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Warrior
        },
        {
            name: 'kolbane',
            chapter: '0',
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Mercenary
        },
        {
            name: 'asher',
            chapter: '0',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Priest
        },
        {
            name: 'eileen',
            chapter: '1',
            artists: [DoFArtist.Astra, DoFArtist.Amelia, DoFArtist.Nih],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.PegRider
        },
        {
            name: 'amelia',
            chapter: '1',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Unknown,
            class: DoFClasses.Mage
        },
        {
            name: 'tricia',
            chapter: '2',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Henchwoman
        },
        {
            name: 'chester',
            chapter: '2',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Thief
        },
        {
            name: 'cathale',
            chapter: '2',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Armour
        },
        {
            name: 'crowe',
            chapter: '3',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Archer
        },
        {
            name: 'lizaveta',
            chapter: '4',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            nationality: DoFNationality.Vishara,
            class: DoFClasses.Troubadour
        },
        {
            name: 'driscoll',
            chapter: '4',
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Fighter
        },
        {
            name: 'cothiva',
            chapter: '5',
            artists: [DoFArtist.Astra],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Adept
        },
        {
            name: 'gabriel',
            chapter: '5',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Warlock
        },
        {
            name: 'ioan',
            chapter: '6',
            artists: [DoFArtist.Amelia, DoFArtist.Astra],
            nationality: DoFNationality.Vishara,
            class: DoFClasses.DrakeRider
        },
        // Musain route
        {
            name: 'marie',
            chapter: 'xA',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Thief,
            nationality: DoFNationality.Unknown,
            hidden: true,
        },
        {
            name: 'arcus',
            chapter: 'xA',
            artists: [DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Vishara,
            hidden: true,
        },
        {
            name: 'seren',
            chapter: 'xA',
            artists: [DoFArtist.Amelia, DoFArtist.Astra],
            class: DoFClasses.Soldier,
            nationality: DoFNationality.Musain,
            hidden: true,
        },
        // adrian
        {
            name: 'adrian',
            chapter: 'xA',
            artists: [DoFArtist.Amelia, DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Bard,
            nationality: DoFNationality.Musain,
            hidden: true,
        },
        {
            name: 'jolyon', // enjo
            chapter: 'xA',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Musain,
            hidden: true,
        },
        {
            name: 'florent', // feuilly
            chapter: 'xA',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: DoFClasses.Cavalier,
            nationality: DoFNationality.Musain,
            hidden: true,
        },
        {
            name: 'marin', // marius
            chapter: 'xA',
            artists: [DoFArtist.Lumi, DoFArtist.Amelia],
            class: DoFClasses.Cavalier,
            nationality: DoFNationality.Musain,
            hidden: true,
        },
        {
            name: 'franceza',
            chapter: 'xA',
            artists: [DoFArtist.Amelia],
            class: DoFClasses.Archer,
            nationality: DoFNationality.Musain,
            hidden: true,
        },
        {
            name: 'annelise',
            fullName: 'Annelise',
            chapter: 'xA',
            artists: [DoFArtist.Amelia, DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.PegRider,
            nationality: DoFNationality.Svanhild,
            hidden: true,
        },
        {
            name: 'riva',
            chapter: 'xA',
            artists: [DoFArtist.Amelia, DoFArtist.Lumi],
            class: DoFClasses.Warlock,
            nationality: DoFNationality.Musain,
            hidden: true,
        },
        {
            name: 'meliza',
            chapter: 'xA',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Mage,
            nationality: DoFNationality.Musain,
            hidden: true,
        },
        {
            name: 'ceriza',
            chapter: 'xA',
            artists: [DoFArtist.AK],
            class: DoFClasses.Sage,
            nationality: DoFNationality.Musain,
            hidden: true,
        },
        {
            name: 'stolypin', 
            chapter: 'xA',
            artists: [DoFArtist.Astra, DoFArtist.Amelia, DoFArtist.Lumi],
            class: DoFClasses.Harrier,
            nationality: DoFNationality.Musain,
            hidden: true,
        },
        //
        // Onduris Route
        {
            name: 'alexis',
            chapter: '7B',
            artists: [DoFArtist.Astra],
            nationality: DoFNationality.Unknown,
            class: DoFClasses.Thief,
            hidden: true,
        },
       
        {
            name: 'se-mori',
            displayName: 'se\'Mori',
            chapter: '8B',
            artists: [DoFArtist.Amelia, DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'sileth',
            chapter: '8B',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Mage,
            nationality: DoFNationality.Onduris,
            hidden: true
        },
        {
            name: 'conleth',
            chapter: '8B',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Skirmisher,
            nationality: DoFNationality.Aukema,
            hidden: true
        },
        {
            name: 'kahn',
            chapter: '9B',
            artists: [DoFArtist.Astra, DoFArtist.Amelia, DoFArtist.Lumi],
            class: '',
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'wren',
            chapter: 'xB',
            artists: [DoFArtist.Lumi, DoFArtist.Amelia],
            class: DoFClasses.Cleric,
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'bellona',
            chapter: 'xB',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: DoFClasses.DrakeRider,
            nationality: DoFNationality.Vishara,
            hidden: true,
        },
       
        {
            name: 'nikita',
            chapter: 'xB',
            artists: [DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'baldur',
            chapter: '10B',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Pirate,
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'leda',
            chapter: '10B',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: DoFClasses.Dancer,
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'nari',
            chapter: '10B',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Mercenary,
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'vi-shen',
            displayName: 'vi\'Shen',
            chapter: 'xB',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Mercenary,
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'brill',
            chapter: 'xB',
            artists: [DoFArtist.Amelia],
            class: DoFClasses.Sniper,
            nationality: DoFNationality.Unknown,
            hidden: true,
        },
        // Postskip
        {
            name: 'saskia',
            chapter: '',
            artists: [DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Unknown,
            hidden: true,
        },
        {
            name: 'leofric',
            chapter: '17',
            artists: [DoFArtist.Lumi],
            class: '',
            nationality: DoFNationality.Aukema,
            hidden: true,
        },
        {
            name: 'jauger',
            chapter: '17',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: DoFClasses.Armour,
            nationality: DoFNationality.Aukema,
            hidden: true,
        },
        {
            name: 'odette', // odette
            chapter: '17',
            artists: [DoFArtist.Amelia],
            class: DoFClasses.Sniper,
            nationality: DoFNationality.Aukema,
            hidden: true,
        },
        {
            name: 'thyra',
            fullName: 'jianxia long',
            chapter: '17',
            artists: [DoFArtist.Lumi],
            class: '',
            nationality: DoFNationality.Onduris,
            hidden: true,
        },
        {
            name: 'sheila',
            chapter: 'x',
            artists: [DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Aukema,
            hidden: true,
        },
        {
            name: 'kaien',
            chapter: 'x',
            artists: [DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Unknown,
            hidden: true,
        },
        {
            name: 'claudiya',
            chapter: 'x',
            artists: [DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Unknown,
            hidden: true,
        },
        {
            name: 'vincent',
            chapter: 'x',
            artists: [DoFArtist.Amelia, DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Unknown,
            hidden: true,
        },
        {
            name: 'volund',
            chapter: 'x',
            artists: [DoFArtist.Lumi],
            class: '',
            nationality: DoFNationality.Svanhild,
            hidden: true,
        }
    ],
    enemy: [
        {
            name: 'discan',
            artists: [DoFArtist.Seph, DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Aukema,
            chapter: '0',
        },
        {
            name: 'cobbet',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Brigand,
            nationality: DoFNationality.Aukema,
            chapter: '1',
        },
        {
            name: 'darrick',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Brigand,
            nationality: DoFNationality.Aukema,
            chapter: '2',
        },
        {
            name: 'rankin',
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Mercenary,
            nationality: DoFNationality.Aukema,
            chapter: '3',
        },
        {
            name: 'crispin',
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Archer,
            nationality: DoFNationality.Aukema,
            chapter: '3',
        },
        {
            name: 'sorcha',
            fullName: 'sorcha farrell',
            artists: [DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Aukema,
            chapter: '3',
        },
        {
            name: 'ganter',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Cavalier,
            nationality: DoFNationality.Aukema,
            chapter: '4',
        },
        {
            name: 'fergal',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Armour,
            nationality: DoFNationality.Aukema,
            chapter: '5',
        },
        {
            name: 'gadras',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Armour,
            nationality: DoFNationality.Aukema,
            chapter: '6',
        },
        // onduris
        {
            name: 'truvane',
            artists: [DoFArtist.Char],
            class: DoFClasses.Hero,
            nationality: DoFNationality.Aukema,
            hidden: true,
            chapter: '7B'
        },
        {
            name: 'droon',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            hidden: true,
            chapter: '8B'
        },
        {
            name: 'am-roan',
            displayName: 'am\'Roan',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Ranger,
            nationality: DoFNationality.Onduris,
            hidden: true,
            chapter: '9B'
        },
          {
            name: 'bede',
            artists: [DoFArtist.Astra,DoFArtist.Xiltas],
            class: DoFClasses.Harrier,
            nationality: DoFNationality.Aukema,
            hidden: true,
            chapter: '10B'
        },
        {
            name: 'byor-dal',
            displayName: 'byor\'Dal',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            class: DoFClasses.Hero,
            nationality: DoFNationality.Onduris,
            hidden: true,
            chapter: '11B'
        },
        {
            name: 'sel-seir',
            displayName: 'sel\'Seir',
            artists: [DoFArtist.Lumi, DoFArtist.Amelia],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            hidden: true,
            chapter: ''
        },
        {
            name: 'mei-doru',
            displayName: 'mei\'Doru',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            hidden: true,
            chapter: ''
        },
        {
            name: 'ka-danos',
            displayName: 'ka\'Danos',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Hero,
            nationality: DoFNationality.Onduris,
            hidden: true,
            chapter: ''
        },
        {
            name: 'a-vosa',
            displayName: 'a\'Vosa',
            artists: [DoFArtist.Char],
            class: DoFClasses.Hero,
            nationality: DoFNationality.Onduris,
            hidden: true,
            chapter: ''
        },
        {
            name: 'jin-sei',
            displayName: 'jin\'Sei',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Hero,
            nationality: DoFNationality.Onduris,
            hidden: true,
            chapter: ''
        },

        
        // other
        {
            name: 'farrell',
            fullName: 'cuthbert farrell',
            artists: [DoFArtist.Amelia, DoFArtist.Astra, DoFArtist.TBA],
            class: '',
            nationality: DoFNationality.Aukema,
            chapter: 'x'
        },
    ],
    npc: [
        {
            name: 'armory',
            displayName: 'Gaius',
            artists: [DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Unknown
        },
        {
            name: 'vendor',
            displayName: 'Shara',
            artists: [DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Unknown
        },
        {
            name: 'secretshop',
            displayName: 'Yue',
            artists: [DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Unknown
        },
        {
            name: 'varkade',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Aukema,
            chapter: '0'
        },
        {
            name: 'dahlia',
            artists: [DoFArtist.Pi],
            class: '',
            nationality: DoFNationality.Unknown,
            chapter: '3'
        },
        {
            name: 'sevira',
            artists: [DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Aukema,
            chapter: '6'
        },
        {
            name: 'wyclif',
            artists: [DoFArtist.Lumi, DoFArtist.Astra, DoFArtist.TBA],
            class: '',
            nationality: DoFNationality.Aukema,
            chapter: '6'
        },
        {
            name: 'adalheid',
            artists: [DoFArtist.Lumi, DoFArtist.AK],
            class: '',
            nationality: DoFNationality.Aukema,
            chapter: '7B'
        },
        {
            name: 'mir-katal',
            displayName: 'mir\'Katal',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            chapter: '9B'
        }
    ],
    generic: [
        {
            name: 'mercenary',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Mercenary
        },
        {
            name: 'mage',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Mage
        },
        {
            name: 'myrmidon',
            artists: [DoFArtist.Amelia],
            class: DoFClasses.Myrmidon
        },
        {
            name: 'pirate',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Pirate
        },
        {
            name: 'paladin',
            artists: [DoFArtist.TBA, DoFArtist.Astra],
            class: DoFClasses.Paladin
        },
        {
            name: 'soldier',
            artists: [DoFArtist.TBA, DoFArtist.Amelia],
            class: DoFClasses.Soldier
        },
        {
            name: 'bandit',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Brigand
        },
        {
            name: 'archer',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Archer
        },
        {
            name: 'pegasus',
            displayName: 'Peg Rider',
            artists: [DoFArtist.Astra],
            class: DoFClasses.PegRider
        },
        {
            name: 'boy',
            artists: [DoFArtist.Astra],
        },
        {
            name: 'girl',
            artists: [DoFArtist.Amelia],
        },
        {
            name: 'woman1',
            artists: [DoFArtist.Amelia],
        },
        {
            name: 'woman2',
            artists: [DoFArtist.Amelia],
        },
        {
            name: 'woman3',
            artists: [DoFArtist.Amelia],
        },
        {
            name: 'woman4',
            artists: [DoFArtist.Amelia, DoFArtist.Lumi],
        },
        {
            name: 'man1',
            artists: [DoFArtist.TBA],
        },
        {
            name: 'man2',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
        },
        {
            name: 'man3',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
        },
        {
            name: 'man4',
            artists: [DoFArtist.Amelia],
        },
        {
            name: 'oldman',
            displayName: 'Old Man',
            artists: [DoFArtist.Astra],
        },
    ]
};
