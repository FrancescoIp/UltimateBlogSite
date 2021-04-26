import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Head from '../components/head'
import * as blogStyle from './blog.module.scss'

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
          title
          description
          contentful_id
          __typename
          gatsbyImageData(width: 200)
        }
      }
    }
  }
}
`

const Links = (props) => <a href={props.uri} className={blogStyle.links}>{props.children}</a>


const Blog = (props) => {
  
  const post = props.data.contentfulBlogPost.body
  console.log(post)

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => <Links uri={node.data.uri}>{children}</Links>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const image = getImage(node.data.target)
        return<GatsbyImage image={image} alt={node.data.target.title} />
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