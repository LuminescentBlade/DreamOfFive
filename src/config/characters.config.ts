import { DoFAffinities, DoFArtist, DoFClasses, DoFNationality, DoFRoute, DoFWeaponType } from "../models/enums";
import { IDoFCharacterConfigs } from "../models/interfaces";
import { DoFNonPlayable } from "./non-playables";
import { DoFPlayable } from "./playables";
import { DoFWeapon } from "./weapons.config";

export const DoFCharacters: IDoFCharacterConfigs = {
    characters: [
        // playables
        ...DoFPlayable,
        ...DoFNonPlayable,
        // minor bosses
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
                        DoFWeapon.LightBrand
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
                        DoFWeapon.IronLongbow
                    ]
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
            nationality: DoFNationality.Musain,
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
            artists: [DoFArtist.Xiltas, DoFArtist.Sev, DoFArtist.Levin],
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
                    stats: { hp: 33, pow: 13, skl: 18, spd: 12, luk: 6, def: 8, res: 14, con: 8 },
                    weapons: [DoFWeapon.Thunder, DoFWeapon.Sleep],
                    ranks: {
                        [DoFWeaponType.Anima]: 181,
                        [DoFWeaponType.Staff]: 121
                    }
                }
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
            class: DoFClasses.Berserker,
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
                    drops: 'Master Seal',
                    optional: true,
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
        // postsplit
        {
            name: 'callad',
            artists: [DoFArtist.Xiltas, DoFArtist.Astra, DoFArtist.Lumi],
            blurb: '"... of the backwater provinces were determined to have their day, long marginalised by aloof corelanders..."',
            class: DoFClasses.Warrior,
            nationality: DoFNationality.Aukema,
            affinity: DoFAffinities.Ice,
            routeConfig: {
                allRoute: {
                    enemy: 16
                }
            },
            bossStats: [
                {
                    chapter: 16,
                    level: 4,
                    stats: { hp: 48, pow: 23, skl: 19, spd: 15, luk: 10, def: 15, res: 4, con: 15 },
                    ranks: { axe: 181, bow: 181 }
                }
            ]
        },
        {
            name: 'brennan',
            artists: [DoFArtist.Lumi],
            blurb: '"... no shortage of men who felt their time had come. That this was the hour to stand and be counted..."',
            class: DoFClasses.Dreadnought,
            nationality: DoFNationality.Aukema,
            affinity: DoFAffinities.Light,
            routeConfig: {
                allRoute: {
                    enemy: 16
                }
            },
            bossStats: [{
                chapter: 16,
                level: 5,
                stats: { hp: 45, pow: 22, skl: 20, spd: 9, luk: 14, def: 24, res: 5, con: 16 },
                ranks: { sword: 181, axe: 71, lance: 251 }
            }]
        },
        {
            name: 'curoi',
            artists: [DoFArtist.Xiltas, DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Sorcerer,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: 17
                }
            },
            affinity: DoFAffinities.Anima,
            bossStats: [{
                optional: true,
                chapter: 17,
                level: 4,
                stats: { hp: 44, pow: 20, skl: 18, spd: 13, luk: 9, def: 13, res: 19, con: 12 },
                ranks: { dark: 181, staff: 121 },
                weapons: ['Ennervation', 'Physic']
            }],
            blurb: `"... saw a way to the top by another's side, not encumbered by blood ties or codes of honour"`
        },
        {
            name: 'raleigh',
            artists: [DoFArtist.Lumi],
            // blurb: '"... of the backwater provinces were determined to have their day, long marginalised by aloof corelanders..."',
            class: DoFClasses.Paladin,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: 17
                }
            },
            bossStats: [{
                chapter: 17,
                level: 6,
                stats: { hp: 41, pow: 17, skl: 17, spd: 23, luk: 16, def: 15, res: 10, con: 10 },
                weapons: ['Spear', 'Silver Sword']
            }],
            blurb: `"The knights of the frontier were loyal, capable folk, hardened by conflict, and able to act decisively in a crisis..."`
        },
        {
            name: 'colwyn',
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Dreadnought,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: 19
                }
            },
            affinity: DoFAffinities.Ice,
            bossStats: [
                {
                    chapter: 19,
                    level: 7,
                    stats: { hp: 48, pow: 23, skl: 19, spd: 12, luk: 13, def: 23, res: 8, con: 15 },
                    weapons: ['Runesword', 'Silver Blade'],
                    ranks: { sword: 251, lance: 121, axe: 181 }
                }
            ],
            blurb: `"... fought with no fervor, just a firm sense of professionalism [...] and a need to bring his men back alive."`
        },
        {
            name: 'hender',
            artists: [DoFArtist.Astra, DoFArtist.Sev, DoFArtist.Lumi],
            blurb: `"Yet some served Farrell with astonishing zeal, truly believing that his ambitions dovetailed with Aukema's "`,
            class: DoFClasses.Sage,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: 21
                }
            },
            bossStats: [
                {
                    chapter: 21,
                    level: 9,
                    stats: { hp: 42, pow: 20, skl: 23, spd: 20, luk: 13, def: 8, res: 25, con: 8 },
                    ranks: {
                        [DoFWeaponType.Anima]: 251,
                        [DoFWeaponType.Staff]: 121
                    },
                    weapons: [
                        'Fimbulvetr',
                        'Thunder',
                        'Physic',
                        'Swift Feather'
                    ]
                }
            ]
        },
        {
            name: 'feona',
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            blurb: `"... of the affluent merchant-class threw their weight behind Farrell, and his hollow promises of limited change..."`,
            class: DoFClasses.Sibyl,
            nationality: DoFNationality.Aukema,
            routeConfig: {
                allRoute: {
                    enemy: 21
                }
            },
            bossStats: [
                {
                    chapter: 21,
                    level: 9,
                    weapons: ['Frodafridh', 'Ennervation', 'Inner Fire'],
                    stats: { hp: 40, pow: 22, skl: 22, spd: 18, luk: 15, def: 12, res: 19, con: 9 },
                    ranks: {
                        [DoFWeaponType.Light]: 251,
                        [DoFWeaponType.Dark]: 251
                    }
                }
            ]
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
            },
            blurb: `"Any man who named himself a 'bandit king' was not long for the throne. But a cannier, cleverer sort might last..."`,
            affinity: DoFAffinities.Light,
            bossStats: [
                {
                    chapter: 17.5,
                    level: 6,
                    class: DoFClasses.Outrider,
                    stats: { hp: 38, pow: 19, skl: 18, spd: 24, luk: 14, def: 14, res: 7, con: 10 },
                    weapons: ['Lightning Kris', 'Silver Bow'],
                    ranks: { sword: 181, bow: 181 }
                }
            ]
        },
        {
            name: 'mhaire',
            artists: [DoFArtist.Lumi, DoFArtist.SeraphKnight],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Aukema,
            blurb: `"... am told she bore all manner of resentment to the old order. War was just a chance to even the odds..."`,
            routeConfig: {
                allRoute: {
                    enemy: 20
                }
            },
            affinity: DoFAffinities.Wind,
            bossStats: [
                {
                    chapter: 20,
                    level: 10,
                    stats: { hp: 43, pow: 18, skl: 25, spd: 24, luk: 22, def: 15, res: 10, con: 8 },
                    weapons: ['Vorpal Sword'],
                    ranks: { sword: 251 }
                }
            ]
        },
        {
            name: 'ascamore',
            artists: [DoFArtist.Sev, DoFArtist.Astra, DoFArtist.Lumi],
            class: DoFClasses.Sentinel,
            nationality: DoFNationality.Aukema,
            blurb: `"I heard later they had been a knight of some renown before the war [...] perhaps they could have served..."`,
            routeConfig: {
                allRoute: {
                    enemy: 20
                }
            },
            bossStats: [
                {
                    chapter: 20,
                    level: 8,
                    stats: { hp: 43, pow: 19, skl: 25, spd: 23, luk: 14, def: 21, res: 4, con: 11 },
                    weapons: ['Spear', 'Vorpal Lance'],
                    ranks: { lance: 251 }
                }
            ]
        },
        {
            name: 'kearney',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            class: DoFClasses.SeraphKnight,
            nationality: DoFNationality.Aukema,
            blurb: `"... years of faithful service, working her way up from the bottom. She thought she knew which way the wind blew..."`,
            routeConfig: {
                allRoute: {
                    enemy: 20
                }
            },
            bossStats: [
                {
                    chapter: 20,
                    level: 7,
                    stats: { hp: 40, pow: 15, skl: 18, spd: 26, luk: 18, def: 13, res: 24, con: 7 },
                    ranks: {
                        [DoFWeaponType.Sword]: 251,
                        [DoFWeaponType.Lance]: 181
                    },
                    weapons: ['Lightning Kris', 'Silver Sword', 'Hrethe Bracer']
                },
            ]
        },
        {
            name: 'dromion',
            class: DoFClasses.Dreadnought,
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            nationality: DoFNationality.Vishara,
            affinity: DoFAffinities.Ice,
            blurb: `"But not all accepted Tamara's rule without question. Some still looked to the fertile east with naked envy..."`,
            routeConfig: {
                allRoute: {
                    enemy: 23
                }
            },
            bossStats: [
                {
                    chapter: 23,
                    level: 11,
                    stats: { hp: 48, pow: 22, skl: 24, spd: 12, luk: 13, def: 25, res: 7, con: 16 },
                    ranks: {
                        [DoFWeaponType.Sword]: 181,
                        [DoFWeaponType.Lance]: 251,
                        [DoFWeaponType.Axe]: 251
                    },
                    weapons: ['Francisca', 'Brave Lance']
                }
            ]
        },
        {
            name: 'miodrag',
            class: DoFClasses.Warrior,
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            nationality: DoFNationality.Vishara,
            routeConfig: {
                allRoute: {
                    enemy: 24
                }
            },
            affinity: DoFAffinities.Fire,
            blurb: `"... that it did not matter what reasons were found, only that some cause did arise to go east and conquer..."`,
            bossStats: [
                {
                    chapter: 24,
                    weapons: ['Brave Axe', 'Brutal Bow'],
                    stats: { hp: 55, pow: 27, skl: 22, spd: 19, luk: 14, def: 17, res: 4, con: 15 },
                    level: 10,
                    ranks: {
                        [DoFWeaponType.Axe]: 251,
                        [DoFWeaponType.Bow]: 251
                    }
                }
            ]
        },
        {
            name: 'demetra',
            class: DoFClasses.Gladiator,
            artists: [DoFArtist.Astra],
            nationality: DoFNationality.Vishara,
            affinity: DoFAffinities.Dark,
            routeConfig: {
                allRoute: {
                    enemy: 24
                }
            },
            blurb: `"... feared breaker of rogue drakes, more adventurer than knight. But she was driven most of all by the need to shed..."`,
            bossStats: [
                {
                    chapter: 24,
                    weapons: ['Brave Sword', 'Scalebreaker'],
                    ranks: {
                        [DoFWeaponType.Sword]: 251,
                        [DoFWeaponType.Axe]: 251
                    },
                    level: 13,
                    stats: { hp: 50, pow: 24, skl: 27, spd: 21, luk: 17, def: 25, res: 5, con: 13 }
                }
            ]
        },
        {
            name: 'jupistra',
            artists: [DoFArtist.Sev],
            class: DoFClasses.Sage,
            nationality: DoFNationality.Musain,
            blurb: `"...has sent with them a young and ambitious sorceress, eager to earn her spurs in this foreign venture..."`,
            routeConfig: {
                musain: {
                    enemy: 24
                }
            },
            affinity: DoFAffinities.Wind,
            bossStats: [
                {
                    chapter: 24,
                    route: DoFRoute.Musain,
                    stats: { hp: 41, pow: 19, skl: 26, spd: 25, luk: 18, def: 8, res: 19, con: 8 },
                    level: 11,
                    weapons: ['Fimbulvetr', 'Sleep'],
                    ranks: {
                        [DoFWeaponType.Anima]: 251,
                        [DoFWeaponType.Staff]: 181
                    }
                }
            ]
        },
        {
            name: 'ri-strelet',
            displayName: `ri'Strelet`,
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Sorcerer,
            nationality: DoFNationality.Onduris,
            routeConfig: {
                onduris: {
                    enemy: 24
                }
            },
            affinity: DoFAffinities.Anima,
            blurb: `"... these impetuous swordsmen are kept in line by a scarred old scholar, a grim but steady man I've come to rely on..."`,
            bossStats: [
                {
                    chapter: 24,
                    route: DoFRoute.Onduris,
                    ranks: {
                        [DoFWeaponType.Dark]: 251,
                        [DoFWeaponType.Staff]: 181,
                    },
                    weapons: ['Fenrir', 'Sleep'],
                    level: 11,
                    stats: { hp: 54, pow: 27, skl: 19, spd: 14, luk: 16, def: 12, res: 23, con: 13 }
                }
            ]
        },
        {
            name: 'razhvan',
            profileName: 'Razhvan Leucrion',
            class: DoFClasses.DrakeKnight,
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            nationality: DoFNationality.Vishara,
            affinity: DoFAffinities.Dark,
            routeConfig: {
                allRoute: {
                    enemy: 25
                }
            },
            bossStats: [
                {
                    chapter: 25,
                    stats: { hp: 46, pow: 22, skl: 25, spd: 21, luk: 18, def: 26, res: 4, con: 10 },
                    ranks: {
                        [DoFWeaponType.Axe]: 181,
                        [DoFWeaponType.Lance]: 251
                    },
                    weapons: ['Spear', 'Brave Lance'],
                    level: 12
                }
            ],
            blurb: `"... not all had the vision to forge their own path. Most lesser lords blindly followed their masters, called it fealty..."`
        },
        {
            name: 'dunois',
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Musain,
            class: DoFClasses.Sentinel,
            routeConfig: {
                musain: {
                    enemy: 26
                }
            },
            affinity: DoFAffinities.Light,
            blurb: `"... a man far unlike his predecessor, a ruthless pragmatist. He would not be blinded by the sheen of self-regard..."`,
            bossStats: [
                {
                    chapter: 26,
                    route: DoFRoute.Musain,
                    level: 11,
                    stats: { hp: 44, pow: 25, skl: 29, spd: 25, luk: 13, def: 20, res: 14, con: 12 },
                    weapons: ['Spear', 'Brave Lance'],
                    ranks: {
                        [DoFWeaponType.Lance]: 251
                    }
                }
            ]
        },
        {
            name: 'vas-parei',
            displayName: `vas'Parei`,
            artists: [DoFArtist.Lumi],
            class: DoFClasses.Swordmaster,
            nationality: DoFNationality.Onduris,
            routeConfig: {
                onduris: {
                    enemy: 26
                }
            },
            bossStats: [
                {
                    chapter: 26,
                    route: DoFRoute.Onduris,
                    level: 11,
                    stats: { hp: 44, pow: 24, skl: 26, spd: 30, luk: 25, def: 14, res: 12, con: 11 },
                    weapons: ['Brave Sword', 'Silver Sword'],
                    ranks: {
                        [DoFWeaponType.Sword]: 251
                    }
                }
            ],
            affinity: DoFAffinities.Wind,
            blurb: `"... believed to be second in ability only to mir'Katal himself. Considered, as well, the most eligible bachelor..."`
        },
        {
            name: 'agrippa',
            affinity: DoFAffinities.Wind,
            profileName: 'Agrippa Tarquinia',
            artists: [DoFArtist.Lumi, DoFArtist.Astra],
            class: DoFClasses.DrakeKnight,
            nationality: DoFNationality.Vishara,
            routeConfig: {
                allRoute: {
                    enemy: 26
                }
            },
            blurb: `"... that Arcus said she was known as 'the Whip-hand of the South', the harshest taskmaster of a harsh land...`,
            bossStats: [
                {
                    chapter: 26,
                    level: 14,
                    stats: { hp: 55, pow: 26, skl: 22, spd: 23, luk: 19, def: 25, res: 2, con: 11 },
                    weapons: ['Francisca', 'Brave Axe', 'Hrethe Bracer'],
                    ranks: {
                        [DoFWeaponType.Axe]: 251,
                        [DoFWeaponType.Lance]: 251
                    }
                }
            ]
        },
        {
            name: 'astaroth',
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Musain,
            class: 'Dragon',
            affinity: DoFAffinities.Dark,
            routeConfig: {
                musain: {
                    enemy: 27
                }
            },
            bossStats: [
                {
                    chapter: 27,
                    level: 20,
                    route: DoFRoute.Musain,
                    weapons: ['Annihilation'],
                    stats: { hp: 80, pow: 30, skl: 26, spd: 19, luk: 12, def: 26, res: 24, con: 25 }
                }
            ],
            blurb: `"... eyes smouldering with a cold, all-consuming hatred for all that had dared live on without him..."`
        },
        {
            name: 'faulinei',
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Musain,
            class: 'Dragon',
            affinity: DoFAffinities.Wind,
            routeConfig: {
                musain: {
                    enemy: 27
                }
            },
            bossStats: [
                {
                    chapter: 27,
                    level: 20,
                    route: DoFRoute.Musain,
                    weapons: ['Annihilation'],
                    stats: { hp: 80, pow: 27, skl: 28, spd: 20, luk: 17, def: 29, res: 21, con: 25 }
                }
            ],
            blurb: `"... seemed almost amused by our pains. There was a timelessness to her mirth, as though she had seen it all..."`
        },
        {
            name: 'nosfentor',
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Musain,
            class: 'Dragon',
            affinity: DoFAffinities.Anima,
            routeConfig: {
                musain: {
                    enemy: 27
                }
            },
            bossStats: [
                {
                    chapter: 27,
                    level: 20,
                    route: DoFRoute.Musain,
                    weapons: ['Annihilation'],
                    stats: { hp: 80, pow: 25, skl: 30, spd: 17, luk: 8, def: 27, res: 29, con: 25 }
                }
            ],
            blurb: `"... accounts of one of the last to fall, with his lonely cries ringing out in the sulphuric skies of Gral Sethes..."`
        },
        {
            name: 'jin-sei_deadlord',
            displayName: `Deadlord jin'Sei`,
            artists: [DoFArtist.Astra, DoFArtist.Lumi],
            nationality: DoFNationality.Onduris,
            affinity: DoFAffinities.Wind,
            routeConfig: {
                onduris: {
                    enemy: 27
                }
            },
            class: DoFClasses.Swordmaster,
            bossStats:[
                {
                    chapter: 27,
                    route: DoFRoute.Onduris,
                    level: 15,
                    stats: { hp: 60, pow: 20, skl: 29, spd: 30, luk: 0, def: 15, res: 15, con: 8 },
                    weapons: ['Reforged Sword', 'Serendipity Ring'],
                    ranks: {
                        [DoFWeaponType.Sword]: 251
                    }
                }
            ],
            blurb: `"(711 - 716) Reign marred by instability and rampant corruption, leading to dynastic collapse."`
        },
        {
            name: 'jin-tir_deadlord',
            displayName: `Deadlord jin'Tir`,
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Onduris,
            affinity: DoFAffinities.Light,
            routeConfig: {
                onduris: {
                    enemy: 27
                }
            },
            class: DoFClasses.Swordmaster,
            bossStats:[
                {
                    chapter: 27,
                    route: DoFRoute.Onduris,
                    level: 15,
                    stats: { hp: 55, pow: 23, skl: 29, spd: 30, luk: 0, def: 15, res: 15, con: 8 },
                    weapons: ['Reforged Sword', 'Serendipity Ring'],
                    ranks: {
                        [DoFWeaponType.Sword]: 251
                    }
                }
            ],
            blurb: `"(702 - 711) Fatally, believed that unimpeachable personal honour would be enough for his nation."`
        },
        {
            name: 'jin-kal_deadlord',
            displayName: `Deadlord jin'Kal II`,
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Onduris,
            affinity: DoFAffinities.Anima,
            routeConfig: {
                onduris: {
                    enemy: 27
                }
            },
            class: DoFClasses.Swordmaster,
            bossStats:[
                {
                    chapter: 27,
                    route: DoFRoute.Onduris,
                    level: 15,
                    stats: { hp: 60, pow: 20, skl: 29, spd: 30, luk: 0, def: 18, res: 15, con: 8 },
                    weapons: ['Reforged Sword', 'Serendipity Ring'],
                    ranks: {
                        [DoFWeaponType.Sword]: 251
                    }
                }
            ],
            blurb: `"(688 - 702) Could not live up to his namesake's example."`
        },
        // other
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
            },
            affinity: DoFAffinities.Fire,
            level: 8,
            stats: { hp: 40, pow: 13, skl: 10, spd: 8, luk: 7, def: 5, res: 0, con: 13 },
            ranks: { [DoFWeaponType.Axe]: 71 },

            npcStats: [
                { chapter: 10, route: DoFRoute.Musain },
                { chapter: 6.5, route: DoFRoute.Musain, weapons: [DoFWeapon.Hatchet, DoFWeapon.Lucene, 'Potion'] }
            ]
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
            },
            affinity: DoFAffinities.Wind,
            level: 8,
            stats: { hp: 22, pow: 9, skl: 18, spd: 18, luk: 14, def: 4, res: 7, con: 8 },
            ranks: { [DoFWeaponType.Sword]: 71 },
            npcStats: [
                { chapter: 10, route: DoFRoute.Musain, talk: true },
                { chapter: 6.5, route: DoFRoute.Musain, weapons: [DoFWeapon.KillingEdge, DoFWeapon.SlimSword, 'Potion'] }
            ]
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
            name: 'tamara',
            profileName: 'Tamara Vorenia',
            displayName: 'Tamara',
            altNames: ['Queen of Vishara'],
            artists: [DoFArtist.Lumi],
            nationality: DoFNationality.Vishara,
            height: 180,
            routeConfig: {
                allRoute: {
                    npc: 23
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
