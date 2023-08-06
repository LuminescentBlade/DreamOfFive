'use client';

import UnitSheet from '../../components/unit-sheet';
import styles from './page.module.scss'
import html2canvas from 'html2canvas';

export default function CharacterPage() {
    const isProd = (process.env.NODE_ENV === 'production');

    function exportCanvas() {
        if (typeof window !== "undefined") {
            // @ts-ignore
            html2canvas(document.querySelector("#unit-sheet")).then((canvas:HTMLCanvasElement) => {
                save(canvas.toDataURL(), 'dof-spritesheet.png');
            });
        }

    }

    function save(imageDataUrl: string, name: string) {
        const tempLink = document.createElement('a');
        tempLink.download = name;
        tempLink.href = imageDataUrl;
        tempLink.click();
        tempLink.remove();
    }
    return (<main className={styles.base}>
        <UnitSheet />
        {
            !isProd ? <button className={styles.export} onClick={exportCanvas}>Export Spritesheet</button> : ""
        }
    </main>);
}