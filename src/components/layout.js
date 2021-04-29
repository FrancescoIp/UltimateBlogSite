import React from 'react';

import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'

const Layout = (props) => {
  return (
    <>
      <Sidebar />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Layout