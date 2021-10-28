import React from 'react';
import Video from '../modules/video'
import {Col, Row} from 'react-bootstrap'
import './videoSection.scss'


const VideoSection = () => {
  return (
    <Row className="justify-content-around">
      <Col md={4} className="my-3">
        <Video
          videoSrcURL="https://www.youtube.com/embed/auBb12TIl5Y"
          videoTitle="Panoramica Termini Imerese"
        />
      </Col>
      <Col md={4} className="my-3 ">

        <h2>Chi Siamo?</h2>
        <p>
          testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.
        </p>
      </Col>
    </Row>
  )
}

export default VideoSection