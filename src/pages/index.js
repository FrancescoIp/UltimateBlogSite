import React from "react"
import Seo from '../components/seo.js'
import VideoSection from '../components/videoSection'
import BlogPreview from '../components/blogPreview'
import HeroB from '../components/heroImageB'
import Layout from '../components/layout'
import Jardinu from '../components/jardinu'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home({ data }) {

  return (
    <>
      <Seo title="Home" />
      <Layout>
        <HeroB/>
        <Jardinu/>
        <VideoSection />
        <BlogPreview tags={"Chiese"} titoloComponente={"Le chiese di Termini"} />
      </Layout>
    </>
  )
}

export default Home
