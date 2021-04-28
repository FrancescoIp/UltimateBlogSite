import React from "react"
import { graphql } from "gatsby"
import Seo from '../components/seo.js'
import Header from '../components/header'
import Footer from '../components/footer'
import * as layoutStyles from '../components/layout.module.scss'
import img2 from '../images/home/termini.jpg'
import { Parallax } from "react-parallax"

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
  maxWidth: "fit-content",
  height: "auto"
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
      <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={layoutStyles.container}>
        <Footer />
      </div>
    </>
  )
}

export default Home
