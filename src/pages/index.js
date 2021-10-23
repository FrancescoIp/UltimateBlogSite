import React from "react"
import Seo from '../components/seo.js'
import Sidebar from '../components/sidebar'
import VideoSection from '../components/videoSection'
import Parallax from '../modules/parallax'
import BlogPreview from '../components/blogPreview'
import Layout from '../components/layout'
import '../components/layout.scss'


function Home({ data }) {

  return (
    <>
      <Seo title="Home" />
      <Sidebar />
      <Layout>
        <Parallax />
        <div>
          <VideoSection />
        </div>
        <BlogPreview tags={"Chiese"} titoloComponente={"Le chiese di Termini"} />
      </Layout>
    </>
  )
}

export default Home
