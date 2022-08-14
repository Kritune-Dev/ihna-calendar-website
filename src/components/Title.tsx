import React, { Component } from 'react'
import styles from '../../styles/Home.module.css'

export default class Title extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.title}>
          Bienvenue sur les calendriers Idheo 
        </h1>

        <p className={styles.description}>
          La dernière actualisation des calendriers à été faite il y a <br/>{' '}
          <code className={styles.code}>11 minutes</code>
        </p>
      </div>
    )
  }
}
