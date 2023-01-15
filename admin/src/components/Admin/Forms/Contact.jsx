import React from "react";
import "../../../Css/Contact.css";
import "../../../Css/EventForm.css";
import FestivalIcon from "@mui/icons-material/Festival";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
const Contact = () => {
  return (
    <div>
      <header className="event-sec">
        <div className="e-title">
          Add
          <span id="golden"> New </span>
          Events
        </div>
      </header>
      <div className="message">
        <form action="" className="contactus">
          <div className="input">
            <label className="icon">
              <FestivalOutlinedIcon />
            </label>
            <input type="text" className="name" placeholder="Event Name" />
          </div>
          <div className="input">
            <label className="icon">
              <DateRangeRoundedIcon />
            </label>
            <input type="date" className="name" placeholder="" />
          </div>
          <div className="input">
            <label className="icon">
              <FestivalIcon />
            </label>
            <div className="nn2">
              <div className="tx">Upload Event Poster </div>
              <input type="file" name="" id="" />
            </div>
          </div>
          <div className="input">
            <label className="icon">
              <AddLocationAltRoundedIcon />
            </label>
            <input type="text" className="name" placeholder="Event Location" />
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
              placeholder="Event Description"
            />
          </div>
          <div className="forbtn">
            <div className="btn">Add Event</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
