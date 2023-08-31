import { DoFArtist, DoFClasses, DoFNationality } from "../models/enums";
import { IDoFCharacterConfigs } from "../models/interfaces";

export const DoFCharacters: IDoFCharacterConfigs = {
    characters: [
        {
            name: 'renair',
            artists: [DoFArtist.AK],
            alt: [
                { name: 'angry', artists: [DoFArtist.AK, DoFArtist.Amelia] },
                { name: 'sad', artists: [DoFArtist.AK, DoFArtist.Amelia] },
                { name: 'promo', artists: [DoFArtist.AK, DoFArtist.Lumi], chapter: 15, displayName: 'Promoted' },
                { name: 'promo_angry', artists: [DoFArtist.AK, DoFArtist.Lumi], chapter: 15, displayName: 'Pr. Angry' },
                { name: 'promo_sad', artists: [DoFArtist.AK, DoFArtist.Lumi], chapter: 15 , displayName: 'Pr. Sad'},
            ],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Captain,
            allRoute: {
                player: 0
            }
        },
        {
            name: 'garath',
            artists: [DoFArtist.Astra],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Warrior,
            allRoute: {
                player: 0
            }
        },
        {
            name: 'kolbane',
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Mercenary,
            allRoute: {
                player: 0
            }
        },
        {
            name: 'asher',
            artists: [DoFArtist.Amelia, DoFArtist.Lumi],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Priest,
            allRoute: {
                player: 0
            }
        },
        {
            name: 'eileen',
            artists: [DoFArtist.Astra, DoFArtist.Amelia, DoFArtist.Nih],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.PegRider,
            allRoute: {
                player: 1
            }

        },
        {
            name: 'amelia',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Mage,
            allRoute: {
                player: 1
            }
        },
        {
            name: 'tricia',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Henchwoman,
            allRoute: {
                player: 2
            }
        },
        {
            name: 'chester',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Thief,
            allRoute: {
                player: 2
            }
        },
        {
            name: 'cathale',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Armour,
            allRoute: {
                player: 2
            }
        },
        {
            name: 'crowe',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Archer,
            allRoute: {
                player: 3,
                enemy: 3
            }
        },
        {
            name: 'lizaveta',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            nationality: DoFNationality.Vishara,
            class: DoFClasses.Troubadour,
            allRoute: {
                player: 4
            }
        },
        {
            name: 'driscoll',
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Fighter,
            allRoute: {
                player: 4,
                enemy: 4
            }
        },
        {
            name: 'cothiva',
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Adept,
            allRoute: {
                player: 5
            }
        },
        {
            name: 'gabriel',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Aukema,
            class: DoFClasses.Warlock,
            allRoute: {
                player: 5
            }
        },
        {
            name: 'ioan',
            artists: [DoFArtist.Amelia, DoFArtist.Astra],
            nationality: DoFNationality.Vishara,
            class: DoFClasses.DrakeRider,
            allRoute: {
                player: 6,
                enemy: 6
            }
        },
        // Musain route
        {
            name: 'marie',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Thief,
            nationality: DoFNationality.Unknown,
            musain: {
                player: 7
            }
        },
        {
            name: 'arcus',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Ironclad,
            nationality: DoFNationality.Vishara,
            musain: {
                player: 6.5
            },
            onduris: {
                player: 15
            }
        },
        {
            name: 'seren',
            artists: [DoFArtist.Amelia, DoFArtist.Astra],
            class: DoFClasses.Soldier,
            nationality: DoFNationality.Musain,
            musain: {
                player: 8
            }
        },
        {
            name: 'franceza',
            artists: [DoFArtist.Amelia],
            class: DoFClasses.Archer,
            nationality: DoFNationality.Musain,
            musain: {
                player: 8
            }
        },
        {
            name: 'lyndra',
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Gladiator,
            nationality: DoFNationality.Aukema,
            musain: {
                player: 8.5,
                enemy: 8
            }
        },
        {
            name: 'adrian',
            artists: [DoFArtist.Amelia, DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Bard,
            nationality: DoFNationality.Musain,
            musain: {
                player: 9
            }
        },
        {
            name: 'jolyon', // enjo
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: DoFClasses.Mage,
            nationality: DoFNationality.Musain,
            musain: {
                player: 10
            },
            onduris: {
                player: 15
            }
        },
        {
            name: 'florent', // feuilly
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: DoFClasses.Cavalier,
            nationality: DoFNationality.Musain,
            musain: {
                player: 10
            },
            onduris: {
                player: 15
            }
        },
        {
            name: 'marin', // marius
            artists: [DoFArtist.Lumi, DoFArtist.Amelia],
            class: DoFClasses.Cavalier,
            nationality: DoFNationality.Musain,
            musain: {
                player: 10
            }
        },
        {
            name: 'annelise',
            fullName: 'Annelise',
            artists: [DoFArtist.Amelia, DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.PegRider,
            nationality: DoFNationality.Svanhild,
            musain: {
                player: 11
            },
            onduris: {
                player: 15
            }
        },
        {
            name: 'riva',
            artists: [DoFArtist.Amelia, DoFArtist.Lumi],
            class: DoFClasses.Warlock,
            nationality: DoFNationality.Musain,
            musain: {
                player: 11
            }
        },
        {
            name: 'meliza',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Mage,
            nationality: DoFNationality.Musain,
            musain: {
                player: 12
            }
        },
        {
            name: 'corbeau',
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Berserker,
            nationality: DoFNationality.Musain,
            musain: {
                player: 13
            }
        },
        {
            name: 'eudira',
            artists: [DoFArtist.AK],
            class: DoFClasses.Hexe,
            nationality: DoFNationality.Musain,
            musain: {
                player: 14,
                enemy: 13
            }
        },
        {
            name: 'severin',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Harrier,
            nationality: DoFNationality.Musain,
            musain: {
                player: 15,
                enemy: 12
            }
        },
        //
        // Onduris Route
        {
            name: 'alexis',
            artists: [DoFArtist.Astra],
            nationality: DoFNationality.Unknown,
            class: DoFClasses.Thief,
            onduris: {
                player: 7
            }
        },
        {
            name: 'se-mori',
            displayName: 'se\'Mori',
            artists: [DoFArtist.Amelia, DoFArtist.Astra],
            class: DoFClasses.Fencer,
            nationality: DoFNationality.Onduris,
            onduris: {
                player: 8
            },
            musain: {
                player: 15
            }
        },
        {
            name: 'sileth',
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Mage,
            nationality: DoFNationality.Onduris,
            onduris: {
                player: 8,
            },
            musain: {
                player: 15
            }
        },
        {
            name: 'conleth',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Skirmisher,
            nationality: DoFNationality.Aukema,
            onduris: {
                player: 8
            },
            musain: {
                player: 15
            }
        },
        {
            name: 'kahn',
            artists: [DoFArtist.Astra, DoFArtist.Amelia, DoFArtist.Lumi],
            class: DoFClasses.Soldier,
            nationality: DoFNationality.Onduris,
            onduris: {
                player: 9
            }
        },
        {
            name: 'wren',
            artists: [DoFArtist.Lumi, DoFArtist.Amelia],
            class: DoFClasses.Cleric,
            nationality: DoFNationality.Onduris,
            onduris: {
                player: 9
            }
        },
        {
            name: 'bellona',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: DoFClasses.DrakeRider,
            nationality: DoFNationality.Vishara,
            onduris: {
                player: 9
            }
        },
        {
            name: 'leda',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: DoFClasses.Dancer,
            nationality: DoFNationality.Onduris,
            onduris: {
                player: 10,
            }
        },
        {
            name: 'nari',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Mercenary,
            nationality: DoFNationality.Onduris,
            onduris: {
                player: 10
            }
        },
        {
            name: 'baldur',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Raider,
            nationality: DoFNationality.Onduris,
            onduris: {
                player: 10
            },
            musain: {
                player: 15
            }
        },
        {
            name: 'nikita',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            onduris: {
                player: 10.5,
                enemy: 10
            }
        },
        {
            name: 'byor-dal',
            displayName: 'byor\'Dal',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            class: DoFClasses.Gladiator,
            nationality: DoFNationality.Onduris,
            onduris: {
                player: 11,
                enemy: 10.5
            }
        },
        {
            name: 'vi-shen',
            displayName: 'vi\'Shen',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Myrmidon,
            nationality: DoFNationality.Onduris,
            onduris: {
                player: 12
            },
            musain: {
                enemy: 99
            }
        },
        {
            name: 'brill',
            artists: [DoFArtist.Amelia],
            class: DoFClasses.Marksman,
            nationality: DoFNationality.Onduris,
            onduris: {
                player: 13,
                enemy: 12
            }
        },
        {
            name: 'stolypin',
            artists: [DoFArtist.Astra, DoFArtist.Amelia, DoFArtist.Lumi],
            class: DoFClasses.Harrier,
            nationality: DoFNationality.Vishara,
            onduris: {
                player: 15
            }
        },
        // Postskip
        {
            name: 'jauger',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: DoFClasses.Armour,
            nationality: DoFNationality.Aukema,
            allRoute: {
                player: 16
            }
        },
        {
            name: 'saskia',
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Rogue,
            nationality: DoFNationality.Aukema,
            allRoute: {
                player: 99,
                enemy: 99
            }
        },
        {
            name: 'hereward',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Cataphract,
            nationality: DoFNationality.Aukema,
            allRoute: {
                player: 17,
                npc: 6
            }
        },
        {
            name: 'artemisia',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Sibyl,
            nationality: DoFNationality.Aukema,
            allRoute: {
                player: 17
            }
        },
        {
            name: 'odette', // odette
            artists: [DoFArtist.Amelia],
            class: DoFClasses.Marksman,
            nationality: DoFNationality.Aukema,
            allRoute: {
                player: 17
            }
        },
        {
            name: 'thyra',
            fullName: 'jianxia long',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Einherjar,
            nationality: DoFNationality.Svanhild,
            allRoute: {
                player: 17
            }
        },
        {
            name: 'sheila',
            artists: [DoFArtist.Amelia],
            class: DoFClasses.SeraphKnight,
            nationality: DoFNationality.Aukema,
            allRoute: {
                player: 99,
                npc: 2
            }
        },
        {
            name: 'kaien',
            artists: [DoFArtist.Amelia],
            class: DoFClasses.DrakeKnight,
            nationality: DoFNationality.Vishara,
            allRoute: {
                player: 99
            }
        },
        {
            name: 'claudiya',
            artists: [DoFArtist.Amelia],
            class: DoFClasses.Sibyl,
            nationality: DoFNationality.Vishara,
            allRoute: {
                player: 99
            }
        },
        {
            name: 'vincent',
            artists: [DoFArtist.Amelia, DoFArtist.Astra],
            class: '',
            // nationality: DoFNationality.Vishara,
            allRoute: {
                player: 99
            }
        },
        {
            name: 'dahlia',
            artists: [DoFArtist.Pi],
            class: DoFClasses.Hexe,
            nationality: DoFNationality.Unknown,
            allRoute: {
                player: 99,
                npc: 3
            },
            conditionalName: {
                player: 'Amaryl'
            }
        },
        {
            name: 'volund',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Gladiator,
            nationality: DoFNationality.Svanhild,
            allRoute: {
                player: 99,
            }
        },
        {
            name: 'adalheid',
            artists: [DoFArtist.Lumi, DoFArtist.AK],
            class: DoFClasses.Paladin,
            nationality: DoFNationality.Aukema,
            allRoute: {
                player: 99,
                enemy: 98,
                npc: 7
            }
        },
        {
            name: 'dismas',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Brigand,
            nationality: DoFNationality.Aukema,
            alt: [
                { name: 'punished', artists: [DoFArtist.Astra], chapter: 15 },
                // { name: 'final', artists: [] }
            ],
            allRoute: {
                player: 16,
                enemy: 0
            }
        },
        {
            name: 'cobbet',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Brigand,
            nationality: DoFNationality.Aukema,
            allRoute: {
                enemy: 1
            },
        },
        {
            name: 'darrick',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Brigand,
            nationality: DoFNationality.Aukema,
            allRoute: {
                enemy: 2
            },
        },
        {
            name: 'rankin',
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Mercenary,
            nationality: DoFNationality.Aukema,
            allRoute: {
                enemy: 3
            },
        },
        {
            name: 'crispin',
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Archer,
            nationality: DoFNationality.Aukema,
            allRoute: {
                enemy: 3
            },
        },
        {
            name: 'sorcha',
            fullName: 'sorcha farrell',
            artists: [DoFArtist.Amelia],
            class: DoFClasses.Harrier,
            nationality: DoFNationality.Aukema,
            allRoute: {
                enemy: 3
            },
            alt: [{name: 'final', artists: [DoFArtist.Amelia], chapter: 99}]
        },
        {
            name: 'ganter',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Cavalier,
            nationality: DoFNationality.Aukema,
            allRoute: {
                enemy: 4
            },
        },
        {
            name: 'fergal',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Armour,
            nationality: DoFNationality.Aukema,
            allRoute: {
                enemy: 5
            },
        },
        {
            name: 'garvan',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Armour,
            nationality: DoFNationality.Aukema,
            allRoute: {
                enemy: 6
            },
        },
        // musain
        {
            name: 'tyrolf',
            artists: [DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Aukema,
            musain: {
                enemy: 6.5
            }
        },
        {
            name: 'dorovahn',
            artists: [DoFArtist.Xiltas, DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Musain,
            musain: {
                enemy: 7
            }

        },
        {
            name: 'ducann',
            artists: [DoFArtist.Xiltas, DoFArtist.Astra, DoFArtist.Lumi],
            class: '',
            nationality: DoFNationality.Musain,
            musain: {
                enemy: 8
            }

        },
        {
            name: 'jayson',
            artists: [DoFArtist.Lumi],
            class: '',
            nationality: DoFNationality.Musain,
            musain: {
                enemy: 9
            }

        },
        {
            name: 'etrusque',
            artists: [DoFArtist.Astra, DoFArtist.Xiltas],
            class: '',
            nationality: DoFNationality.Musain,
            musain: {
                enemy: 10
            }

        },
        {
            name: 'prevalh',
            artists: [DoFArtist.Lumi],
            class: '',
            nationality: DoFNationality.Musain,
            musain: {
                enemy: 11
            }

        },
        {
            name: 'uther',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Musain,
            musain: {
                enemy: 12
            }
        },
        {
            name: 'menida',
            artists: [DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Musain,
            musain: {
                enemy: 13
            }
        },
        {
            name: 'guillaume',
            artists: [DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Musain,
            alt: [{ name: 'burned', artists: [DoFArtist.Astra] }],
            musain: {
                enemy: 14
            }

        },
        // onduris
        {
            name: 'truvane',
            artists: [DoFArtist.Char],
            class: DoFClasses.Gladiator,
            nationality: DoFNationality.Aukema,
            onduris: {
                enemy: 7
            }
        },
        {
            name: 'droon',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            onduris: {
                enemy: 8
            }
        },
        {
            name: 'am-roan',
            displayName: 'am\'Roan',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Ranger,
            nationality: DoFNationality.Onduris,
            onduris: {
                enemy: 9
            }
        },
        {
            name: 'bede',
            artists: [DoFArtist.Astra, DoFArtist.Xiltas],
            class: DoFClasses.Harrier,
            nationality: DoFNationality.Aukema,
            onduris: {
                enemy: 10,
                npc: 9
            }
        },
        {
            name: 'timon',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Warrior,
            nationality: DoFNationality.Onduris,
            onduris: {
                enemy: 12,
            }
        },
        {
            name: 'a-vosa',
            displayName: 'a\'Vosa',
            artists: [DoFArtist.Char],
            class: DoFClasses.Sentinel,
            nationality: DoFNationality.Onduris,
            onduris: {
                enemy: 11,
                npc: 9
            }
        },
        {
            name: 'jin-sei',
            displayName: 'jin\'Sei',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Gladiator,
            nationality: DoFNationality.Onduris,
            onduris: {
                enemy: 13,
                npc: 9
            }
        },
        {
            name: 'sel-seir',
            displayName: 'sel\'Seir',
            artists: [DoFArtist.Lumi, DoFArtist.Amelia],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            onduris: {
                enemy: 14,
                npc: 9
            }
        },
        {
            name: 'mei-doru',
            displayName: 'mei\'Doru',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            onduris: {
                enemy: 14,
                npc: 9
            }
        },
        {
            name: 'ka-danos',
            displayName: 'ka\'Danos',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Gladiator,
            nationality: DoFNationality.Onduris,
            onduris: {
                enemy: 14,
                npc: 9
            }
        },
        // postsplit
        {
            name: 'callad',
            artists: [DoFArtist.Xiltas, DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Aukema,
            allRoute: {
                enemy: 16
            }
        },
        {
            name: 'morwen',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            class: DoFClasses.Gladiator,
            nationality: DoFNationality.Aukema,
            allRoute: {
                enemy:5,
            }
        },
        {
            name: 'farrell',
            fullName: 'cuthbert farrell',
            artists: [DoFArtist.Amelia, DoFArtist.Astra, DoFArtist.TBA],
            class: '',
            nationality: DoFNationality.Aukema,
            onduris: {
                enemy: 8,
                npc: 4
            },
            musain: {
                enemy: 99,
                npc: 4
            },
        },
        // other
        {
            name: 'varkade',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Aukema,
            allRoute: {
                npc: 0
            }
        },
        {
            name: 'sevira',
            artists: [DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Aukema,
            allRoute: {
                npc: 6
            }
        },
        {
            name: 'wyclif',
            artists: [DoFArtist.Lumi, DoFArtist.Astra, DoFArtist.TBA],
            class: '',
            nationality: DoFNationality.Aukema,
            allRoute: {
                npc: 6
            }
        },
        {
            name: 'vallans',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Musain,
            musain: {
                npc: 99
            }
        },
        {
            name: 'merri',
            artists: [DoFArtist.Amelia, DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Musain,
            musain: {
                npc: 99
            }
        },
        {
            name: 'renair_young',
            displayName: 'Young Renair',
            artists: [DoFArtist.Amelia, DoFArtist.Lumi],
            nationality: DoFNationality.Aukema,
            onduris: {
                npc: 10.5
            }
        },
        {
            name: 'ethelreda',
            artists: [DoFArtist.Amelia,DoFArtist.Lumi],
            nationality: DoFNationality.Aukema,
            allRoute: {
                npc: 99
            }
        },
        {
            name: 'angus',
            artists: [DoFArtist.Astra,DoFArtist.TBA],
            nationality: DoFNationality.Aukema,
            allRoute: {
                npc: 99
            }
        },
        {
            name: 'queenvish',
            displayName: 'Queen Vishara',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Vishara,
            allRoute: {
                npc: 99
            }
        },
        {
            name: 'mir-katal',
            displayName: 'mir\'Katal',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            onduris: {
                enemy: 99,
                npc: 12
            },
            musain: {
                enemy: 99
            }
        },
        {
            name: 'fleur',
            artists: [DoFArtist.Amelia],
            class: DoFClasses.Sage,
            nationality: DoFNationality.Musain,
            onduris: {
                enemy: 99   
            },
            musain: {
                enemy: 99
            }
        }
    ],
    shopkeepers: [
        {
            name: 'armory',
            displayName: 'Gaius',
            artists: [DoFArtist.Amelia]
        },
        {
            name: 'vendor',
            displayName: 'Shara',
            artists: [DoFArtist.Amelia],
        },
        {
            name: 'secretshop',
            displayName: 'Yue',
            artists: [DoFArtist.Amelia],
        }
    ],
    generics: [
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
            class: DoFClasses.Raider
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
