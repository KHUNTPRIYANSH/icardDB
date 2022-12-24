import React from "react";
import "../css/Contact.css";
import "../css/EventForm.css";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import Person2Icon from "@mui/icons-material/Person2";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NumbersIcon from "@mui/icons-material/Numbers";
import FestivalIcon from "@mui/icons-material/Festival";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ModeIcon from "@mui/icons-material/Mode";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
const EventForm = () => {
  return (
    <div>
      <header className="event-sec">
        <div className="e-title">
          Apply
          <span id="golden"> For </span>
          Event
        </div>
      </header>
      <div className="message">
        <form action="" className="contactus">
          <div className="input">
            <label className="icon">
              <Person2Icon />
            </label>
            <input
              type="text"
              className="name"
              placeholder="Leader Full Name"
            />
          </div>
          <div className="input">
            <label className="icon">
              <PeopleAltIcon />
            </label>
            <input type="text" className="name" placeholder="Group Name" />
          </div>
          <div className="input">
            <label className="icon">
              <PhoneIcon />
            </label>
            <input
              type="number"
              className="name"
              placeholder="Contact Number"
            />
          </div>
          <div className="input">
            <label className="icon">
              <AlternateEmailIcon />
            </label>
            <input type="email" className="name" placeholder="Email Address" />
          </div>
          <div className="input">
            <label className="icon">
              <NumbersIcon />
            </label>
            <input
              type="number"
              className="name"
              placeholder="Total number of Artist"
            />
          </div>
          <div className="input">
            <label className="icon">
              <FestivalOutlinedIcon />
            </label>
            <input
              type="text"
              className="name"
              placeholder="Theme of Performance"
            />
          </div>

          <div className="input">
            <label className="icon">
              <FestivalIcon />
            </label>
            <select className="name">
              <option value="-1" selected>
                Select DanceFrom
              </option>
              <option value="Bharatnatyam">Bharatnatyam</option>
              <option value="Kuchipudi">Kuchipudi</option>
              <option value="Kathakali">Kathakali</option>
              <option value="Odisi">Odisi</option>
              <option value="Manipuri">Manipuri</option>
              <option value="Katthak">Katthak</option>
              <option value="Mohiniattam">Mohiniattam</option>
            </select>
          </div>

          <div className="inmsg">
            <label className="icon msicon">
              <EmojiEventsIcon />
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="msg"
              placeholder="Details of Awards / Honors"
            />
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
              placeholder="Have you performed at District, State, National or International Level? If Yes, Provide Details"
            />
          </div>
          <div className="input">
            <label className="icon">
              <AddAPhotoIcon />
            </label>
            <div className="nn2">
              <div className="tx">Passport Size Image </div>
              <input type="file" name="" id="" />
            </div>
          </div>
          <div className="input">
            <label className="icon">
              <CreditScoreIcon />
            </label>
            <div className="nn2">
              <div className="tx">Upload Aadhar-Card </div>
              <input type="file" name="" id="" />
            </div>
          </div>
          <div className="input">
            <label className="icon">
              <ModeIcon />
            </label>
            <div className="nn2">
              <div className="tx">Upload The Signature</div>
              <input type="file" name="" id="" />
            </div>
          </div>
          <div className="wpp">
            <div className="forbtn">
              <div className="btn submit">Submit</div>
            </div>
            <div className="forbtn">
              <input type="reset" value="Reset" className="btn reset" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
