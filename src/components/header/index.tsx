'use client';

import Link from "next/link";
import Toggle from "../toggle";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";
import Overlay from "../overlay";

let init = false;
export default function Header() {
    const darkModeKey = 'dof-darkmode';
    const retinaKey = 'dof-retina';
    const [headerState, setHeaderState] = useState({ dark: false, mobileOpen: false, settingsOpen: false, retina: false });
    useEffect(() => {
        const preferDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const localDarkContent = window.localStorage.getItem(darkModeKey);
        const isRetina = window.devicePixelRatio > 1;
        const localRetinaContent = window.localStorage.getItem(retinaKey);
        let isCachedDark = false;
        let isCachedRetina = false;
        if (localDarkContent) {
            isCachedDark = localDarkContent === `${true}`;
        } else {
            window.localStorage.setItem(darkModeKey, `${preferDark}`);
            isCachedDark = preferDark;
        }

        if(localRetinaContent){
            isCachedRetina = localRetinaContent === `${true}`;
        } else {
            window.localStorage.setItem(retinaKey, `${isRetina}`);
            isCachedRetina = isRetina;
        }

        if (!init) {
            setBodyDark(isCachedDark);
            setBodyRetina(isCachedRetina);
            init = true;
        }
        if (isCachedDark !== headerState.dark) {
            setHeaderState({ ...headerState, dark: isCachedDark });
        }
    });

    function toggleDarkMode() {
        const nextDarkModeState = !headerState.dark;
        window.localStorage.setItem(darkModeKey, `${nextDarkModeState}`);
        setBodyDark(nextDarkModeState);
        setHeaderState({ ...headerState, dark: nextDarkModeState });
    }

    function setBodyDark(isDarkMode: boolean) {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    function setBodyRetina(isRetina: boolean){
        if (isRetina) {
            document.body.classList.add('retina');
        } else {
            document.body.classList.remove('retina');
        }
    }

    function toggleMobileMenu() {
        setHeaderState({ ...headerState, mobileOpen: !headerState.mobileOpen });
    }

    return <>
        <button className={`${styles.mobile} button-wrapper`} onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} size="xl" />
        </button>
        <div className={`${styles.menu} ${headerState.mobileOpen ? styles.mobileOpen : ''}`}>
            <button className={`${styles.mobile} button-wrapper`} onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={faXmark} size="2x" />
            </button>
            <Link href="/">Home</Link>
            <Link href="/characters">Characters</Link>
            <Link href="/credits">Credits</Link>
            <Link href="/resources">Resources</Link>
        </div>
        {headerState.mobileOpen ? <Overlay /> : ''}
        <span className="flex-line-container flex-end">
            <span>Dark Mode</span>
            <Toggle active={headerState.dark} onStateChange={toggleDarkMode} ariaLabel="dark mode"></Toggle>
        </span>
    </>
}