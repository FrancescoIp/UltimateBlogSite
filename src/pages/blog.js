import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './blog.scss'
import Seo from '../components/seo.js'
import FilterInput from '../modules/filterInput'
import Layout from '../components/layout'



const BlogPage = ({ location }) => {
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
            width: 150
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

  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const [queryFilter, setQueryFilter] = useState(location.state.data ? location.state.data : "")

  const handleValueChange = event => {
    setQueryFilter(event.target.value)
  }

  useEffect(() => {
    const query = queryFilter
    const posts = allPosts || []

    const filteredData = posts.filter(post => {
      const { title, slug, tags } = post.node
      return (
        // standardize data with .toLowerCase()
        slug.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        tags.toLowerCase().includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredData,
    })


  }, [queryFilter, allPosts])

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts
  const polishedPosts = posts.filter(post => {
    return (post.node.slug !== null && post.node.mostrare)
  })


  return (
    <Layout>
      <Seo
        title="Blog"
        description="Qui trovi tutti gli articoli suddivisi per categorie che raccontano della nostra bellissima città e non solo!"
      />
      <div className="wrapper-bg" style={{ minHeight: "100vh" }}>
        <FilterInput
          handleValueChange={handleValueChange}
          postShowing={polishedPosts.length}
        />
        <Row xs={1} md={4} className="p-3" >
          {polishedPosts.map((edge) => {
            const image = getImage(edge.node.immagineCopertina)
            return (
              <Col className="py-2">
                <Link to={`/blog/${edge.node.slug}`}>
                  <Card key={edge.node.title}>
                    {image && <GatsbyImage image={image} alt={edge.node.slug} />}
                    <Card.Body>
                      <Card.Title><h2>{edge.node.title}</h2></Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <p>{edge.node.publishedDate}</p>
                    </Card.Footer>
                  </Card>
                </Link>
              </Col>
            )
          })}
        </Row>
      </div>


    </Layout>
  )
}

export default BlogPage

