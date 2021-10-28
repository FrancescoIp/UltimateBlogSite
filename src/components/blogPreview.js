import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Row, Col} from 'react-bootstrap'
import BlogCard from '../modules/previwBlogCard'
import './blogPreview.scss'
import '../modules/grid.scss'


const BlogPreview = (props) => {
  const data = useStaticQuery(graphql`
     query {
  allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
    edges {
      node {
        title
        slug
        mostrare
        tags
        publishedDate(formatString:"MMMM Do, YYYY")
        immagineCopertina {
          gatsbyImageData (
            width: 200
            placeholder: BLURRED
            aspectRatio: 0.7
          )
        }
      }
    }
  }
}
  `)

  const allPosts = data.allContentfulBlogPost.edges
  const postToShow = allPosts.filter(post => {
    return (post.node.slug !== null && post.node.mostrare && post.node.tags === props.tags)
  })

  const blogCardData = postToShow.map((post) => {
    const { slug, title, immagineCopertina: image } = post.node
    return (
      {
        slug,
        title,
        image
      }
    )
  });

  return (
    <>
      <Row className="m-3 justify-content-around">
        <Col xs={12} className="pb-2">
          <Link to="/blog" state={{ data: props.tags }}>
            <h2>{props.titoloComponente}</h2>
          </Link>
        </Col>
        <Col md={3} className="pb-2">
          <BlogCard blogCardData={blogCardData[0]} />
        </Col>
        <Col md={3} className="pb-2">
          <BlogCard blogCardData={blogCardData[1]} />
        </Col>
        <Col md={3} className="pb-2">
          <BlogCard blogCardData={blogCardData[2]} />
        </Col>
      </Row>
    </>
  )
}

export default BlogPreview