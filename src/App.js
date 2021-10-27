import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins

// a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const API_KEY = process.env.REACT_APP_API_KEY
const CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID

export default class App extends React.Component {
  render() {
    return (
    <>
      <h3>Physique Magnifique Calendar</h3>
      <h2>Yoga Studio</h2>
      <FullCalendar
        plugins={[ timeGridPlugin, dayGridPlugin, googleCalendarPlugin ]}
        googleCalendarApiKey={API_KEY}
        events={{
          googleCalendarId: CALENDAR_ID
        }}
        initialView="timeGridWeek"
        headerToolbar={{
          start: 'prev', // will normally be on the left. if RTL, will be on the right
          center: 'title',
          end: 'today timeGridDay,timeGridWeek,dayGridMonth next' // will normally be on the right. if RTL, will be on the left
        }}

      />
    </>
    )
  }
}