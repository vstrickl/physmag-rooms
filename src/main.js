import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins

// a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

// Stylesheets
import './main.css';

const API_KEY = process.env.REACT_APP_API_KEY
const CALENDAR_ID_1 = process.env.REACT_APP_CALENDAR_ID_1
const CALENDAR_ID_2 = process.env.REACT_APP_CALENDAR_ID_2

export default class App extends React.Component {
  render() {
    return (
    <div className="container">
      <div className="row mt-3 mb-5">
        <h4>Physique Magnifique</h4>
        <h2>Yoga Studio Calendar</h2>
      </div>
      
      <FullCalendar
        plugins={[ timeGridPlugin, dayGridPlugin, googleCalendarPlugin ]}
        googleCalendarApiKey={API_KEY}
        eventSources={ [
          {
            googleCalendarId: CALENDAR_ID_1
          },
          {
            googleCalendarId: CALENDAR_ID_2,
            className: 'private-workout'
          }
        ]}
        initialView='timeGridWeek'
        themeSystem='standard'
        headerToolbar={{
          start: 'prev', // will normally be on the left. if RTL, will be on the right
          center: 'title',
          end: 'today timeGridDay,timeGridWeek,dayGridMonth next' // will normally be on the right. if RTL, will be on the left
        }}
      />
    </div>
    )
  }
}