import type { NextPage } from "next";
import Head from "next/head";
import BackgroundImage from "../src/components/BackgroundImage";
import Footer from "../src/components/Footer";
import Title from "../src/components/Title";
import useData from "../src/lib/data.hook";
import styles from "../styles/Home.module.css";
import { Data, Calendrier } from "../src/types/Data";

const Sync: NextPage = () => {
  const { data, error } = useData();
  const dataT = data as Data;

  return (
    <div className={styles.container}>
      <Head>
        <title>Calendriers | Synchronisation </title>
        <meta
          name="description"
          content="Main website to see eta of synchronisation of calendar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundImage />

      <main className={styles.main}>
        <Title />

        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr className={styles.tableRow}>
              <th className={styles.tableCell}>Groupe</th>
              <th className={styles.tableCell}>Etat de la synchronisation</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {!dataT ? (
              <tr>Loading ...</tr>
            ) : (
              dataT.result.map((calendar: Calendrier) => {
                return (
                  <tr key={calendar.groupe} className={styles.tableRow}>
                    <td>
                      <p className={styles.textAlignCenter}>{calendar.groupe}</p>                      
                    </td>
                    <td><p className={styles.textAlignCenter}>{calendar.update ? "Synchronisation ok 🟢" : "Pas à jour 🔴"}</p></td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </main>

      <Footer />
    </div>
  );
};

export default Sync;
