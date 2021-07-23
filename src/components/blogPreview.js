import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
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
          gatsbyImageData(
            width:150
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
    const {slug, title, immagineCopertina: image} = post.node
    return (
      {
        image,
        slug,
        title
      }
    )
  })

  return (
    <>
      <div className="row-blogPreview blog-previw-margin-wrapper ">
        <div className="col-12">
          <Link className="blog-preview-title" to="/blog" state={{ data: props.tags }}>
            <h2 >{props.titoloComponente}</h2>
          </Link>
        </div>
        <div className="row col-6">
          <BlogCard blogCardData={blogCardData[0]} type="rx" />
        </div>
        <div className="row col-6">
          <BlogCard blogCardData={blogCardData[1]} type="sx" />
          <BlogCard blogCardData={blogCardData[2]} type="sx" />
        </div>
      </div>
    </>
  )
}

export default BlogPreview