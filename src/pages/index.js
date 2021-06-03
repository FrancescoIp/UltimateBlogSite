import React from "react"
import { Link } from 'gatsby';
import Seo from '../components/seo.js'
import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import Video from '../modules/video'
import Parallax from '../modules/parallax'
import * as layoutStyles from '../components/layout.module.scss'


const styleZ = {
  overflow: 'auto'
}

function Home({ data }) {

  return (
    <>
      <Seo title="Home" />
      <Sidebar />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content} style={styleZ}>
          <Header />
        </div>
      </div>
      <Parallax/>
      <div className={layoutStyles.container}>
        <Link to="/blog" state={{ data: "chiesa" }}>Chiesa</Link>
        <div>
          <Video
            videoSrcURL="https://www.youtube.com/embed/auBb12TIl5Y"
            videoTitle="Panoramica Termini Imerese"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
