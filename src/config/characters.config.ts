import { DoFArtist, DoFCharKey, DoFClasses, DoFNationality } from "../models/enums";
import { IDoFCharacterConfigs } from "../models/interfaces";
import { DoFPlayable } from "./playables";

export const DoFCharacters: IDoFCharacterConfigs = {
    characters: [
        // playables
        ...Object.values(DoFPlayable),
        // non-playables
        {
            name: 'cobbet',
            artists: [DoFArtist.Astra],
            blurb: '"... dealt with the traitor in a single, vicious blow. I knew then he considered himself a man of honour..."',
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
            blurb: '"Brigands are no fools, but a brute can certainly force his way near the top on the strength of his arm alone..."',
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
            blurb: '"... each brigand would drag down whoever they needed to to reach the top, even as the pot boiled beneath..."',
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
            blurb: '"... tremor in his hand vanished as he nocked an arrow, the fear giving him focus..."',
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
            profileName: 'Sorcha Farrell',
            artists: [DoFArtist.Amelia],
            blurb: '"Fluid gestures wove fire in intricate, deadly patterns, but my eyes were on hers... cold, onyx-dark..."',
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
            blurb: '"... would be no time to talk him down. Whatever he thought he knew of me, he despised..."',
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
            profileName: 'Cuthbert Farrell',
            epithet: 'The Pursuer',
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
            blurb: '"... never knew his name. Yet his search had been meticulous and skilful. I mourned the waste, but..."',
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
            blurb: '"The border posts attracted stolid, dutiful men unconcerned with glamour, workmanlike, unimaginative..."',
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
            blurb: '"... found it convenient to keep around such distasteful men as these, who took a craftsman\'s pride in maiming..."',
            class: DoFClasses.Rogue,
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
            blurb: '"... officer class of warrior-scholars, taught in tactics, leadership, arithmetic, rhetoric and even philosophy..."',
            class: DoFClasses.Sage,
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
            blurb: '"Two souls, battling for dominance within a single husk. Little wonder her mind seemed ruined..."',
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
            blurb: '"... am told he was a small-minded man who used his post to inflict whatever depravity he could..."',
            class: DoFClasses.Sentinel,
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
            blurb: '"It would never be personal for him. All such killers saw themselves as good men, with their own code..."',
            class: DoFClasses.Gladiator,
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
            blurb: '"He had every chance to turn against the Provost, but in the end, he valued his honour most highly..."',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            class: DoFClasses.Sentinel,
            nationality: DoFNationality.Musain,
            routeConfig: {
                musain: {
                    npc: 7,
                    enemy: 12
                }
            },
            alt: {
                injured: {
                    artists: [DoFArtist.Lumi, DoFArtist.Astra],
                    chapter: 12
                },
            },
        },
        {
            name: 'guillaume',
            artists: [DoFArtist.Astra],
            class: '',
            nationality: DoFNationality.Musain,
            alt: {
                burned: { artists: [DoFArtist.Astra], chapter: 14 }
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
            blurb: '"... clung grimly to duty. Perhaps he thought his task just, perhaps unjust, but he knew it mattered not."',
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
            blurb: '"... yet still he fought. Though his house had fallen to ruin, he still had his own survival to think of..."',
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
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            blurb: '"... jostling to earn the favour of the new dictator by avenging the old, relentless in pursuit for glory\'s sake..."',
            class: DoFClasses.Outrider,
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
            blurb: '"... felt disrespected by the noble class and came to flourish under the Baron. They fought zealously for new futures..."',
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
            blurb: '"... ringed by all manner of hangers-on,desperate to cling to the proximity of power, gladly laying down their lives..."',
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
            blurb: '"... was to obey the King\'s will, be his instrument in all ways; personal honour was irrelevant before duty..."',
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
            blurb: '"... true warrior-king in every respect. He may not have won his throne fairly, but he would defend it to the death..."',
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
            blurb: '"Seir was notoriously decadent and venal, but his sword-arm had not atrophied... he was still Ondurite."',
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
            blurb: '"... ran his frontier region with an iron fist, always looking with envy towards the capital\'s riches..."',
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
            blurb: '"... felt that Onduris had fallen from greatness, lost sight of its culture. He alone could set it right again..."',
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
            blurb: '"... of the backwater provinces were determined to have their day, long marginalised by aloof corelanders..."',
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
            profileName: 'Varkade Hengeist',
            artists: [DoFArtist.Astra, DoFArtist.Amelia],
            blurb: '"He thought he made me. In a sense, he was right. But I had to unmake him."',
            class: '',
            nationality: DoFNationality.Aukema,
            alt: {
                younger: { artists: [DoFArtist.Astra, DoFArtist.Amelia, DoFArtist.Lumi] }
            },
            routeConfig: {
                allRoute: {
                    npc: 0,
                    enemy: 99
                }
            }
        },
        {
            name: 'sevira',
            artists: [DoFArtist.Amelia],
            class: '',
            nationality: DoFNationality.Aukema,
            routeConfig: {
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
            routeConfig: {
                allRoute: {
                    npc: 6
                }
            }
        },
        {
            name: 'valin',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            blurb: '"... while a staunch and upstanding man could find himself an outlaw with a cruel twist of fate."',
            class: '',
            nationality: DoFNationality.Musain,
            routeConfig: {
                musain: {
                    npc: 6.5
                }
            }
        },
        {
            name: 'merri',
            artists: [DoFArtist.Amelia, DoFArtist.Astra],
            blurb: '"... could stick you up and ruin your life with an irrepressible smile. Little consolation, I imagined, but..."',
            class: '',
            nationality: DoFNationality.Musain,
            routeConfig: {
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
            routeConfig: {
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
            routeConfig: {
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
            routeConfig: {
                onduris: {
                    npc: 10.5
                }
            }
        },
        {
            name: 'agmund',
            altNames: ['Long Taiming', '龍泰銘'],
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Svanhild,
            routeConfig: {
                allRoute: {
                    npc: 17.5
                }
            }
        },
        {
            name: 'bunny',
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Unknown,
            routeConfig: {
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
            routeConfig: {
                allRoute: {
                    npc: 99
                }
            }
        },
        {
            name: 'anna',
            artists: [DoFArtist.Astra],
            nationality: DoFNationality.Unknown,
            routeConfig: {
                musain: {
                    npc: 7
                },
                onduris: {
                    npc: 15
                }
            }
        },
        {
            name: 'mir-katal',
            displayName: 'mir\'Katal',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            blurb: '"... very pinnacle of the Ondurite martial ideal, a man of matchless valour. Fit to lead, but to rule?"',
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            routeConfig: {
                onduris: {
                    enemy: [12, 99],
                    npc: [13, 14]
                }
            },
            alt: {
                dictator: { artists: [DoFArtist.Lumi, DoFArtist.Astra], chapter: 14 }
            },
            conditional: {
                chapter: {
                    chapter: 99,
                    swapPortrait: 'dictator',
                    ogPortraitName: 'mir\'Katal Noble'
                }
            },
        },
        {
            name: 'fleurre',
            profileName: 'Fleurre Domremie',
            blurb: '"...greeted me with a warm smile, but I could see behind her eyes she was appraising me, calculating..."',
            artists: [DoFArtist.Amelia],
            class: DoFClasses.Sage,
            nationality: DoFNationality.Musain,
            routeConfig: {
                musain: {
                    npc: [7, 14],
                    enemy: [12, 99]
                }
            },
            alt: {
                provost: { artists: [DoFArtist.Amelia, DoFArtist.Lumi], chapter: 14 }
            },
            conditional: {
                chapter: {
                    chapter: 99,
                    swapPortrait: 'provost',
                    ogPortraitName: 'Fleurre Chancellor'
                }
            },
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
