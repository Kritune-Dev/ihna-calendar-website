import React, { Component } from 'react'
import styles from '../../styles/Home.module.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <a
          href="https://github.com/Kritune-Dev/ihna-calendar-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Produit par Corentin B
        </a>
      </footer>
    )
  }
}
