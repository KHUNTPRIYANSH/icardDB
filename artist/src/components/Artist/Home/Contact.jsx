import React from "react";
import "../../../Css/Contact.css";
import "../../../Css/EventForm.css";
import Person2Icon from "@mui/icons-material/Person2";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FestivalIcon from "@mui/icons-material/Festival";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import NumbersIcon from "@mui/icons-material/Numbers";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
const Contact = () => {
  return (
    <div>
      <header className="event-sec">
        <div className="e-title">
          Add
          <span id="golden"> Your </span>
          Quarry
        </div>
      </header>
      <div className="message">
        <form action="" className="contactus">
          <div className="input">
            <label className="icon">
              <AlternateEmailIcon />
            </label>
            <input type="email" className="name" placeholder="Your Email" />
          </div>
          <div className="input">
            <label className="icon">
              <Person2Icon />
            </label>
            <input type="text" className="name" placeholder="Your Full Name" />
          </div>
          <div className="input">
            <label className="icon">
              <FestivalOutlinedIcon />
            </label>
            <input type="text" className="name" placeholder="Event Name" />
          </div>

          <div className="input">
            <label className="icon">
              {" "}
              <NumbersIcon />
            </label>
            <input type="text" className="name" placeholder="Email Subject" />
          </div>
          <div className="inmsg">
            <label className="icon msicon">
              <DescriptionRoundedIcon />
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="msg"
              placeholder="Quarry Description"
            />
          </div>
          <div className="forbtn">
            <div className="btn">Submit</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
