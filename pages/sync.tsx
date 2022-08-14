import type { NextPage } from 'next'
import Head from 'next/head'
import BackgroundImage from '../src/components/BackgroundImage'
import Footer from '../src/components/Footer'
import Title from '../src/components/Title'
import styles from '../styles/Home.module.css'

const Sync: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calendriers Idheo | Synchronisation </title>
        <meta name="description" content="Main website to see eta of synchronisation of calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundImage/>      

      <main className={styles.main}>
        <Title/>

      </main>

      <Footer />
    </div>
  )
}

export default Sync
