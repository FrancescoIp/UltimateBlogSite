import React, { useState, useEffect } from 'react';
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as blogStyle from './blog.module.scss'
import Seo from '../components/seo.js'
import FilterInput from '../modules/filterInput'


const BlogPage = () => {
  const data = useStaticQuery(graphql`
     query {
  allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
    edges {
      node {
        title
        slug
        mostrare
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
  const polishedPosts = posts.filter(post => {
    return (post.node.slug !== null && post.node.mostrare)
  })
  const [postShowing, setPostShowing] = useState(polishedPosts.length)
  useEffect(() => {
    setPostShowing(polishedPosts.length)
  }, [polishedPosts])

  return (
    <Layout>
      <Seo
        title="Blog"
        description="Qui trovi tutti gli articoli suddivisi per categorie che raccontano della nostra bellissima città e non solo!"
      />
      <h1>Blog</h1>
      <FilterInput
        handleInputChange={handleInputChange}
        cName={blogStyle.numberPostShown}
        postShowing={postShowing}
      />
      <ol className={blogStyle.posts}>
        {polishedPosts.map((edge) => {
          const image = getImage(edge.node.immagineCopertina)
          return (
            <li className={blogStyle.post} key={edge.node.title}>
              <Link to={`/blog/${edge.node.slug}`}>
                <div className={blogStyle.postDataContainer}>
                  <GatsbyImage image={image} alt={edge.node.slug} />
                  <div className={blogStyle.datiPost}>
                    <h2>{edge.node.title}</h2>
                    <p>{edge.node.publishedDate}</p>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage