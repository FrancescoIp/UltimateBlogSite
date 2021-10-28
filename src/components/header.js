import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import Logo from '../images/home/LOGO-cropped.png'
import { Nav, Navbar, Container} from 'react-bootstrap';
import './header.scss'

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
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isBrowser = typeof window !== `undefined`
      const currentScrollY = isBrowser && window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);

      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);

      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  let isHide = goingUp ? "dispay-yes" : "display-none"

  return (
    <>
      <Navbar sticky="top" className={isHide} expand='md' bg="light">
        <Container fluid>
          <Navbar.Brand className="logo_container" >
            <Link to="/"><img id="logo_img" src={Logo} alt="LOGO"></img></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-around" >
            <Nav.Item as="span">
              <Nav.Link eventKey="cosa-facciamo">
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="span">
              <Nav.Link eventKey="cosa-facciamo">
                <Link to="/#jardinu-section">Cosa Facciamo</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="span">
              <Nav.Link eventKey="chi-siamo">
                <Link to="/#chi-siamo">Chi Siamo</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="span">
              <Nav.Link eventKey="blog">
                <Link to="/blog">Blog</Link>
              </Nav.Link>
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header