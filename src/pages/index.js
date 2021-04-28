import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import Seo from '../components/seo.js'

export const query = graphql`
  query {
  contentfulAsset(title: { eq: "piazzaduomo" }) {
    title
    gatsbyImageData(
      width: 900
      height: 600
      placeholder: BLURRED
      layout: FULL_WIDTH
      formats: [AUTO, WEBP]
    )
  }
}

`

function Home({ data }) {
  const image = getImage(data.contentfulAsset)
  return (
    <Layout>
      <Seo title="Home"/>
      <GatsbyImage image={image} alt={data.contentfulAsset.title} />
    </Layout>
  )
}

export default Home
