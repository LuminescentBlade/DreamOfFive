import styles from './page.module.scss';
export default function Resources() {
    return <main className="main-content">
        <h1>Resources</h1>

        We're releasing some of Dream of Five's assets for the greater FE Romhacking community to use. We do ask that you credit to the creator(s) of an asset if you choose to use it in your own project.

        <section className={styles.pageSection}>
            <h2>FE12 Soldier</h2>
            <div>by <strong>AstraLunaSol</strong></div>
            <div className={styles.license}>Free to Edit</div>
            <div>
                <img className="pixel-art" src="/resources/preview/soldier-m.png" /><img className="pixel-art" src="/resources/preview/do5_soldier.gif" /><img className="pixel-art" src="/resources/preview/soldier-f.png" />
            </div>
            <a href="/resources/Soldier_FE12_Style_by_Astra.zip">Download</a>
        </section>
    </main>
}