import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { graphql, useStaticQuery } from 'gatsby';
import moment from 'moment';

import Header from '../components/header'
import Footer from '../components/footer'
import Seo from '../components/seo.js'
import Sidebar from '../components/sidebar'
import EventDisplay from '../components/eventsDisplay'
import './events.scss'
import '../components/layout.scss'



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
        dataEvento(formatString:"YYYY-MM-DD")
      }
    }
  }
}
  `)

  const todayM = moment().format("YYYY-MM-DD")
  const allPosts = data.allContentfulBlogPost.edges
  const [chosenDate, setChosenDate] = useState(todayM)

  const changeDay = () => {
    setChosenDate(firstDayWithEvents)
  }

  const allDatesAfterYesteday = allPosts.reduce((accumulator, currentEvent) => {
    if (currentEvent.node.evento) {
      accumulator.push(currentEvent.node.dataEvento)
    }
    return accumulator.sort((a, b) => {
      a = a.split('-').reverse().join('');
      b = b.split('-').reverse().join('');
      return a > b ? -1 : a < b ? 1 : 0
    })
  }, [])

  const firstDayWithEvents = allDatesAfterYesteday[0]

  const dynamicDate = (day) => {
    const theDate = moment(day).format("D-MM-YYYY")
    const isTheFirst = moment(day).format("D") === "1"
    return `${isTheFirst ? "l' " : "il "}${theDate}`
  }

  const eventsToShow = allPosts.filter(event => {
    return (event.node.evento && moment(event.node.dataEvento).isSame(chosenDate))
  })



  const NoEventsToShow = () => {
    return (
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <h4>Nessun evento in programma per oggi.</h4>
        {moment().isBefore(firstDayWithEvents) && <p>Prossimo evento
          <button id="goToDate" onClick={changeDay}>
            {dynamicDate(firstDayWithEvents)}
          </button>
        </p>}
      </div>
    )
  }

  return (
    <>
      <Seo title="Eventi" />
      <Sidebar />
      <div className="container">
        <div className="content">
          <Header />
        </div>
        <h1 style={{ textAlign: "center" }}>
          Pagina degli eventi
        </h1>
      </div>
      <div className="calendar-events-container">
        <Calendar
          tileClassName={({ date }) => {
            const fullDate = moment(date).format("YYYY-MM-DD")
            return (allDatesAfterYesteday.includes(fullDate) ? 'day-event' : null)
          }}
          onClickDay={(value) => {
            setChosenDate(value)
          }}
        />
        <div className="events-container">
          {!eventsToShow.length ? <NoEventsToShow /> :
            <ol className="posts">
              {eventsToShow.map((evento, index) => {
                const slug = evento.node.mostrare && !!evento.node.slug ? evento.node.slug : null
                return (
                  <EventDisplay
                    expired={moment().isAfter(evento.node.dataEvento)}
                    index={index}
                    titolo={evento.node.titoloEvento}
                    data={evento.node.dataEvento}
                    location={evento.node.location}
                    slug={slug}
                  />
                )
              })}
            </ol>
          }
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </>
  )
}

export default Events