import React, { useContext, useState } from "react";
import Tilt from "react-parallax-tilt";
import "../../Css/Event.css";
const Events = () => {
  return (
    <div className="eee">
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
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee47"
              glarePosition="all"
              tiltMaxAngleX="13"
              tiltMaxAngleY="4"
            >
              <div className="card">
                <div className="card-img">
                  <img src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/event1.jpg" />
                  <div className="time">
                    24 <br /> Nov
                  </div>
                </div>
                <div className="card-info">
                  <div className="info-loc">Rajkot</div>
                  <div className="info-t">Gujarat Dance Fest</div>
                  <div className="info-des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate voluptatum ad alias minus dolores, consequuntur
                    repellendus culpa nam, quaerat.
                  </div>
                  {/* <div className="join btn">Join Now</div> */}
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee80"
              glarePosition="all"
              tiltMaxAngleX="13"
              tiltMaxAngleY="4"
            >
              <div className="card">
                <div className="card-img">
                  <img src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/event-2.jpg" />
                  <div className="time">
                    12 <br /> Jan
                  </div>
                </div>
                <div className="card-info">
                  <div className="info-loc">Surat</div>
                  <div className="info-t">Local Cultural Fest</div>
                  <div className="info-des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate voluptatum ad alias minus dolores, consequuntur
                    repellendus culpa nam, quaerat.
                  </div>
                  {/* <div className="join btn">Join Now</div> */}
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee80"
              glarePosition="all"
              tiltMaxAngleX="13"
              tiltMaxAngleY="4"
            >
              <div className="card">
                <div className="card-img">
                  <img src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/event-2.jpg" />
                  <div className="time">
                    12 <br /> Jan
                  </div>
                </div>
                <div className="card-info">
                  <div className="info-loc">Surat</div>
                  <div className="info-t">Local Cultural Fest</div>
                  <div className="info-des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate voluptatum ad alias minus dolores, consequuntur
                    repellendus culpa nam, quaerat.
                  </div>
                  {/* <div className="join btn">Join Now</div> */}
                </div>
              </div>
            </Tilt>{" "}
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee47"
              glarePosition="all"
              tiltMaxAngleX="13"
              tiltMaxAngleY="4"
            >
              <div className="card">
                <div className="card-img">
                  <img src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/event1.jpg" />
                  <div className="time">
                    24 <br /> Nov
                  </div>
                </div>
                <div className="card-info">
                  <div className="info-loc">Rajkot</div>
                  <div className="info-t">Gujarat Dance Fest</div>
                  <div className="info-des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate voluptatum ad alias minus dolores, consequuntur
                    repellendus culpa nam, quaerat.
                  </div>
                  {/* <div className="join btn">Join Now</div> */}
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee47"
              glarePosition="all"
              tiltMaxAngleX="13"
              tiltMaxAngleY="4"
            >
              <div className="card">
                <div className="card-img">
                  <img src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/event1.jpg" />
                  <div className="time">
                    24 <br /> Nov
                  </div>
                </div>
                <div className="card-info">
                  <div className="info-loc">Rajkot</div>
                  <div className="info-t">Gujarat Dance Fest</div>
                  <div className="info-des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate voluptatum ad alias minus dolores, consequuntur
                    repellendus culpa nam, quaerat.
                  </div>
                  {/* <div className="join btn">Join Now</div> */}
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee80"
              glarePosition="all"
              tiltMaxAngleX="13"
              tiltMaxAngleY="4"
            >
              <div className="card">
                <div className="card-img">
                  <img src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/event-2.jpg" />
                  <div className="time">
                    12 <br /> Jan
                  </div>
                </div>
                <div className="card-info">
                  <div className="info-loc">Surat</div>
                  <div className="info-t">Local Cultural Fest</div>
                  <div className="info-des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate voluptatum ad alias minus dolores, consequuntur
                    repellendus culpa nam, quaerat.
                  </div>
                  {/* <div className="join btn">Join Now</div> */}
                </div>
              </div>
            </Tilt>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
