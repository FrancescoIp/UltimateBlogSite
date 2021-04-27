import React, { useState, useEffect } from 'react';
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as blogStyle from './blog.module.scss'
import Head from '../components/head'
import FilterInput from '../modules/filterInput'


const BlogPage = () => {
  const data = useStaticQuery(graphql`
     query {
  allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
    edges {
      node {
        title
        slug
        publishedDate(formatString:"MMMM Do, YYYY")
        immagineCopertina {
          gatsbyImageData(width: 200)
        }
      }
    }
  }
}
  `)

  const allPosts = data.allContentfulBlogPost.edges
  
  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })
  
  const handleInputChange = event => {
    const query = event.target.value

    const posts = data.allContentfulBlogPost.edges || []

    const filteredData = posts.filter(post => {
      const { title, slug } = post.node
      return (
        // standardize data with .toLowerCase()
        slug.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase())
      )
    })

    setState({
      query, 
      filteredData, 
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts
  const [postShowing, setPostShowing] = useState(posts.length)
  useEffect(() => {
    setPostShowing(posts.length)
  }, [posts])

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <FilterInput
        handleInputChange={handleInputChange}
        cName={blogStyle.numberPostShown}
        postShowing={postShowing}
      />
      <ol className={blogStyle.posts}>
        {posts.map((edge) => {
          const image = getImage(edge.node.immagineCopertina)
          return (
            <li className={blogStyle.post} key={edge.node.title}>
              <Link to={`/blog/${edge.node.slug}`}>
                <GatsbyImage image={image} alt={edge.node.slug} />
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage