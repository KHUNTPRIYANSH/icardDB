import { useEffect, useContext, useState } from "react";
// import { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import "../../Css/Event.css";
const Events = () => {
  const user = "admin";
  const [events, setEvents] = useState([]);
  const backend = "http://localhost:8080";
  const getevents = async () => {
    const res = await fetch(`${backend}/api/getevent`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    setEvents(data.events);
  };

  useEffect(() => {
    getevents();
  }, []);
  return (
    <div className="eee" id="H3">
      <div>
        <header className="event-sec">
          <center>
            <div className="e-title">
              Current
              <span id="golden"> List Of </span>
              Events
            </div>
          </center>
        </header>
        <section>
          <div className="e-list">
            {events.map((cr) => {
              return (
                <Tilt
                  glareEnable={true}
                  glareColor="#ebe7ee47"
                  glarePosition="all"
                  tiltMaxAngleX="13"
                  tiltMaxAngleY="4"
                >
                  <div className="card">
                    <div className="card-img">
                      <img src={cr.image} />
                      <div className="time">
                        {cr.eventDay} <br /> {cr.eventMonth}
                      </div>
                    </div>
                    <div className="card-info">
                      <div className="info-loc">{cr.destination}</div>
                      <div className="info-t">{cr.name}</div>
                      <div className="info-des">
                        {cr.desc} <br />
                      </div>
                      <div id="join">Join Now</div>
                    </div>
                  </div>
                </Tilt>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
