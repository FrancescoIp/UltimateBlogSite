import React from "react"
import { graphql } from "gatsby"
import { Parallax } from "react-parallax";
import Seo from '../components/seo.js'
import Header from '../components/header'
import Footer from '../components/footer'
import * as layoutStyles from '../components/layout.module.scss'
import img2 from '../images/home/termini.jpg'

export const query = graphql`
  query {
  contentfulAsset(title: { eq: "piazzaduomo" }) {
    title
    file{
      url
    }
  }
}

`

const parallaxImgStyle = {
  maxWidth: "fit-content"
}


function Home({ data }) {
  return (
    <>
      <Seo title="Home" />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
        </div>
      </div>
      <Parallax bgImage={img2} bgImageStyle={parallaxImgStyle} strength={500}>
        <div style={{ height: 500 }}/>
      </Parallax>
      <div className={layoutStyles.container}>
        <Footer />
      </div>
    </>
  )
}

export default Home
