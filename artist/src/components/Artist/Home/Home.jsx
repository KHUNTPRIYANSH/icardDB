import React, { useContext } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      {/* <img src="../../server/images/1665120495660.jpg" alt="" /> */}
      <div className="h-left">
        <h1 className="home-t">
          Artist Id-Card <br /> Registration
        </h1>
        <h2 className="gray">
          Online Registration, Approval & I-card generation portal for local
          artist of youth and cultural Activities. Any artist can apply in any
          cultural event of their choice. After getting approval one can get
          his/her ID-card for event.
        </h2>
        <Link to="/signup">
          <div className="btn">Explore Events</div>
        </Link>
      </div>
      <div className="h-right">
        <img
          src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/art-log.png"
          alt=""
        />
      </div>
    </div>
  );
}
