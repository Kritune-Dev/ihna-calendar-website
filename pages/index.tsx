import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BackgroundImage from '../src/components/BackgroundImage'
import Footer from '../src/components/Footer'
import Title from '../src/components/Title'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
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
          <a href="/calendar" className={styles.card}>
            <h2>📆 Votre calendrier &rarr;</h2>
            <p>Permet de retrouver le lien de votre calendrier et les tutos pratiques</p>
          </a>

          <a href="/sync" className={styles.card}>
            <h2>🟢 Synchronisation &rarr;</h2>
            <p>Permet de voir l&apos;état de synchronisation des calendriers</p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
