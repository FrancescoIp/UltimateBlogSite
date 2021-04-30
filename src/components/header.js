import React from 'react';
import { Link } from 'gatsby';
import * as headerStyles from './header.module.scss'
import Logo from '../images/home/LOGO.png'

const Header = () => {
  // Title been switched for a LOGO
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <header className={headerStyles.header}>
        <div className={headerStyles.navLogo}>
          <Link to="/"><img src={Logo} alt="LOGO"></img></Link>
        </div>
        <nav className={headerStyles.navMenu}>
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