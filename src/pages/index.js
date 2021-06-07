import React from "react"
import Seo from '../components/seo.js'
import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import VideoSection from '../components/videoSection'
import Parallax from '../modules/parallax'
import BlogPreview from '../components/blogPreview'
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
        <BlogPreview tags={"Chiese"}/>
        <div>
          <VideoSection/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
