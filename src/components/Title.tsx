import React from "react";
import styles from "../../styles/Home.module.css";
import useData from "../lib/data.hook";

export default function Title() {
  const { data, error } = useData()

  function Time () {
    if (error) return <code className={styles.code}>Impossibilité de charger le temps</code>
    if (!data) return <code className={styles.code}>Chargement</code>

    const timestamp = data.dateOfLastCheck
    const timestampNow = Date.now()
    const diff = timestampNow - timestamp
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24))
    const diffHours = Math.floor(diff / (1000 * 60 * 60))
    const diffMinutes = Math.floor(diff / (1000 * 60))
    const diffSeconds = Math.floor(diff / 1000)

    if (diffDays > 0) return <code className={styles.code}>{diffDays} jours</code>
    if (diffHours > 0) return <code className={styles.code}>{diffHours} heures</code>
    if (diffMinutes > 0) return <code className={styles.code}>{diffMinutes} minutes</code>
    if (diffSeconds > 0) return <code className={styles.code}>{diffSeconds} secondes</code>

    return <code className={styles.code}>0 secondes</code>
  }

  return (
    <div>
      <h1 className={styles.title}>Bienvenue sur les calendriers d&apos;ostéopathie</h1>

      <p className={styles.description}>
        La dernière actualisation des calendriers à été faite il y a <br />{" "}<Time />
      </p>

      <p className={styles.disclamer}>
        Ce sont des calendriers par groupes non officiels et générés par un programme. Il faut toujours faire confiance aux calendriers officiels fournis par l&apos;école
      </p>
    </div>
  );
}