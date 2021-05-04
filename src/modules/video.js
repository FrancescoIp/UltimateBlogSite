import React from "react"
import './video.scss'

const Video = ({ videoSrcURL, videoTitle, width, height, ...props }) => (
  <div className='video-container'>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video