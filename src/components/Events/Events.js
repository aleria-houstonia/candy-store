import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Events/Events.css";

import Comments from "../Comments/Comments";
const Events = () => {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <div className="comment__back ">
                <div className="comment_name">
                    <h2 className="comment_name_h">UPCOMING EVENTS</h2>
                    <h4 className="comment_name_hl">Di Bruno Bros.</h4>
                    <div className="comment_title">
                        {" "}
                        <h4 className="comment_name_hlm">
                            There are no upcoming events.
                        </h4>
                    </div>
                    <h2 className="comment_name_h">SOCIAL SHARING</h2>
                    <h4 className="comment_name_hlm">From Our Events</h4>
                </div>
                <div className="calendar">
                    <Calendar onChange={onChange} value={value} />
                </div>
            </div>

            <Comments />
        </>
    );
};

export default Events;
