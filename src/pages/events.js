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
// import 'react-calendar/dist/Calendar.css';


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
        dataEventoShort: dataEvento(formatString: "D M YYYY")
        dataEventoAll: dataEvento(formatString: "MMMM Do HH:mm, YYYY")
      }
    }
  }
}
  `)

  const [chosenDate, setChosenDate] = useState('')
  const allPosts = data.allContentfulBlogPost.edges

  const allEvents = allPosts.filter((event) => {
    return event.node.evento
  })
  const allEventsDates = allEvents.map((event) => {
    return event.node.dataEventoShort
  })

  const eventsToShow = allPosts.filter(event => {
    return (event.node.evento && event.node.dataEventoShort === chosenDate)
  })


  return (
    <>
      <Seo title="Eventi" />
      <Sidebar/>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
        </div>
        <h1 style={{textAlign:"center"}}>Pagina degli eventi</h1>
      </div>
      <div className="calendar-events-container">
        <Calendar
          tileContent={({ date }) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const fullDate = day + ' ' + month + ' ' + year
            return (
              allEventsDates.includes(fullDate) ? <div className='day-event' /> : null
            )
          }}
          // tileClassName={({ date }) => {
          //   const day = date.getDate();
          //   const month = date.getMonth() + 1;
          //   const year = date.getFullYear();
          //   const fullDate = day + ' ' + month + ' ' + year
          //   return(
          //     allEventsDates.includes(fullDate) ? 'day-event' : null
          //   )  
          // }}
          onClickDay={(value) => {
            const day = value.getDate();
            const month = value.getMonth() + 1;
            const year = value.getFullYear();
            const fullDate = day + ' ' + month + ' ' + year
            setChosenDate(fullDate)
          }}
        />
        <div className="events-container">
          {!eventsToShow.length ? <p>Nothing to show here :( </p> :
            <ol className="posts">
              {eventsToShow.map((evento, index) => {
                const slug = evento.node.mostrare && !!evento.node.slug ? evento.node.slug : null
                return (
                  <EventDisplay
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