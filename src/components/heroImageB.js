import React from 'react'
import * as styles from './heroImageB.module.scss'
import { Link } from 'gatsby';


function HeroB() {
  return (
    <>
      <div className={styles.header}>

        <div className={`${styles.container} ${styles.container_solid}`}>
          <div className={styles.title_wrapper}>
            <h1>HimerAzione</h1>
            <ul>
              <li><Link to="/#jardinu-section">Cosa Facciamo</Link></li>
              <li><Link to="/#chi-siamo">Chi Siamo</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>


        <div className={`${styles.container} ${styles.container_image}`} aria-hidden="true">
          <div className={styles.title_wrapper}>
            <h1>HimerAzione</h1>
            <ul>
              <li><Link to="/#jardinu-section">Cosa Facciamo</Link></li>
              <li><Link to="/#chi-siamo">Chi Siamo</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroB