import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Head from '../components/head'
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug }) {
    title
    id
    slug
    publishedDate(formatString: "MMMM Do, YYYY")
    body {
      raw
      references {
        ... on ContentfulAsset {
          fixed {
            src
          }
          contentful_id
          __typename
          gatsbyImageData(width: 200)
        }
      }
    }
  }
}
`
const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>


const Blog = (props) => {
  
  const post = props.data.contentfulBlogPost.body
  console.log(post)

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const image = getImage(node.data.target)
        console.log( node)
        return<GatsbyImage image={image} alt="luck" />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {renderRichText(props.data.contentfulBlogPost.body, options)}
    </Layout>
  )
}

export default Blog