import type { NextPage } from "next";
import Head from "next/head";
import BackgroundImage from "../src/components/BackgroundImage";
import Footer from "../src/components/Footer";
import Title from "../src/components/Title";
import useData from "../src/lib/data.hook";
import { Data, Calendrier } from "../src/types/Data";
import styles from "../styles/Home.module.css";

const Calendar: NextPage = () => {
  const { data, error } = useData();
  const dataT = data as Data;

  var calendrier: Calendrier;
  if (!dataT)
    calendrier = { groupe: "Loading...", update: false, calendarId: "" };
  else calendrier = dataT.result[0];

  return (
    <div className={styles.container}>
      <Head>
        <title>Calendriers Idheo | Calendrier </title>
        <meta
          name="description"
          content="Main website to see eta of synchronisation of calendar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundImage />

      <main className={styles.main}>
        <Title />

        <div >
          <div className={styles.grid}>
            <div className={styles.gridVerticale}>
              {!dataT ? (
                <p>Loading...</p>
              ) : (
                dataT.result.map((calendar: Calendrier) => {
                  const linkDirect = 'https://calendar.google.com/calendar/u/0/r?cid=' + calendar.calendarId
                  return (
                    <a className={styles.listItem} href={linkDirect} target="_blank" rel="noopener noreferrer" key={calendar.calendarId}>{calendar.groupe}</a>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calendar;
