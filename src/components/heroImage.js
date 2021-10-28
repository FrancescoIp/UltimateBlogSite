import React from 'react'
import './heroImage.scss'
import { Row, Col, Button } from 'react-bootstrap'
import {Link} from 'gatsby'


function HeroImage() {
  return (
    <header>
      <div class="container">
        <h1>- HimerAzione - </h1>
        <h3>Termini raccontata dai Termitani</h3>
        <Row className="justify-content-around mt-4">
          <Col sm={3} className="d-grid gap-2 pt-3 pt-xs-0">
            <Button variant="outline-info" size="lg">Chi Siamo</Button>
          </Col>
          <Col sm={3} className="d-grid gap-2 pt-3 pt-xs-0">
            <Button variant="outline-info" size="lg">Cosa Facciamo</Button>
          </Col>
          <Col sm={3} className="d-grid gap-2 pt-3 pt-xs-0">
            <Button variant="outline-info" size="lg">
              <Link to="/blog">Blog</Link>
            </Button>
          </Col>
        </Row>
      </div>
    </header>
  )
}

export default HeroImage