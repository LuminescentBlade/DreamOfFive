import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main>
      <div className={styles.flavorText}>
        <p>
          I thought you… damn it, I thought you were different. <br/>
          I thought you were stronger.<br/>
          But now I see you’re just a failure, like all those before you.<br/>
          Like those who will come after you.
        </p>
        <p>
          Farewell, Rena.
        </p>
      </div>
      <div className={styles.banner}>
        <h1>Fire Emblem: Dream of Five</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.links}>
          <a href="https://feuniverse.us/t/fe8-fire-emblem-dream-of-five/21043" target='_blank'>Updates</a>
        </div>
        <p>
        Dream of Five was an FE7, FEditor-era hack made in the early 2010s by a team of teenagers with too much time on their hands. For years, it has remained dormant, collecting cobwebs as the hacking scene advances in leaps and bounds.
        </p>
        <p className='center'>
          <strong>Until now.</strong>
        </p>
        <p>
        Dream of Five is an FE8 hack made in FEBuilder by members of the original team. It will extend to a campaign of up to 28 maps in a single playthrough, including a substantial midgame route split as was present in the original, and a playable cast of 56, of which 20 are route-exclusive. It will benefit from more recent advances in hacking QoL and more modern approaches to game design, while retaining the old atmosphere and aesthetic flair that gave it its original appeal. The writing has also been overhauled significantly, rather than replacing scenes like-for-like down the line.
        </p>
        <p className={styles.comingSoon}>
          First Patch coming October 21, 2023.
        </p>
        <div className={styles.preview}>
          {
            Array.from(Array(12).keys()).map(i=><img className="pixel-art" src={`/preview/preview${i+1}.png`}  alt={`dream of five preview image ${i+1}`}/>)
          }
        </div>
      </div>
    </main>

  )
}
