import React from 'react'
import * as stayleSecondaryMenu from './secondaryMenu.module.scss'
import { Link } from 'gatsby';

//Menu all interno del parallasse primario della homepage
const SecondaryMenu = () => {
  return (
    <div className={stayleSecondaryMenu.container}>
      <div style={{ textAlign: 'center' }}>
        <h3>La Guida della città di Termini Imerese</h3>
        <nav>
          <Link>ciao</Link>
          <Link>qui</Link>
          <Link>qua</Link>
        </nav>
      </div>
    </div>
  )
}

export default SecondaryMenu