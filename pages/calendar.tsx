import type { NextPage } from "next";
import Head from "next/head";
import BackgroundImage from "../src/components/BackgroundImage";
import Footer from "../src/components/Footer";
import Title from "../src/components/Title";
import useData from "../src/lib/data.hook";
import { Data, Calendrier } from "../src/types/Data";
import styles from "../styles/Home.module.css";

const Calendar: NextPage = () => {
  var officielCalendar = [
    { groupe: "P1 officiel", update: false, calendarId: "uq4s0969b5tbpm3eld34m7qiho@group.calendar.google.com" },
    { groupe: "P2 officiel", update: false, calendarId: "5gqrig13o56rltik5oc3h0kjds@group.calendar.google.com" },
    { groupe: "P3 officiel", update: false, calendarId: "amqdq7rt8fr3kcoevlahsempq0@group.calendar.google.com" },
    { groupe: "D1 officiel", update: false, calendarId: "rd1pbji735mnahkrhigvc9qjlg@group.calendar.google.com" },
    { groupe: "D2 officiel", update: false, calendarId: "9i12it26qlrbmo5gosl2722ps8@group.calendar.google.com" },
  ];
  const { data, error } = useData();
  const dataT = data as Data;

  var calendrier: Calendrier;
  if (!dataT)
    calendrier = { groupe: "Loading...", update: false, calendarId: "" };
  else calendrier = dataT.result[0];

  function CalendarItem(calendar: Calendrier, color: string) {
    if (error)
      return (
        <a
          className={styles.listItem}
          target="_blank"
          rel="noopener noreferrer"
        >
          Impossibilité de charger les calendriers
        </a>
      );
    if (!data)
      return (
        <a
          className={styles.listItem}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chargement
        </a>
      );

    const linkDirect =
      "https://calendar.google.com/calendar/u/0/r?cid=" + calendar.calendarId;
    return (
      <a
        className={styles.listItem}
        href={linkDirect}
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: color }}
      >
        {calendar.groupe}
      </a>
    );
  }

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

        <div>
          <div className={styles.grid}>
            <div className={styles.gridVerticale}>
              {!dataT ? (
                <p>Loading...</p>
              ) : (
                <>
                  <div className={styles.grid}>
                    {CalendarItem(officielCalendar[0], "red")}
                    {CalendarItem(dataT.result[0], "#ebb654")}
                    {CalendarItem(dataT.result[1], "#ebb654")}
                    {CalendarItem(dataT.result[2], "#ebb654")}
                    {CalendarItem(dataT.result[3], "#ebb654")}
                  </div>
                  <div className={styles.grid}>
                    {CalendarItem(officielCalendar[1], "red")}
                    {CalendarItem(dataT.result[4], "#4545ff")}
                    {CalendarItem(dataT.result[5], "#4545ff")}
                    {CalendarItem(dataT.result[6], "#4545ff")}
                    {CalendarItem(dataT.result[7], "#4545ff")}
                  </div>
                  <div className={styles.grid}>
                    {CalendarItem(officielCalendar[2], "red")}
                    {CalendarItem(dataT.result[8], "#11a311")}
                    {CalendarItem(dataT.result[9], "#11a311")}
                    {CalendarItem(dataT.result[10], "#11a311")}
                    {CalendarItem(dataT.result[11], "#11a311")}
                  </div>
                  <div className={styles.grid}>
                    {CalendarItem(officielCalendar[3], "red")}
                    {CalendarItem(dataT.result[12], "#a329a3")}
                    {CalendarItem(dataT.result[13], "#a329a3")}
                    {CalendarItem(dataT.result[14], "#a329a3")}
                    {CalendarItem(dataT.result[15], "#a329a3")}
                  </div>
                  <div className={styles.grid}>
                    {CalendarItem(officielCalendar[4], "red")}
                    {CalendarItem(dataT.result[16], "#368891")}
                    {CalendarItem(dataT.result[17], "#368891")}
                    {CalendarItem(dataT.result[18], "#368891")}
                    {CalendarItem(dataT.result[19], "#368891")}
                  </div>
                  <div className={styles.grid}>
                    {CalendarItem(dataT.result[20], "#368891")}
                    {CalendarItem(dataT.result[21], "#368891")}
                    {CalendarItem(dataT.result[22], "#368891")}
                    {CalendarItem(dataT.result[23], "#368891")}
                  </div>
                </>
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
