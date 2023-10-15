import { DoFClasses } from "../models/enums";

export const DoFUnpromotedClasses = {
    [DoFClasses.Captain]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 10, con: 20}
    },
    [DoFClasses.Henchwoman]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 10, con: 20 }
    },
    [DoFClasses.Fencer]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 10, con: 20 }
    },
    [DoFClasses.Ironclad]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 10, con: 20 }
    },
    [DoFClasses.Mercenary]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 10, con: 20 }
    },
    [DoFClasses.Myrmidon]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 10, con: 20 }
    },
    [DoFClasses.Thief]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 10, con: 20 }
    },
    [DoFClasses.Cleric]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 15, res: 20, con: 20 }
    },
    [DoFClasses.Priest]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 15, res: 20, con: 20 }
    },
    [DoFClasses.PegRider]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 18, res: 18, con: 20 }
    },
    [DoFClasses.Armour]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 15, luk: 30, def: 20, res: 10, con: 20 }
    },
    [DoFClasses.Archer]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 10, con: 20 }
    },
    [DoFClasses.Fighter]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 10, con: 20 }
    },
    [DoFClasses.Troubadour]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 15, res: 20, con: 20 }
    },
    [DoFClasses.Adept]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 15, res: 20, con: 20 }
    },
    [DoFClasses.Mage]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 15, res: 20, con: 20 }
    },
    [DoFClasses.Warlock]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 15, res: 20, con: 20 }
    },
    [DoFClasses.DrakeRider]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 5, con: 20 }
    },
    [DoFClasses.Brigand]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 10, con: 20 }
    },
    [DoFClasses.Raider]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 10, con: 20 }
    },
    [DoFClasses.Cavalier]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 10, con: 20 }
    },
    [DoFClasses.Soldier]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 10, con: 20 }
    },
    [DoFClasses.Skirmisher]: {
        caps: {hp: 60, pow: 20, skl: 20, spd: 20, luk: 30, def: 20, res: 10, con: 20 }
    }
};

