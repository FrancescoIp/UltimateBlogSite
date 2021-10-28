import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './footer.scss'


const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className="footer">
      Creato da {data.site.siteMetadata.author}, ®2021
    </footer>
  )
}

export default Footer