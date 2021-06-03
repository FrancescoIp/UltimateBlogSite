import React from 'react';
import { Link } from 'gatsby';


const BlogPreview = () => {
  return(
    <h1>
      Blog Preview
      <Link to="/blog" state={{ data: "chiesa" }}>Chiesa</Link>
    </h1>
  )
}

export default BlogPreview