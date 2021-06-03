import React from 'react';
import Video from '../modules/video'
import './videoSection.scss'


const VideoSection = () => {
  return (
    <div className="video-section-container">
      <div className="section-video">
        <Video
          videoSrcURL="https://www.youtube.com/embed/auBb12TIl5Y"
          videoTitle="Panoramica Termini Imerese"
        />
      </div>
      <div className="section-text">
        <p>
          testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.testo prova.
      </p>
      </div>


    </div>
  )
}

export default VideoSection