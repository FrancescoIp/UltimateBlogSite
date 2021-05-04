import React from 'react';
import { Link } from 'gatsby'
import './eventsDisplay.scss'


const EventDisplay = ({ index, titolo, data, location, slug }) => {
  const titoloToShow = titolo ? titolo : 'titolo prova'
  const dataToShow = data ? data : 'data prova'
  const locationToShow = location ? location : 'location prova'
  if (slug) {
    return (
      <li className="post" key={index}>
        <Link to={`/blog/${slug}`}>
          <h3>Titolo: {titoloToShow}</h3>
          <p>Data: {dataToShow}</p>
          <p>Dove?: {locationToShow}</p>
        </Link>
      </li>
    )
  }
  return (
    <li className="post" key={index}>
      <div className="eventNoLink">
        <h3>{titoloToShow}</h3>
        <p>{dataToShow}</p>
        <p>{locationToShow}</p>
      </div>
    </li>
  )
}

export default EventDisplay