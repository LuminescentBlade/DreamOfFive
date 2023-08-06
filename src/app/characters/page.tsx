'use client';

import { DoFArtist } from '@/src/models/enums';
import UnitSheet from '@/src/components/unit-sheet';
import styles from './page.module.scss'
import html2canvas from 'html2canvas';
import { DoFArtistConfig } from '@/src/config/artists.config';
import { useState } from 'react';

export default function CharacterPage() {
    const isProd = (process.env.NODE_ENV === 'production');
    const [unitSheetData, updateData] = useState({
        useProd: isProd,
        bunny: true
    });

    if (typeof window !== "undefined") {
        Object.values(DoFArtist).forEach(key => {
            // @ts-ignore
            setVariable(`--dof-artist-${key}`, DoFArtistConfig[key].color);
        });
    }

    function exportCanvas() {
        if (typeof window !== "undefined") {
            // @ts-ignore
            html2canvas(document.querySelector("#unit-sheet")).then((canvas: HTMLCanvasElement) => {
                save(canvas.toDataURL(), 'dof-spritesheet.png');
            });
        }

    }

    function setVariable(variable: string, value: string) {
        document.documentElement.style.setProperty(variable, value);
    }

    function save(imageDataUrl: string, name: string) {
        const tempLink = document.createElement('a');
        tempLink.download = name;
        tempLink.href = imageDataUrl;
        tempLink.click();
        tempLink.remove();
    }

    function toggleUnitSheetProd() {

        updateData({ ...unitSheetData, useProd: !unitSheetData.useProd });
        console.log(unitSheetData);
        console.log('owo');
    }

    return (
        <main className={styles.base}>
            <UnitSheet useProd={unitSheetData.useProd} />
            {
                !isProd ? <div style={{width: 'fit-content', margin: '12px auto'}}>
                    <button style={{padding: '12px', height: '40px', margin: '0 12px 0 0 '}} onClick={exportCanvas}>Export Spritesheet</button>
                    <button style={{padding: '12px', height: '40px'}} onClick={toggleUnitSheetProd}>Toggle Production Sheet</button>
                </div> : ""
            }
            
        </main>
    );
}