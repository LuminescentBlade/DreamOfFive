import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "../models/enums";
import { IDoFCharacterConfigs } from "../models/interfaces";
import { DoFPlayable } from "./playables";

export const DoFCharacters: IDoFCharacterConfigs = {
    characters: [
        // Pre-6
        ...Object.values(DoFPlayable),
        {
            name: 'cobbet',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Brigand,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: 1
                }
            }
        },
        {
            name: 'darrick',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Brigand,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: 2
                }
            }
        },
        {
            name: 'rankin',
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Mercenary,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: 3
                }
            }
        },
        {
            name: 'crispin',
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Archer,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: 3
                }
            }
        },
        {
            name: 'sorcha',
            fullName: 'sorcha farrell',
            artists: [DoFArtist.Amelia],
            class: DoFClasses.Harrier,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: [2, 3, 99]
                }
            },
            alt: {
                final: { artists: [DoFArtist.Amelia], chapter: 99, isSpoiler: true }
            },
            conditional: {
                chapter: {
                    chapter: 99,
                    swapPortrait: 'final',
                    ogPortraitName: 'Sorcha c3'
                }
            }
        },
        {
            name: 'ganter',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Cavalier,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: 4
                }
            },
        },
        {
            name: 'farrell',
            fullName: 'cuthbert farrell',
            artists: [DoFArtist.Amelia, DoFArtist.Astra, DoFArtist.TBA],
            class: '',
            nationality: DoFNationality.Aukema,
            routeConfig: {
                onduris: {
                    enemy: [8, 9, 10],
                    npc: 4
                },
                musain: {
                    enemy: 99,
                    npc: 4
                }
            }
        },
        {
            name: 'fergal',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Armour,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: 5
                }
            },
        },
        {
            name: 'garvan',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Armour,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: 6
                }
            },
        },
        // musain
        {
            name: 'tyrolf',
            artists: [DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Aukema,
            routeConfig: {
                musain: {
                    enemy: 6.5
                }
            }
        },
        {
            name: 'vicentyr',
            artists: [DoFArtist.Xiltas, DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Musain,
            routeConfig: {
                musain: {
                    enemy: 7
                }
            }

        },
        {
            name: 'menida',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Sibyl,
            nationality: DoFNationality.Musain,
            routeConfig: {
                musain: {
                    enemy: [8, 13]
                }
            }
        },
        {
            name: 'duquesne',
            artists: [DoFArtist.Xiltas, DoFArtist.Astra, DoFArtist.Lumi],
            class: '',
            nationality: DoFNationality.Musain,
            routeConfig: {
                musain: {
                    enemy: 8
                }
            }

        },
        {
            name: 'jayson',
            displayName: 'The Maul',
            artists: [DoFArtist.Lumi],
            class: '',
            nationality: DoFNationality.Musain,
            routeConfig: {
                musain: {
                    enemy: 9
                }
            }

        },
        {
            name: 'etrusque',
            artists: [DoFArtist.Astra, DoFArtist.Xiltas],
            class: '',
            nationality: DoFNationality.Musain,
            routeConfig: {
                musain: {
                    enemy: 10
                }
            }

        },
        {
            name: 'preuval',
            artists: [DoFArtist.Lumi],
            class: '',
            nationality: DoFNationality.Musain,
            routeConfig: {
                musain: {
                    enemy: 11
                }
            }

        },
        {
            name: 'uther',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            class: DoFClasses.Sentinel,
            nationality: DoFNationality.Musain,
            routeConfig: {
                musain: {
                    npc: 7,
                    enemy: 12
                }
            }
        },
        {
            name: 'guillaume',
            artists: [DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Musain,
            alt: {
                burned: { artists: [DoFArtist.Astra], isSpoiler: true }
            },
            routeConfig: {
                musain: {
                    npc: 7,
                    enemy: 14
                }
            }

        },
        // onduris
        {
            name: 'truvane',
            artists: [DoFArtist.Char],
            class: DoFClasses.Gladiator,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                onduris: {
                    enemy: 7
                }
            }
        },
        {
            name: 'droon',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            routeConfig: {
                onduris: {
                    enemy: 8
                }
            }
        },
        {
            name: 'am-roan',
            displayName: 'am\'Roan',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Ranger,
            nationality: DoFNationality.Onduris,
            routeConfig: {
                onduris: {
                    enemy: 9
                }
            }
        },
        {
            name: 'bede',
            artists: [DoFArtist.Astra, DoFArtist.Xiltas],
            class: DoFClasses.Harrier,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                onduris: {
                    enemy: 10,
                    npc: 9
                }
            }
        },
        {
            name: 'timon',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Warrior,
            nationality: DoFNationality.Onduris,
            routeConfig: {
                onduris: {
                    enemy: 12,
                }
            }
        },
        {
            name: 'a-vosa',
            displayName: 'a\'Vosa',
            artists: [DoFArtist.Char],
            class: DoFClasses.Sentinel,
            nationality: DoFNationality.Onduris,
            routeConfig: {
                onduris: {
                    enemy: 11,
                    npc: 9
                }
            }
        },
        {
            name: 'jin-sei',
            displayName: 'jin\'Sei',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Gladiator,
            nationality: DoFNationality.Onduris,
            routeConfig: {
                onduris: {
                    enemy: 13,
                    npc: 9
                }
            }
        },
        {
            name: 'sel-seir',
            displayName: 'sel\'Seir',
            artists: [DoFArtist.Lumi, DoFArtist.Amelia],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            routeConfig: {
                onduris: {
                    enemy: 14,
                    npc: 9
                }
            }
        },
        {
            name: 'mei-doru',
            displayName: 'mei\'Doru',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            routeConfig: {
                onduris: {
                    enemy: 14,
                    npc: 9
                }
            }
        },
        {
            name: 'ka-danos',
            displayName: 'ka\'Danos',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Gladiator,
            nationality: DoFNationality.Onduris,
            routeConfig: {
                onduris: {
                    enemy: 14,
                    npc: 9
                }
            }
        },
        // postsplit
        {
            name: 'callad',
            artists: [DoFArtist.Xiltas, DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Aukema,
            isSpoiler: true, // not really, just need to update his design
            routeConfig: {
                allRoute: {
                    enemy: 16
                }
            }
        },
        {
            name: 'quivin',
            artists: [DoFArtist.Lumi],
            class: '',
            nationality: DoFNationality.Onduris,
            routeConfig: {
                allRoute: {
                    enemy: 17.5
                }
            }
        },
        {
            name: 'miodrag',
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Warrior,
            nationality: DoFNationality.Vishara,
            routeConfig: {
                allRoute: {
                    enemy: 80
                }
            }
        },
        // other
        {
            name: 'varkade',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Aukema,
            alt: {
                younger: { artists: [DoFArtist.Astra, DoFArtist.Amelia, DoFArtist.Lumi] }
            },
            routeConfig: {
                allRoute: {
                    npc: 0
                }
            }
        },
        {
            name: 'sevira',
            artists: [DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Aukema,
            routeConfig:{
                allRoute: {
                    npc: 6
                }
            }
        },
        {
            name: 'wyclif',
            artists: [DoFArtist.Lumi, DoFArtist.Astra, DoFArtist.TBA],
            class: '',
            nationality: DoFNationality.Aukema,
            routeConfig:{
                allRoute: {
                    npc: 6
                }
            }
        },
        {
            name: 'valin',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Musain,
            routeConfig:{
                musain: {
                    npc: 6.5
                }
            }
        },
        {
            name: 'merri',
            artists: [DoFArtist.Amelia, DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Musain,
            routeConfig:{
                musain: {
                    npc: 6.5
                }
            }
        },
        {
            name: 'renair_young',
            displayName: 'Young Rena',
            artists: [DoFArtist.Amelia, DoFArtist.Lumi],
            nationality: DoFNationality.Aukema,
            routeConfig:{
                onduris: {
                    npc: 10.5
                }
            }
        },
        {
            name: 'ethelrena',
            artists: [DoFArtist.Amelia, DoFArtist.Lumi],
            nationality: DoFNationality.Aukema,
            isSpoiler: true,
            alt: {
                blood: { artists: [DoFArtist.Amelia, DoFArtist.Lumi] }
            },
            routeConfig:{
                onduris: {
                    npc: 14
                },
                musain: {
                    npc: 99
                }
            }
        },
        {
            name: 'angus',
            artists: [DoFArtist.Astra, DoFArtist.TBA],
            nationality: DoFNationality.Aukema,
            routeConfig:{
                allRoute: {
                    npc: 16
                }
            }
        },
        {
            name: 'agmund',
            fullName: 'long taiming', //龍泰銘
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Svanhild,
            routeConfig:{
                allRoute: {
                    npc: 17.5
                }
            }
        },
        {
            name: 'queenvish',
            displayName: 'Queen Vishara',
            artists: [DoFArtist.Amelia],
            nationality: DoFNationality.Vishara,
            isSpoiler: true,
            routeConfig:{
                allRoute: {
                    npc: 99
                }
            }
        },
        {
            name: 'mir-katal',
            displayName: 'mir\'Katal',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            routeConfig:{
                onduris: {
                    enemy: 99,
                    npc: 12
                },
                musain: {
                    enemy: 99
                }
            }
        },
        {
            name: 'fleurre',
            artists: [DoFArtist.Amelia],
            class: DoFClasses.Sage,
            nationality: DoFNationality.Musain,
            routeConfig:{
                onduris: {
                    enemy: 99
                },
                musain: {
                    npc: 7,
                    enemy: 99
                }
            }
        }

    ],
    shopkeepers: [
        {
            name: 'armory',
            displayName: 'Armory Gara',
            artists: [DoFArtist.Amelia, DoFArtist.Lumi]
        },
        {
            name: 'vendor',
            displayName: 'Vendor Sorina',
            artists: [DoFArtist.Amelia, DoFArtist.Lumi],
        }
        // ,
        // {
        //     name: 'secretshop',
        //     displayName: 'Yue',
        //     artists: [DoFArtist.Amelia],
        // }
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
