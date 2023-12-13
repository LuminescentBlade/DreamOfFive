import Link from "next/link";
import styles from './page.module.scss';

export default function Credits() {
    return <div className={styles.credits}>
        <h1>Credits</h1>
        <em>
        I respectfully acknowledge the Ngunnawal people, the past, present and future custodians of the land where this was produced; I recognise all traditional owners of the region and beyond, and thank them for their contribution to the life and continued health of Country.
        </em>
        <ul className={styles.section}>
            <li>
                <h2>Lead Designer</h2>
                Parrhesia
            </li>
            <li>
                <h2>Art Director</h2>
                Luminescent Blade
            </li>
            <li>
                <h2>Support Aide</h2>
                Seraphknight
            </li>
        </ul>

        <ul className={styles.section}>
            <li>
                <h2>Original Director</h2>
                AstraLunaSol
            </li>
            <li>
                <h2>Portraits</h2>
                See <Link href="/characters#credits">Characters</Link> page
            </li>
            <li>
                <h2>Class Sprites</h2>
                <ul>
                    <li>
                        <h3>
                            Adept (F Monk), Grand Marshal repalette
                        </h3>
                        Teraspark
                    </li>
                    <li>
                        <h3>
                            Archer
                        </h3>
                        Der, Flasuban
                    </li>
                    <li>
                        <h3>
                            Armour, Sentinel
                        </h3>
                        MK404
                    </li>
                    <li>
                        <h3>
                            Ballistician
                        </h3>
                        Arch (class card), Der and Flasuban (mapsprite), Seal (battlesprite)
                    </li>
                    <li>
                        <h3>
                            Bard
                        </h3>
                        UltraFenix
                    </li>
                    <li>
                        <h3>
                            Blademaiden, Drake Knight, Gladiator, Henchwoman, Marksman (Sniper), Juggernaut
                        </h3>
                        Nuramon
                    </li>
                    <li>
                        <h3>
                            Cataphract, Vanguard (repalettes)
                        </h3>
                        Dancer A
                    </li>
                    <li>
                        <h3>
                            Cavalier
                        </h3>
                        SALVAGED, Flasuban, Pikmin
                    </li>
                    <li>
                        <h3>
                            Cleric, Thief (F)
                        </h3>
                        Eldritch
                    </li>
                    <li>
                        <h3>
                            Dreadnought
                        </h3>
                        TBA, Der the Vaporeon, Nuramon, The Big Dedester
                    </li>
                    <li>
                        <h3>
                            Fighter
                        </h3>
                        MK404 and Glenwing (battlesprite), ZoramineFae (mapsprite)
                    </li>
                    <li>
                        <h3>
                            Mercenary
                        </h3>
                        SALVAGED
                    </li>
                    <li>
                        <h3>
                            Paladin
                        </h3>
                        SALVAGED, Leo_link, Flasuban
                    </li>
                    <li>
                        <h3>
                            Pegasus Rider, Seraph Knight, Cleric/Priest (mapsprite)
                        </h3>
                        Flasuban
                    </li>
                    <li>
                        <h3>
                            Berserker, Phantom
                        </h3>
                        TheBlindArcher
                    </li>
                    <li>
                        <h3>
                            Questant
                        </h3>
                        Luminescent Blade, BwdYeti, Nuramon, ErrantShephard, L95
                    </li>
                    <li>
                        <h3>
                            Sage
                        </h3>
                        Levin64
                    </li>
                    <li>
                        <h3>
                            Skirmisher
                        </h3>
                        eCut
                    </li>
                    <li>
                        <h3>
                            Sibyl
                        </h3>
                        HyperGammaSpaces
                    </li>
                    <li>
                        <h3>
                            Soldier, Ironclad
                        </h3>
                        AstraLunaSol
                    </li>
                    <li>
                        <h3>
                            Valkyrie
                        </h3>
                        Greentea
                    </li>
                    <li>
                        <h3>
                            Warrior
                        </h3>
                        Pushwall, Temp
                    </li>
                    <li>
                        <h3>
                            Wyvern Knight (repalette)
                        </h3>
                        Feaw
                    </li>
                    <li>
                        <h3>
                            Enforcer
                        </h3>
                        Luminescent Blade. BwdYeti (battlesprite), Agro (mapsprite)
                    </li>
                </ul>
            </li>
            <li>
                <h2>
                    Maps
                </h2>
                <ul>
                    <li>
                        Dancer A
                    </li>
                    <li>
                        <h3>
                            C12A, C12B
                        </h3>
                        LordGlenn
                    </li>
                    <li>
                        <h3>
                            C14A
                        </h3>
                        RandomWizard
                    </li>
                </ul>
            </li>
            <li>
                <h2>
                    Original Version Credits
                </h2>
                Aeorys, Anti-Social Knight, Amelia, Arch, Callum McMillan, Cam, Dancer A, El Rey Leon, Enjolras, Feaw, Hikarusa, Mariobro3828, Niharu, Jubby, Kai, Ken ZOMG, LordGlenn, Luminescent Blade, Sakusa, Shadowofchaos, Shiny Charmander, SnakeMomMelissa, Vampire Elf, Xiltas
            </li>
            <li>
                <h2>
                    Original Playtesters
                </h2>
                Aethereal, AuraWolf, Blazing_Soul, Cam, Ephraim, Hithere21, Luminescent Blade, Paperblade, Sakusa
            </li>
            <li>
                <h2>Original Hacking Tools</h2>
                Hextator, Nintenlord, Cam
            </li>
            <li>
                <h2>
                    Patches and ASM
                </h2>
                7743, Aera, Agro, Alusq, Aurawolf, Blazer, Brendor, Circleseverywhere, Contro, Dragz, Gryz, Hextator, Huichelaar, Kaito, Nintenlord, Tequila, Tiki, Shinan, Stan, Venno, Vesly, Zane, Zeta
            </li>
            <li>
                <h2>
                    FEBuilder
                </h2>
                7743
            </li>
            <li>
                <h2>
                    Map Palettes
                </h2>
                Epicer, Feier
            </li>
            <li>
                <h2>
                    Inserting / Improving Entire UI
                </h2>
                Epicer
            </li>
            <li>
                <h2>Music</h2>
                A Reliable Chair, Agromono, Alusq, Dolkar, Gustabo, Ken ZOMG, Lemon Tart, Mariobro3828, MrGreen3339, Pandan, Psyche, RandomWizard, RSFlame, SaXor the Nobody, Scraiza, Sme, Surfing Kyogre
            </li>
            <li>
                <h2>Composition - Rena's Journal</h2>
                A Reliable Chair
            </li>
            <li>
                <h2>
                    MMB Formatting
                </h2>
                Catball
            </li>
            <li>
                <h2>
                    Website
                </h2>
                <Link href="https://luminescentblade.dev/">Luminescent Blade</Link>
            </li>
            <li>
                <h2>
                    Special Thanks
                </h2>
                Pandan
            </li>
        </ul>
    </div>
}