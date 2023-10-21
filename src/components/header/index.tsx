'use client';

import Link from "next/link";
import Toggle from "../toggle";
import { useState, useEffect } from "react";
let init = false;
export default function Header() {
    const darkModeKey = 'dof-darkmode';
    const [isDarkMode, setDarkMode] = useState(false);
    useEffect(()=>{
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
        if(isCachedDark !== isDarkMode){
            setDarkMode(isCachedDark);
        }
    });
   
    function toggleDarkMode() {
        const nextDarkModeState = !isDarkMode;
        window.localStorage.setItem(darkModeKey, `${nextDarkModeState}`);
        setBodyDark(nextDarkModeState);
        setDarkMode(nextDarkModeState);
    }

    function setBodyDark(isDarkMode: boolean) {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    return <>
        <Link href="/">Home</Link>
        <Link href="/characters">Characters</Link>
        <Link href="/credits">Credits</Link>
        <span className="flex-line-container flex-end">
            <span>Dark Mode</span>
            <Toggle active={isDarkMode} onStateChange={toggleDarkMode} ariaLabel="dark mode"></Toggle>
        </span>
    </>
}