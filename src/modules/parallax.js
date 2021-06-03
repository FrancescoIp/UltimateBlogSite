import React from 'react'
import * as stayleParallax from './parallax.module.scss'
import SecondaryMenu from './secondaryMenu.js'


const Parallax = () => {
  return (
    <div className={stayleParallax.parallax}>
      <SecondaryMenu/>
    </div>
  )
}

export default Parallax