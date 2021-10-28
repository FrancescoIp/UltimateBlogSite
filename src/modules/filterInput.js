import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './filterInput.scss'
import './grid.scss'

const FilterInput = (props) => {



  return (
    <Row className="justify-content-around">
      <Col xs={12} className="text-center">
        <button onClick={props.handleValueChange} value="">All</button>
        <button onClick={props.handleValueChange} value="Chiese">Chiese</button>
        <button onClick={props.handleValueChange} value="Musei">Musei</button>
        <button onClick={props.handleValueChange} value="Cultura">Cultura</button>
      </Col>
      <Col xs={8} className="px-2">
        <input
          type="text"
          aria-label="Search"
          placeholder="Type to filter posts..."
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