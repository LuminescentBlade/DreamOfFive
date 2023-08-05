import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main>
      <div className={styles.banner}>
        <h1>Fire Emblem: Dream of Five</h1>
      </div>
      <div className={styles.content}>
        Coming Soon
      </div>
    </main>
    
  )
}
