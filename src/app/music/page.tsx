'use client'

import { useEffect, useState } from 'react';
import styles from './page.module.scss'

export default function MusicPage() {

    function parseSongs(data: string) { // tsv format
        const lines = data.split('\n');
        const lineItems = lines.map(line => line.split('\t'));
        const headers = lineItems[0].map(title => {
            const strippedTitle = (title?.length ? title.toLowerCase() : 'notes').replace(/[^a-zA-Z0-9]/g, '');
            return { name: strippedTitle, title: title, display: title?.length != 0 };
        });
        const parsedItems = lineItems.slice(1).reduce((parsed: any[], item) => {
            const parsedItem = headers.reduce((agg, header, i) => ({ ...agg, [header.name]: item[i] }), {});
            return [...parsed, parsedItem];
        }, []);

        return { headers: headers.filter(h => h.display), parsedItems };
    }

    const [data, setData] = useState((undefined as any));

    useEffect(() => {
        fetch('/music/Do5 2.0 Spreadsheet - Song Table.tsv')
            .then(response => response.text())
            .then(data => {
                setData(parseSongs(data));
            })
    }, []);

    return <main className={styles.page}>
        <h1>Music</h1>
        <p>
            Some of the fields here are blank since we lost some information porting the tracks over from the 2014 version. We will fill out more information as we figure them out.
        </p>
        {
            data ?
                <div className={styles.table} role="table">
                    <div className={`${styles.header} ${styles.row}`} role="row">
                        {
                            data.headers.map((d: any) => <div className={`${styles.cell} ${styles[d.name]}`} role='columnheader'>
                                {d.title}
                            </div>)
                        }
                    </div>
                    {
                        data.parsedItems.map((row: any) => <div role="row" className={styles.row}>
                            {
                                data.headers.map((d: any) => <div className={`${styles.cell} ${styles[d.name]}`} role='cell'>
                                    <span className={styles.label}>{d.title}:</span> {row[d.name]?.length ? row[d.name] : '' } 
                                </div>)
                            }
                        </div>)
                    }
                </div>
                : ''
        }

    </main>;
}