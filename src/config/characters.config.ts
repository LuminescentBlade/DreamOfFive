import { DoFAffinities, DoFArtist, DoFClasses, DoFNationality, DoFRoute, DoFWeaponType } from "../models/enums";
import { IDoFCharacterConfigs } from "../models/interfaces";
import { DoFPlayable } from "./playables";
import { DoFWeapon } from "./weapons.config";

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
            },
            level: 6,
            affinity: DoFAffinities.Light,
            bossStats: [
                {
                    chapter: 1,
                    stats: { hp: 33, pow: 11, skl: 6, spd: 9, luk: 4, def: 7, res: 1, con: 13 },
                    ranks: {
                        [DoFWeaponType.Axe]: 71
                    },
                    weapons: [
                        DoFWeapon.HandAxe,
                        DoFWeapon.Hatchet
                    ]
                }
            ]
        },
        {
            name: 'darrick',
            artists: [DoFArtist.Astra],
            blurb: '"Brigands are no fools, but a brute can certainly force his way near the top on the strength of his arm alone..."',
            class: DoFClasses.Fighter,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: 2
                }
            },
            level: 7,
            affinity: DoFAffinities.Fire,
            bossStats: [
                {
                    chapter: 2,
                    stats: { hp: 29, pow: 10, skl: 11, spd: 9, luk: 6, def: 8, res: 0, con: 10 },
                    ranks: {
                        [DoFWeaponType.Axe]: 71
                    },
                    weapons: [
                        DoFWeapon.HandAxe,
                        DoFWeapon.Hatchet
                    ]
                }
            ]
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
            },
            level: 8,
            affinity: DoFAffinities.Fire,
            bossStats: [
                {
                    chapter: 3,
                    stats: { hp: 29, pow: 10, skl: 12, spd: 11, luk: 3, def: 8, res: 1, con: 11 },
                    ranks: {
                        [DoFWeaponType.Sword]: 181
                    },
                    weapons: [
                        DoFWeapon.Flametongue
                    ]
                }
            ]
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
            },
            level: 6,
            affinity: DoFAffinities.Thunder,
            bossStats: [
                {
                    chapter: 3,
                    stats: { hp: 25, pow: 13, skl: 11, spd: 8, luk: 6, def: 11, res: 0, con: 11 },
                    ranks: {
                        [DoFWeaponType.Bow]: 71
                    },
                    weapons: [
                        DoFWeapon.SteelBow,
                        DoFWeapon.IronLongbow
                    ]
                }
            ]
        },
        {
            name: 'sorcha',
            profileName: 'Sorcha Farrell',
            artists: [DoFArtist.Sev],
            blurb: '"Fluid gestures wove fire in intricate, deadly patterns, but my eyes were on hers... cold, onyx-dark..."',
            class: DoFClasses.Harrier,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: [2, 3, 99]
                }
            },
            level: 12,
            affinity: DoFAffinities.Fire,
            alt: {
                final: { artists: [DoFArtist.Sev], chapter: 99, isSpoiler: true }
            },
            conditional: {
                chapter: {
                    chapter: 99,
                    swapPortrait: 'final',
                    ogPortraitName: 'Sorcha c3'
                }
            },
            height: 171,
            bossStats: [
                {
                    chapter: 2,
                    weapons: [DoFWeapon.Fimbulvetr],
                    stats: { hp: 46, pow: 18, skl: 22, spd: 24, luk: 16, def: 8, res: 20, con: 6 },
                    ranks: {
                        [DoFWeaponType.Anima]: 251,
                        [DoFWeaponType.Staff]: 181
                    },
                    optional: true
                }
            ]
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
            level: 12,
            affinity: DoFAffinities.Fire,
            bossStats: [
                {
                    chapter: 4, 
                    stats: { hp: 33, pow: 12, skl: 10, spd: 11, luk: 4, def: 10, res: 2, con: 9 },
                    ranks: {
                        [DoFWeaponType.Lance]: 121,
                        [DoFWeaponType.Sword]: 31
                    },
                    weapons: [
                        DoFWeapon.SteelLance,
                        DoFWeapon.ShortSpear
                    ]
                }
            ]
        },
        {
            name: 'farrell',
            profileName: 'Cuthbert Farrell',
            epithet: 'The Pursuer',
            artists: [DoFArtist.Sev, DoFArtist.Astra, DoFArtist.TBA],
            class: DoFClasses.FirstLance,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                onduris: {
                    enemy: [8, 9, 10, 99],
                    npc: 4
                },
                musain: {
                    enemy: 99,
                    npc: 4
                }
            },
            affinity: DoFAffinities.Ice,
            bossStats: [
                { chapter: 10, gameOver: true, route: DoFRoute.Onduris, optional: true },
                { chapter: 9, gameOver: true, route: DoFRoute.Onduris, optional: true },
                { chapter: 8, gameOver: true, route: DoFRoute.Onduris, optional: true },

            ],
            height: 185,
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
            level: 14,
            affinity: DoFAffinities.Ice,
            bossStats: [
                {
                    chapter: 5,
                    stats: { hp: 36, pow: 14, skl: 12, spd: 6, luk: 8, def: 16, res: 3, con: 14 },
                    ranks: {
                        [DoFWeaponType.Lance]: 181
                    },
                    weapons: [
                        DoFWeapon.ShortSpear
                    ]
                }
            ]
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
            level: 20,
            affinity: DoFAffinities.Anima,
            bossStats: [
                {
                    chapter: 6,
                    stats: { hp: 40, pow: 15, skl: 13, spd: 6, luk: 7, def: 14, res: 8, con: 14 },
                    ranks: {
                        [DoFWeaponType.Lance]: 181
                    },
                    weapons: [
                        DoFWeapon.ShortSpear
                    ]
                }
            ]
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
            },
            level: 2,
            affinity: DoFAffinities.Anima,
            bossStats: [
                {
                    chapter: 6.5,
                    route: DoFRoute.Musain,
                    stats: { hp: 31, pow: 12, skl: 19, spd: 16, luk: 2, def: 11, res: 3, con: 8 },
                    weapons: [DoFWeapon.SilverSword],
                    ranks: {
                        [DoFWeaponType.Sword]: 181
                    }
                }
            ]
        },
        {
            name: 'vicentyr',
            artists: [DoFArtist.Xiltas, DoFArtist.Sev],
            blurb: '"... officer class of warrior-scholars, taught in tactics, leadership, arithmetic, rhetoric and even philosophy..."',
            class: DoFClasses.Sage,
            nationality: DoFNationality.Musain,
            routeConfig: {
                musain: {
                    enemy: 7
                }
            },
            affinity: DoFAffinities.Fire,
            level: 3,
            bossStats: [
                {
                    chapter: 7,
                    route: DoFRoute.Musain,
                    stats: { hp: 33, pow: 13, skl: 18, spd: 12, luk: 6, def: 8, res: 14, con: 10 },
                    weapons: [DoFWeapon.Thunder, DoFWeapon.Sleep],
                    ranks: {
                        [DoFWeaponType.Anima]: 181,
                        [DoFWeaponType.Staff]: 121
                    }
                }
            ]

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
            },
            height: 168,    
            level: 4,
            affinity: DoFAffinities.Fire,
            bases: { hp: 35, pow: 18, skl: 16, spd: 16, luk: 30, def: 11, res: 8, con: 9 },
            epithet: "Twice Born",
            bossStats: [
                { chapter: 13, route: DoFRoute.Musain, weapons: [DoFWeapon.Frodafridh, DoFWeapon.Fenrir], drops: 'Horseshoe' },
                { chapter: 8, route: DoFRoute.Musain, weapons: [DoFWeapon.Ennervation], optional: true }
            ]

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
            },
            affinity: DoFAffinities.Ice,
            level: 4,
            bossStats: [
                {
                    chapter: 8,
                    route: DoFRoute.Musain,
                    stats: { hp: 35, pow: 14, skl: 18, spd: 15, luk: 7, def: 12, res: 7, con: 11 },
                    weapons: [DoFWeapon.Spear],
                    ranks: {
                        [DoFWeaponType.Lance]: 181,
                    },
                    drops: 'Master Seal',
                    optional: true,
                }
            ]

        },
        {
            name: 'jayson',
            displayName: 'The Maul',
            artists: [DoFArtist.Lumi],
            blurb: '"...yet the rebellion under such a man would grind to nothing He was little more than a common thug..."',
            class: DoFClasses.Gladiator,
            nationality: DoFNationality.Musain,
            routeConfig: {
                musain: {
                    enemy: 9
                }
            },
            affinity: DoFAffinities.Thunder,
            level: 4,
            bossStats: [
                {
                    chapter: 9,
                    route: DoFRoute.Musain,
                    stats: { hp: 43, pow: 21, skl: 14, spd: 17, luk: 8, def: 7, res: 4, con: 15 },
                    weapons: [DoFWeapon.BattleAxe],
                    ranks: {
                        [DoFWeaponType.Axe]: 181,
                    }
                }
            ]

        },
        {
            name: 'etrusque',
            blurb: '"...flexing what little power he had, relishing in twisting a knife into the weak. I am no saint. But he..."',
            artists: [DoFArtist.Astra, DoFArtist.Xiltas],
            class: DoFClasses.Dreadnought,
            nationality: DoFNationality.Musain,
            epithet: 'The Hooked Knife',
            routeConfig: {
                musain: {
                    enemy: 10
                }
            },
            level: 4,
            affinity: DoFAffinities.Anima,
            bossStats: [
                {
                    chapter: 10,
                    route: DoFRoute.Musain,
                    stats: { hp: 41, pow: 19, skl: 17, spd: 8, luk: 8, def: 22, res: 3, con: 17 },
                    weapons: [DoFWeapon.SilverLance],
                    ranks: {
                        [DoFWeaponType.Sword]: 71,
                        [DoFWeaponType.Axe]: 121,
                        [DoFWeaponType.Lance]: 181
                    },
                    drops: DoFWeapon.SilverLance
                }
            ]

        },
        {
            name: 'preuval',
            blurb: '"...relentless in pursuit, He threw forward man after man, but when the time came, he did not flinch..."',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Gladiator,
            nationality: DoFNationality.Musain,
            routeConfig: {
                musain: {
                    enemy: 11
                }
            },
            level: 6,
            affinity: DoFAffinities.Dark,
            bossStats: [
                {
                    chapter: 11,
                    route: DoFRoute.Musain,
                    stats: { hp: 42, pow: 18, skl: 20, spd: 15, luk: 6, def: 16, res: 7, con: 12 },
                    weapons: [DoFWeapon.LightBrand, DoFWeapon.SilverBlade],
                    ranks: {
                        [DoFWeaponType.Sword]: 181,
                        [DoFWeaponType.Axe]: 121
                    }
                }
            ]

        },
        {
            name: 'uther',
            profileName: 'Uther Dalencyn',
            blurb: '"He had every chance to turn against the Provost, but in the end, he valued his honour most highly..."',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            class: DoFClasses.FirstLance,
            nationality: DoFNationality.Musain,
            height: 182,
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
            affinity: DoFAffinities.Ice,
            level: 7,
            bossStats: [
                {
                    chapter: 12,
                    route: DoFRoute.Musain,
                    stats: { hp: 36, pow: 17, skl: 20, spd: 19, luk: 7, def: 12, res: 10, con: 11 },
                    weapons: [DoFWeapon.Spear],
                    ranks: {
                        [DoFWeaponType.Lance]: 251
                    },
                    drops: DoFWeapon.Spear
                }
            ],
            gateProfileDetailsChapter: 12
        },
        {
            name: 'guillaume',
            artists: [DoFArtist.Astra],
            class: DoFClasses.Sage,
            nationality: DoFNationality.Musain,
            alt: {
                burned: { artists: [DoFArtist.Astra], chapter: 14 }
            },
            routeConfig: {
                musain: {
                    npc: 7,
                    enemy: 14
                }
            },
            affinity: DoFAffinities.Anima,
            level: 8,
            height: 172,
            bossStats: [
                {
                    chapter: 14,
                    route: DoFRoute.Musain,
                    stats: { hp: 40, pow: 19, skl: 20, spd: 14, luk: 6, def: 12, res: 15, con: 9 },
                    weapons: [DoFWeapon.Fimbulvetr, DoFWeapon.Thunder, DoFWeapon.Silence],
                    ranks: {
                        [DoFWeaponType.Anima]: 181,
                        [DoFWeaponType.Staff]: 181
                    }
                }
            ],
            gateProfileDetailsChapter: 14

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
            },
            affinity: DoFAffinities.Ice,
            level: 3,
            bossStats: [
                {
                    chapter: 7,
                    route: DoFRoute.Onduris,
                    stats: { hp: 36, pow: 15, skl: 14, spd: 11, luk: 7, def: 13, res: 4, con: 12 },
                    weapons: [DoFWeapon.SilverAxe, DoFWeapon.LightBrand],
                    ranks: {
                        [DoFWeaponType.Sword]: 121,
                        [DoFWeaponType.Axe]: 121
                    },
                    drops: 'Unequipped Weapon'
                }
            ]
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
            },
            affinity: DoFAffinities.Dark,
            level: 3,
            bossStats: [
                {
                    chapter: 8,
                    route: DoFRoute.Onduris,
                    stats: { hp: 35, pow: 12, skl: 18, spd: 17, luk: 4, def: 8, res: 5, con: 8 },
                    weapons: [DoFWeapon.SteelSword],
                    ranks: {
                        [DoFWeaponType.Sword]: 121
                    }
                }
            ]
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
            },
            affinity: DoFAffinities.Wind,
            level: 6,
            bossStats: [
                {
                    chapter: 9,
                    route: DoFRoute.Onduris,
                    stats: { hp: 37, pow: 14, skl: 14, spd: 17, luk: 11, def: 9, res: 7, con: 9 },
                    weapons: [DoFWeapon.SilverBow, DoFWeapon.KillingEdge],
                    ranks: {
                        [DoFWeaponType.Sword]: 121,
                        [DoFWeaponType.Bow]: 121
                    }
                }
            ]
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
            },
            affinity: DoFAffinities.Light,
            level: 3,
            bossStats: [
                {
                    chapter: 10,
                    route: DoFRoute.Onduris,
                    stats: { hp: 35, pow: 11, skl: 16, spd: 15, luk: 13, def: 5, res: 14, con: 8 },
                    weapons: [DoFWeapon.Bolting, DoFWeapon.Thunder],
                    ranks: {
                        [DoFWeaponType.Anima]: 181,
                        [DoFWeaponType.Staff]: 71
                    },
                    drops: 'Master Seal'
                }
            ]
        },
        {
            name: 'timon',
            artists: [DoFArtist.Lumi],
            blurb: '"... ringed by all manner of hangers-on,desperate to cling to the proximity of power, gladly laying down their lives..."',
            class: DoFClasses.Warrior,
            nationality: DoFNationality.Onduris,
            routeConfig: {
                onduris: {
                    enemy: 12
                }
            },
            level: 4,
            affinity: DoFAffinities.Fire,
            bossStats: [
                {
                    chapter: 12, route: DoFRoute.Onduris,
                    stats: { hp: 45, pow: 19, skl: 17, spd: 12, luk: 7, def: 15, res: 4, con: 14 },
                    weapons: [DoFWeapon.SilverAxe, DoFWeapon.SilverLongbow],
                    ranks: {
                        [DoFWeaponType.Axe]: 181,
                        [DoFWeaponType.Bow]: 181
                    },
                    optional: true

                }
            ]
        },
        {
            name: 'a-vosa',
            displayName: 'a\'Vosa',
            artists: [DoFArtist.Char],
            blurb: '"... was to obey the King\'s will, be his instrument in all ways; personal honour was irrelevant before duty..."',
            class: DoFClasses.Sentinel,
            nationality: DoFNationality.Onduris,
            height: 185,
            routeConfig: {
                onduris: {
                    enemy: 11,
                    npc: 9
                }
            },
            affinity: DoFAffinities.Light,
            level: 5,
            bossStats: [
                {
                    chapter: 13,
                    route: DoFRoute.Onduris,
                    stats: { hp: 41, pow: 15, skl: 19, spd: 16, luk: 7, def: 13, res: 9, con: 13 },
                    weapons: [DoFWeapon.Spear],
                    ranks: {
                        [DoFWeaponType.Lance]: 181
                    }
                }
            ],
            gateProfileDetailsChapter: 11

        },
        {
            name: 'jin-sei',
            displayName: 'jin\'Sei',
            artists: [DoFArtist.Astra],
            blurb: '"... true warrior-king in every respect. He may not have won his throne fairly, but he would defend it to the death..."',
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            affinity: DoFAffinities.Wind,
            height: 175,
            epithet: 'The Tyrant',
            routeConfig: {
                onduris: {
                    enemy: 13,
                    npc: 9
                }
            },
            level: 8,
            bossStats: [
                {
                    chapter: 13,
                    route: DoFRoute.Onduris,
                    stats: { hp: 35, pow: 16, skl: 19, spd: 19, luk: 6, def: 10, res: 6, con: 9 },
                    weapons: [DoFWeapon.Sophrosyne], // do stat bonuses later
                    ranks: {
                        [DoFWeaponType.Sword]: 251
                    }
                }
            ],
            gateProfileDetailsChapter: 13
        },
        {
            name: 'sel-seir',
            displayName: 'sel\'Seir',
            artists: [DoFArtist.Lumi, DoFArtist.Sev],
            blurb: '"Seir was notoriously decadent and venal, but his sword-arm had not atrophied... he was still Ondurite."',
            class: DoFClasses.Swordmaster,
            height: 172,
            nationality: DoFNationality.Onduris,
            routeConfig: {
                onduris: {
                    enemy: 14,
                    npc: 9
                }
            },
            affinity: DoFAffinities.Wind,
            level: 3,
            bossStats: [
                {
                    chapter: 14,
                    route: DoFRoute.Onduris,
                    stats: { hp: 32, pow: 13, skl: 18, spd: 23, luk: 8, def: 8, res: 12, con: 8 },
                    weapons: [DoFWeapon.SilverSword], // do stat bonuses later
                    ranks: {
                        [DoFWeaponType.Sword]: 181
                    },
                    drops: 'Diamond Gem'
                }
            ],
            gateProfileDetailsChapter: 14
        },
        {
            name: 'mei-doru',
            displayName: 'mei\'Doru',
            artists: [DoFArtist.Astra],
            blurb: '"... ran his frontier region with an iron fist, always looking with envy towards the capital\'s riches..."',
            class: DoFClasses.Outrider,
            height:168,
            nationality: DoFNationality.Onduris,
            routeConfig: {
                onduris: {
                    enemy: 14,
                    npc: 9
                }
            },
            affinity: DoFAffinities.Ice,
            level: 4,
            bossStats: [
                {
                    chapter: 14,
                    route: DoFRoute.Onduris,
                    stats: { hp: 35, pow: 16, skl: 15, spd: 19, luk: 7, def: 13, res: 7, con: 9 },
                    weapons: [DoFWeapon.SilverBow, DoFWeapon.Rapier], // do stat bonuses later
                    ranks: {
                        [DoFWeaponType.Sword]: 121,
                        [DoFWeaponType.Bow]: 181
                    }
                }
            ],
            gateProfileDetailsChapter: 14
        },
        {
            name: 'ka-danos',
            displayName: 'ka\'Danos',
            artists: [DoFArtist.Lumi],
            blurb: '"... felt that Onduris had fallen from greatness, lost sight of its culture. He alone could set it right again..."',
            class: DoFClasses.Gladiator,
            nationality: DoFNationality.Onduris,
            height: 180,
            routeConfig: {
                onduris: {
                    enemy: 14,
                    npc: 9
                }
            },
            affinity: DoFAffinities.Thunder,
            level: 6,
            bossStats: [
                {
                    chapter: 14,
                    route: DoFRoute.Onduris,
                    stats: { hp: 43, pow: 22, skl: 19, spd: 14, luk: 4, def: 17, res: 4, con: 12 },
                    weapons: [DoFWeapon.Francisca, DoFWeapon.BraveSword], // do stat bonuses later
                    ranks: {
                        [DoFWeaponType.Sword]: 181,
                        [DoFWeaponType.Axe]: 251
                    },
                    drops: 'Master Seal'
                }
            ],
            gateProfileDetailsChapter: 14
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
            artists: [DoFArtist.Astra, DoFArtist.Sev],
            blurb: '"He thought he made me. In a sense, he was right. But I had to unmake him."',
            class: '',
            nationality: DoFNationality.Aukema,
            alt: {
                younger: { artists: [DoFArtist.Astra, DoFArtist.Sev, DoFArtist.Lumi] }
            },
            routeConfig: {
                allRoute: {
                    npc: 0,
                    enemy: 99
                }
            },
            height: 172,
            gateProfileDetailsChapter: 99,
        },
        {
            name: 'sevira',
            artists: [DoFArtist.Sev],
            class: '',
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    npc: 6
                }
            },
            height: 160,
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
            },
            height: 176,
            gateProfileDetailsChapter: 99
        },
        {
            name: 'valin',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            blurb: '"... while a staunch and upstanding man could find himself an outlaw with a cruel twist of fate."',
            class: DoFClasses.Brigand,
            nationality: DoFNationality.Musain,
            routeConfig: {
                musain: {
                    npc: 6.5
                }
            }
        },
        {
            name: 'merri',
            artists: [DoFArtist.Sev, DoFArtist.Astra],
            blurb: '"... could stick you up and ruin your life with an irrepressible smile. Little consolation, I imagined, but..."',
            class: DoFClasses.Myrmidon,
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
            artists: [DoFArtist.Sev, DoFArtist.Lumi],
            nationality: DoFNationality.Aukema,
            routeConfig: {
                onduris: {
                    npc: 10.5
                }
            }
        },
        {
            name: 'ethelrena',
            artists: [DoFArtist.Sev, DoFArtist.Lumi],
            nationality: DoFNationality.Aukema,
            isSpoiler: true,
            alt: {
                blood: { artists: [DoFArtist.Sev, DoFArtist.Lumi] }
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
            artists: [DoFArtist.Sev],
            nationality: DoFNationality.Vishara,
            isSpoiler: true,
            routeConfig: {
                allRoute: {
                    npc: 99
                }
            }
        },
        {
            name: 'demetra',
            displayName: 'Demetra',
            artists: [DoFArtist.Astra],
            nationality: DoFNationality.Vishara,
            affinity: DoFAffinities.Dark,
            routeConfig: {
                allRoute: {
                    enemy: 99
                }
            },
            isSpoiler: true,
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
        },
        {
            name: 'mir-katal',
            displayName: 'mir\'Katal',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            blurb: '"... very pinnacle of the Ondurite martial ideal, a man of matchless valour. Fit to lead, but to rule?"',
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            epithet: 'The Oathkeeper',
            routeConfig: {
                onduris: {
                    enemy: [12, 99],
                    npc: [13, 14]
                }
            },
            height: 177,
            affinity: DoFAffinities.Light,
            alt: {
                dictator: { artists: [DoFArtist.Lumi, DoFArtist.Astra], chapter: 14 }
            },
            level: 16,
            conditional: {
                chapter: {
                    chapter: 99,
                    swapPortrait: 'dictator',
                    ogPortraitName: 'mir\'Katal Noble',
                    level: 20
                }
            },
            bossStats: [
                {
                    chapter: 12,
                    route: DoFRoute.Onduris,
                    stats: { hp: 52, pow: 24, skl: 29, spd: 27, luk: 16, def: 18, res: 13, con: 8 },
                    weapons: [DoFWeapon.VorpalSword, 'Serendipity Ring'],
                    ranks: {
                        [DoFWeaponType.Sword]: 251
                    },
                    talk: true,
                    gameOver: true,
                    level: 16,
                    //serendipity ring
                }
            ]
        },
        {
            name: 'fleurre',
            profileName: 'Fleurre Domremie',
            blurb: '"...greeted me with a warm smile, but I could see behind her eyes she was appraising me, calculating..."',
            artists: [DoFArtist.Sev],
            class: DoFClasses.Sage,
            nationality: DoFNationality.Musain,
            height: 163,
            routeConfig: {
                musain: {
                    npc: [7, 13],
                    enemy: [12, 99]
                }
            },
            epithet: 'Mask In Shadows',
            affinity: DoFAffinities.Wind,
            alt: {
                provost: { artists: [DoFArtist.Sev, DoFArtist.Lumi], chapter: 14 }
            },
            level: 6,
            conditional: {
                chapter: {
                    chapter: 99,
                    swapPortrait: 'provost',
                    ogPortraitName: 'Fleurre Chancellor',
                    level: 20
                }
            },
            bossStats: [
                {
                    chapter: 12,
                    route: DoFRoute.Musain,
                    stats: { hp: 34, pow: 18, skl: 24, spd: 16, luk: 9, def: 7, res: 18, con: 9 },
                    weapons: [DoFWeapon.Thunder],
                    level: 6,
                    ranks: {
                        [DoFWeaponType.Anima]: 181,
                        [DoFWeaponType.Staff]: 121
                    },
                    talk: true,
                    gameOver: true
                }
            ],
            gateProfileDetailsChapter: 12
        }

    ],
    shopkeepers: [
        {
            name: 'armory',
            displayName: 'Armory Gara',
            artists: [DoFArtist.Sev, DoFArtist.Lumi]
        },
        {
            name: 'vendor',
            displayName: 'Vendor Sorina',
            artists: [DoFArtist.Sev, DoFArtist.Lumi],
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
            artists: [DoFArtist.Sev],
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
            artists: [DoFArtist.TBA, DoFArtist.Sev],
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
            artists: [DoFArtist.Sev],
        },
        {
            name: 'woman1',
            artists: [DoFArtist.Sev],
        },
        {
            name: 'woman2',
            artists: [DoFArtist.Sev],
        },
        {
            name: 'woman3',
            artists: [DoFArtist.Sev],
        },
        {
            name: 'woman4',
            artists: [DoFArtist.Sev, DoFArtist.Lumi],
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
            artists: [DoFArtist.Sev],
        },
        {
            name: 'oldman',
            displayName: 'Old Man',
            artists: [DoFArtist.Astra],
        },
    ]
};
