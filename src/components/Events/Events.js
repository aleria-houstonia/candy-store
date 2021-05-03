import React from 'react'
import {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Events = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className="main_block">
            <div className="comment">
            <h2>UPCOMING EVENTS</h2>
            <h4>Di Bruno Bros.</h4>
            <div className="comment_title">  <h4>There are no upcoming events.</h4></div>
              <h1>SOCIAL SHARING</h1>
              <h3>From Our Events</h3>
            </div>
            <div className="calendar">
            <Calendar
        onChange={onChange}
        value={value}
      />


            </div>
            
        </div>
    )
}

export default Events
