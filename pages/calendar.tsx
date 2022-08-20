import type { NextPage } from "next";
import Head from "next/head";
import BackgroundImage from "../src/components/BackgroundImage";
import CalendarCard from "../src/components/CalendarPage/CalendarCard";
import CalendarItem from "../src/components/CalendarPage/CalendarItem";
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

        <div className={styles.calendarView}>
          <div>
            <input placeholder="Saisir nom du groupe"></input>
            <button>Rechercher</button>
          </div>

          <div className={styles.grid}>
            <div className={styles.gridVerticale}>
              {!dataT ? (
                <p>Loading...</p>
              ) : (
                dataT.result.map((calendar: Calendrier) => {
                  return (
                    <CalendarItem
                      key={calendar.calendarId}
                      groupe={calendar.groupe}
                    />
                  );
                })
              )}
            </div>

            <CalendarCard
              groupe={calendrier.groupe}
              update={calendrier.update}
              calendarId={calendrier.calendarId}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calendar;
