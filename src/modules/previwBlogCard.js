import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, } from "gatsby-plugin-image"
import { Card } from "react-bootstrap"
import '../components/blogPreview.scss'
import './previwBlogCard.scss'

const BlogCard = ({ blogCardData, type }) => {
  const image = getImage(blogCardData.image)
  return (
    <Link to={`/blog/${blogCardData.slug}`} >
      <Card className="shadow-hover">
        <GatsbyImage
          image={image}
          alt="ciao"
        />
        <Card.Body>
          <Card.Title>{blogCardData.title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>

  )
}

export default BlogCard