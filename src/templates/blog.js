import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Card, Col, Row } from 'react-bootstrap'
import Seo from '../components/seo.js'
import Layout from '../components/layout';
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

const Links = ({ uri, children }) => <a href={uri} className={blogStyle.links}>{children}</a>

const Blog = (props) => {

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => <Links uri={node.data.uri}>{children}</Links>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const image = getImage(node.data.target)
        return <GatsbyImage image={image} alt={node.data.target.title} />
      }
    }
  }

  return (
    <Layout>
      <Seo title={props.data.contentfulBlogPost.title} />
      <Row className="justify-content-around">
        <Col xs={10} className="py-3">
          <Card>
            <Card.Body>
              <Card.Title><h1>{props.data.contentfulBlogPost.title}</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><p>{props.data.contentfulBlogPost.publishedDate}</p></Card.Subtitle>
              <Card.Text>
                {renderRichText(props.data.contentfulBlogPost.body, options)}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={"/blog"}>Torna indietro</Link>
            </Card.Footer>
          </Card>
          </Col>
      </Row>

    </Layout>
  )
}

export default Blog