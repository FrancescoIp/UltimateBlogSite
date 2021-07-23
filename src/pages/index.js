import React from "react"
import Seo from '../components/seo.js'
import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import VideoSection from '../components/videoSection'
import Parallax from '../modules/parallax'
import BlogPreview from '../components/blogPreview'
import '../components/layout.scss'


const styleZ = {
  overflow: 'auto'
}

function Home({ data }) {

  return (
    <>
      <Seo title="Home" />
      <Sidebar />
      <div className="container">
        <div className="content" style={styleZ}>
          <Header />
        </div>
      </div>
      <Parallax/>
      <div className="container">
        <BlogPreview tags={"Chiese"} titoloComponente={"Le chiese di Termini"}/>
        <div>
          <VideoSection/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
