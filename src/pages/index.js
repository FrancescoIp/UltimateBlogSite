import React from "react"
import Seo from '../components/seo.js'
import VideoSection from '../components/videoSection'
import BlogPreview from '../components/blogPreview'
import HeroB from '../components/heroImageB'
import Layout from '../components/layout'
import Jardinu from '../components/jardinu'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home({ data }) {

  return (
    <>
      <Seo title="Home" />
      <Layout>
        <HeroB />
        <Jardinu />
        <div id="gradient">
          <VideoSection />
          <BlogPreview tags={"Chiese"} titoloComponente={"Le chiese di Termini"} />
        </div>
      </Layout>
    </>
  )
}

export default Home
