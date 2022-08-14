import React, { Component } from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default class BackgroundImage extends Component {
  render() {
    return (
      <div className={styles.bgWrap}>
      <Image
        alt="Mountains"
        src="/mountains.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    )
  }
}
