import type { NextPage } from 'next'
import Head from 'next/head'
import BackgroundImage from '../src/components/BackgroundImage'
import Footer from '../src/components/Footer'
import Title from '../src/components/Title'
import useData from '../src/lib/data.hook'
import Calendrier from '../src/types/Data'
import Data from '../src/types/Data'
import styles from '../styles/Home.module.css'

const Sync: NextPage = () => {
  const { data, error } = useData()
  var dataT = data as Data

  const listCalendars = dataT.result.map((calendar: Calendrier)=> {
    <li>{calendar.groupe} {calendar.update ? '🟢' : '🔴'}</li>
  })
  

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

        <div className={styles.grid}>
         <ul>
            {dataT.result.map((calendar: Calendrier)=> {return <li key={calendar.calendarId}>{calendar.groupe} {calendar.update ? '🟢' : '🔴'}</li>})}
         </ul>
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default Sync
