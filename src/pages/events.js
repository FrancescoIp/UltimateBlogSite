import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { graphql, useStaticQuery } from 'gatsby';

import Header from '../components/header'
import Footer from '../components/footer'
import Seo from '../components/seo.js'
import Sidebar from '../components/sidebar'
import EventDisplay from '../components/eventsDisplay'
import './events.scss'
import * as layoutStyles from '../components/layout.module.scss'



const Events = () => {

  const data = useStaticQuery(graphql`
     query {
  allContentfulBlogPost {
    edges {
      node {
        title
        slug
        evento
        mostrare
        location
        titoloEvento
        dataEventoShort: dataEvento(formatString: "YYYY-M-D")
        dataEventoAll: dataEvento(formatString: "MMMM Do HH:mm, YYYY")
      }
    }
  }
}
  `)

  
  
  const today = new Date()
  const allPosts = data.allContentfulBlogPost.edges

  const [chosenDate, setChosenDate] = useState(today)
  
  const changeDay = () => {
    const closestDayWithEvents = getFullDate(firstDayWithEvents)
    setChosenDate(closestDayWithEvents)
  }

  const getFullDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const fullDate = year + '-' + month + '-' + day
    return (
      fullDate
    )
  }
  const inverseGetFullDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const fullDate = `${day===1?"l' ":"il "}${day} - ${month} - ${year}`
    return (
      fullDate
    )
  }

  const allEventsDates = allPosts.reduce((accumulator, currentEvent) => {
    if (currentEvent.node.evento) {
      accumulator.push(currentEvent.node.dataEventoShort )
    }
    return accumulator
  }, [])

  const allEventsDateFormatAfterToday = allEventsDates.reduce((accumulator, currentDate)=>{
     if(new Date(currentDate)>= today){
       accumulator.push(new Date(currentDate))
     }
     return accumulator.sort((a,b)=>a-b)
  }, [])
  const firstDayWithEvents = allEventsDateFormatAfterToday[0]

  const eventsToShow = allPosts.filter(event => {
    return (event.node.evento && event.node.dataEventoShort === chosenDate)
  })

  const NoEventsToShow = () => {
    return (
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <h4>Nessun evento in programma per oggi.</h4>
        <p>Prossimo evento <button id="goToDate" onClick={changeDay}>{inverseGetFullDate(firstDayWithEvents)}</button></p>
      </div>

    )
  }

  return (
    <>
      <Seo title="Eventi" />
      <Sidebar />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
        </div>
        <h1 style={{ textAlign: "center" }}>
          Pagina degli eventi
        </h1>
      </div>
      <div className="calendar-events-container">
        <Calendar
          tileClassName={({ date }) => {
            const fullDate = getFullDate(date)
            return (allEventsDates.includes(fullDate) && today<=date ? 'day-event' : null)
          }}
          onClickDay={(value) => {
            const fullDate = getFullDate(value)
            setChosenDate(fullDate)
          }}
        />
        <div className="events-container">
          {!eventsToShow.length ? <NoEventsToShow /> :
            <ol className="posts">
              {eventsToShow.map((evento, index) => {
                const slug = evento.node.mostrare && !!evento.node.slug ? evento.node.slug : null
                return (
                  <EventDisplay
                    expired={new Date(evento.node.dataEventoShort)<today}
                    index={index}
                    titolo={evento.node.titoloEvento}
                    data={evento.node.dataEventoAll}
                    location={evento.node.location}
                    slug={slug}
                  />
                )
              })}
            </ol>
          }
        </div>
      </div>
      <div className={layoutStyles.container}>
        <Footer />
      </div>
    </>
  )
}

export default Events