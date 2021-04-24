import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query{
    contentfulBlogPost {
      title
      id
      slug
      immagineCopertina {
        gatsbyImageData(width: 800)
      }
    }
  }

`

function Home({ data }) {
  const image = getImage(data.contentfulBlogPost.immagineCopertina)
  return (
    <Layout>
      <Head title="Home"/>
      <h2>{data.contentfulBlogPost.title}</h2>
      <GatsbyImage image={image} alt={data.contentfulBlogPost.slug} />
      <p>booty</p>
    </Layout>
  )
}

export default Home

// export default function Home() {
//   return <div>
//     <h1>Hello world!</h1>
//     <StaticImage
//       src="../images/palm-tree.jpg"
//       width={1000}
//       alt="Palm Tree"
//     // placeholder="tracedSVG"
//     // quality="40"
//     // transformOptions={{ grayscale: true }}
//     />
//   </div>
// }
