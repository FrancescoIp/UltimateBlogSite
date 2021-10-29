import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './filterInput.scss'
import './grid.scss'

const FilterInput = (props) => {



  return (
    <Row className="justify-content-around blog-header text-center mx-2 pb-2">
      <Col xs={12}>
       <h1>Il Blog</h1>
      </Col>
      <Col xs={5} >
        <button onClick={props.handleValueChange} value="">All</button>
        <button onClick={props.handleValueChange} value="Chiese">Chiese</button>
        <button onClick={props.handleValueChange} value="Musei">Musei</button>
        <button onClick={props.handleValueChange} value="Cultura">Cultura</button>
      </Col>
      <Col xs={4} className="px-2">
        <input
          className="input-spread"
          type="text"
          aria-label="Search"
          placeholder="Cerca l'articolo scrivendo qui"
          onChange={props.handleValueChange}
        />
      </Col>
      <Col md={2}>
        Posts displayed: {props.postShowing}
      </Col>
    </Row>
  )
}

export default FilterInput