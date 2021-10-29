import React from 'react';
import { Row, Col, Table } from 'react-bootstrap'
import { graphql, useStaticQuery, Link } from 'gatsby';

import './footer.scss'


const Footer = () => {
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
         }
       }
     }
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)

  const allPosts = data.allContentfulBlogPost.edges
  const footerUltimiArticoli = allPosts.map((post) => {
    const { slug, title} = post.node
    return (
      {
        slug,
        title
      }
    )
  });

  console.log(footerUltimiArticoli[0])

  return (
    <footer className="footer">
      <Row>
        <Col>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>{data.site.siteMetadata.title}</th>
                <th>Seguici e Contattaci</th>
                <th>Ultimi Articoli</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><Link to="/">Home</Link></td>
                <td>Facebook</td>
                <td><Link to={`/blog/${footerUltimiArticoli[0].slug}`}>{footerUltimiArticoli[0].title}</Link></td>
              </tr>
              <tr>
                <td>2</td>
                <td><Link to="/#jardinu-section">Cosa Facciamo</Link></td>
                <td>Instagram</td>
                <td><Link to={`/blog/${footerUltimiArticoli[1].slug}`}>{footerUltimiArticoli[1].title}</Link></td>
              </tr>
              <tr>
                <td>3</td>
                <td><Link to="/#chi-siamo">Chi Siamo</Link></td>
                <td>@twitter</td>
                <td><Link to={`/blog/${footerUltimiArticoli[2].slug}`}>{footerUltimiArticoli[2].title}</Link></td>
              </tr>
              <tr>
                <td>4</td>
                <td><Link to="/blog">Blog</Link></td>
                <td>Social</td>
                <td><Link to={`/blog/${footerUltimiArticoli[3].slug}`}>{footerUltimiArticoli[3].title}</Link></td>
              </tr>
            </tbody>
          </Table>
          </Col>
      </Row>
    </footer>
  )
}

export default Footer