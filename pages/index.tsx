import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import BackgroundImage from '../src/components/BackgroundImage'
import Footer from '../src/components/Footer'
import Title from '../src/components/Title'
import useData from '../src/lib/data.hook'
import Data from '../src/types/Data'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { data, error } = useData()

  function SyncEmoji () {
    const dataT = data as Data
    var emoji = "❓"
    if (!dataT || error) {return <h2>{emoji} Synchronisation &rarr;</h2>}

    dataT.result.find(r => r.update === false) ? (dataT.result.find(r => r.update === true) ? emoji = "🟠" : emoji="🔴"): emoji = "🟢"
    return <h2>{emoji} Synchronisation &rarr;</h2>
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Calendriers Idheo</title>
        <meta name="description" content="Main website to see eta of synchronisation of calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundImage />

      <main className={styles.main}>
        <Title/>

        <div className={styles.grid}>
          <Link href="/calendar">
            <a className={styles.card}>
              <h2>📆 Votre calendrier &rarr;</h2>
              <p>Permet de retrouver le lien de votre calendrier et les tutos pratiques</p>
            </a>
          </Link>
          
          <Link href="/sync">
            <a className={styles.card}>
              <SyncEmoji/>
              <p>Permet de voir l&apos;état de synchronisation des calendriers</p>
            </a>
          </Link> 
          
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
