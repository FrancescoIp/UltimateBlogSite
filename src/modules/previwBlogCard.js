import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, } from "gatsby-plugin-image"
import '../components/blogPreview.scss'

const BlogCard = ({ blogCardData, type }) => {
  const image = getImage(blogCardData.image)
  if (type === "rx") {
    return (
      <Link className="blog-card-container" to={`/blog/${blogCardData.slug}`}>
        <div className="col-12 center margine-top-card-dx">
          <GatsbyImage
            image={image}
            alt="ciao"
          />
        </div>
        <div className="col-12 center margine-top-card-dx">
          <h2>{blogCardData.title}</h2>
        </div>
      </Link>
    )
  } else {
    return (
      <Link className="row col-12 blog-card-container" to={`/blog/${blogCardData.slug}`}>
        <div className="col-3 center margine-card-sx">
          <GatsbyImage
            image={image}
            alt="ciao"
          />
        </div>
        <div className="col-7 center">
          <h2>{blogCardData.title}</h2>
        </div>
      </Link>
    )
  }
}

export default BlogCard