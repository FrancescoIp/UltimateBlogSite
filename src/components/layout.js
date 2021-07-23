import React from 'react';

import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import './layout.scss'
import '../styles/index.scss'

const Layout = (props) => {
  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="content">
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Layout