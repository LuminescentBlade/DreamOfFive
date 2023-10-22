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
    const [headerState, setHeaderState] = useState({ dark: false, mobileOpen: false });
    useEffect(() => {
        const preferDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const localDarkContent = window.localStorage.getItem(darkModeKey);
        let isCachedDark = false;
        if (localDarkContent) {
            isCachedDark = localDarkContent === `${true}`;
        } else {
            window.localStorage.setItem(darkModeKey, `${preferDark}`);
            isCachedDark = preferDark;
        }
        if (!init) {
            setBodyDark(isCachedDark);
            init = true;
        }
        if (isCachedDark !== headerState.dark) {
            setHeaderState({ ...headerState, dark: isCachedDark });
        }
    });

    function toggleDarkMode() {
        const nextDarkModeState = !headerState;
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