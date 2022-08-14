import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calendriers Idheo</title>
        <meta name="description" content="Main website to see eta of synchronisation of calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bgWrap}>
      <Image
        alt="Mountains"
        src="/mountains.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenue sur les calendriers Idheo 
        </h1>

        <p className={styles.description}>
          La dernière actualisation des calendriers à été faite il y a {' '}
          <code className={styles.code}>11 minutes</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>🟢 Synchronisation &rarr;</h2>
            <p>Permet de voir l&apos;état de synchronisation des calendriers</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>📆 Votre calendrier &rarr;</h2>
            <p>Permet de retrouver le lien de votre calendrier et les tutos pratiques</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Kritune-Dev/ihna-calendar-vebwsite"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Corentin Bacconnais
        </a>
      </footer>
    </div>
  )
}

export default Home