export const DoFPromotedClasses = {
    [DoFClasses.Questant]: {
        promo: { hp: 5, pow: 3, skl: 3, spd: 3, luk: 0, def: 3, res: 3, con: 2 },
        caps: { hp: 60, pow: 28, skl: 30, spd: 30, luk: 30, def: 26, res: 20, con: 20 }
    },
    [DoFClasses.Blademaiden]: {
        promo: { hp: 4, pow: 1, skl: 3, spd: 2, luk: 0, def: 3, res: 8, con: 2 },
        caps: { hp: 60, pow: 26, skl: 29, spd: 27, luk: 30, def: 27, res: 30, con: 20 }
    },
    [DoFClasses.Hussar]: {
        promo: { hp: 5, pow: 2, skl: 3, spd: 3, luk: 0, def: 3, res: 0, con: 0 },
        caps: { hp: 60, pow: 26, skl: 29, spd: 28, luk: 30, def: 26, res: 20, con: 20 }
    },
    [DoFClasses.Juggernaut]: {
        promo: { hp: 6, pow: 3, skl: 3, spd: 3, luk: 0, def: 3, res: 3, con: 1 },
        caps: { hp: 60, pow: 30, skl: 28, spd: 25, luk: 30, def: 30, res: 15, con: 20 }
    },
    [DoFClasses.Enforcer]: {
        promo: { hp: 0, pow: 0, skl: 0, spd: 0, luk: 0, def: 0, res: 0, con: 0 },
        caps: { hp: 60, pow: 30, skl: 28, spd: 27, luk: 30, def: 27, res: 15, con: 20 }
    },
    [DoFClasses.Gladiator]: {
        promo: { hp: 4, pow: 2, skl: 3, spd: 2, luk: 0, def: 3, res: 3, con: 1 },
        caps: { hp: 60, pow: 28, skl: 27, spd: 27, luk: 30, def: 28, res: 15, con: 20 }
    },
    [DoFClasses.Bishop]: {
        promo: { hp: 5, pow: 3, skl: 2, spd: 3, luk: 0, def: 1, res: 3, con: 2 },
        caps: { hp: 60, pow: 26, skl: 26, spd: 28, luk: 30, def: 20, res: 30, con: 20 }
    },
    [DoFClasses.SeraphKnight]: {
        promo: { hp: 4, pow: 2, skl: 3, spd: 2, luk: 0, def: 2, res: 4, con: 0 },
        caps: { hp: 60, pow: 25, skl: 28, spd: 30, luk: 30, def: 25, res: 25, con: 20 }
    },
    [DoFClasses.Dreadnought]: {
        promo: { hp: 5, pow: 3, skl: 2, spd: 1, luk: 0, def: 3, res: 3, con: 2 },
        caps: { hp: 60, pow: 29, skl: 27, spd: 20, luk: 30, def: 30, res: 15, con: 20 }
    },
    [DoFClasses.Marksman]: {
        promo: { hp: 5, pow: 2, skl: 3, spd: 1, luk: 0, def: 3, res: 3, con: 2 },
        caps: { hp: 60, pow: 29, skl: 30, spd: 26, luk: 30, def: 27, res: 15, con: 20 }
    },
    [DoFClasses.Warrior]: {
        promo: { hp: 5, pow: 2, skl: 2, spd: 2, luk: 0, def: 3, res: 3, con: 1 },
        caps: { hp: 60, pow: 28, skl: 28, spd: 26, luk: 30, def: 28, res: 15, con: 20 }
    },
    [DoFClasses.Valkyrie]: {
        promo: { hp: 4, pow: 2, skl: 3, spd: 2, luk: 0, def: 3, res: 3, con: 0 },
        caps: { hp: 60, pow: 27, skl: 29, spd: 28, luk: 30, def: 20, res: 29, con: 20 }
    },
    [DoFClasses.Sibyl]: {
        promo: { hp: 4, pow: 3, skl: 2, spd: 2, luk: 0, def: 3, res: 3, con: 0 },
        caps: { hp: 60, pow: 29, skl: 27, spd: 27, luk: 30, def: 20, res: 28, con: 20 }
    },
    [DoFClasses.Sage]: {
        promo: { hp: 4, pow: 2, skl: 3, spd: 2, luk: 0, def: 3, res: 3, con: 1 },
        caps: { hp: 60, pow: 27, skl: 30, spd: 27, luk: 30, def: 20, res: 28, con: 20 }
    },
    [DoFClasses.Sorcerer]: {
        promo: { hp: 5, pow: 3, skl: 3, spd: 1, luk: 0, def: 2, res: 3, con: 2 },
        caps: { hp: 60, pow: 30, skl: 28, spd: 25, luk: 30, def: 20, res: 29, con: 20 }
    },
    [DoFClasses.DrakeKnight]: {
        promo: { hp: 6, pow: 3, skl: 2, spd: 3, luk: 0, def: 3, res: 0, con: 0 },
        caps: { hp: 60, pow: 29, skl: 27, spd: 26, luk: 30, def: 28, res: 10, con: 20 }
    },
    [DoFClasses.Rogue]: {
        promo: { hp: 5, pow: 2, skl: 2, spd: 2, luk: 0, def: 3, res: 3, con: 1 },
        caps: { hp: 60, pow: 25, skl: 26, spd: 30, luk: 30, def: 27, res: 15, con: 20 }
    },
    [DoFClasses.Swordmaster]: {
        promo: { hp: 5, pow: 2, skl: 3, spd: 3, luk: 0, def: 1, res: 3, con: 1 },
        caps: { hp: 60, pow: 26, skl: 29, spd: 30, luk: 30, def: 25, res: 15, con: 20 }
    },
    [DoFClasses.Berserker]: {
        promo: { hp: 5, pow: 3, skl: 1, spd: 2, luk: 0, def: 2, res: 3, con: 2 },
        caps: { hp: 60, pow: 29, skl: 25, spd: 29, luk: 30, def: 26, res: 15, con: 20 }
    },
    [DoFClasses.Paladin]: {
        promo: { hp: 5, pow: 2, skl: 2, spd: 3, luk: 0, def: 2, res: 3, con: 1 },
        caps: { hp: 60, pow: 27, skl: 26, spd: 28, luk: 30, def: 27, res: 20, con: 20 }
    },
    [DoFClasses.Sentinel]: {
        promo: { hp: 5, pow: 1, skl: 3, spd: 2, luk: 0, def: 3, res: 3, con: 1 },
        caps: { hp: 60, pow: 26, skl: 29, spd: 28, luk: 30, def: 27, res: 15, con: 20 }
    },
    [DoFClasses.Outrider]: {
        promo: { hp: 5, pow: 2, skl: 2, spd: 3, luk: 0, def: 2, res: 3, con: 1 },
        caps: { hp: 60, pow: 27, skl: 27, spd: 29, luk: 30, def: 26, res: 15, con: 20 }
    },
    [DoFClasses.Harrier]: {
        promo: { hp: 0, pow: 0, skl: 0, spd: 0, luk: 0, def: 0, res: 0, con: 0 },
        caps: { hp: 60, pow: 26, skl: 27, spd: 28, luk: 30, def: 20, res: 25, con: 20 }
    },
    [DoFClasses.Cataphract]: {
        promo: { hp: 0, pow: 0, skl: 0, spd: 0, luk: 0, def: 0, res: 0, con: 0 },
        caps: { hp: 60, pow: 28, skl: 25, spd: 26, luk: 30, def: 29, res: 15, con: 20 }
    },
    [DoFClasses.Dancer]: {
        caps: {hp: 60, pow: 10, skl: 10, spd: 30, luk: 30, def: 15, res: 30, con: 20}
    },
    [DoFClasses.Bard]: {
        caps: {hp: 60, pow: 10, skl: 10, spd: 30, luk: 30, def: 20, res: 25, con: 20}
    }
}