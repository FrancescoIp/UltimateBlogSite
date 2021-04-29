import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'
import * as headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

return (
  <header className={headerStyles.header}>
    <StaticImage src="../images/home/LOGO.png" alt="LOGO" width={300} height={300} />
    <h1><Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link></h1>
    <nav>
      <ul className={headerStyles.navList}>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About Us</Link></li>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contactUs">Contact Us</Link></li>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
      </ul>
    </nav>
  </header>
)
}

export default Header