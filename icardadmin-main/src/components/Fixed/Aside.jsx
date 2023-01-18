import React from "react";
import AddCardIcon from "@mui/icons-material/AddCard";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import FestivalIcon from "@mui/icons-material/Festival";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import EventIcon from "@mui/icons-material/Event";
import "../../Css/Aside.css";
import { Link } from "react-router-dom";
const Aside = () => {
  return (
    <>
      <aside>
        <header>
          <AddCardIcon id="logo" className="gold" />
          My-ID
        </header>
        <section className="profile">
          <div className="dp">
            <img
              src="https://avatars.githubusercontent.com/u/58349765?s=400&u=22e094b356d4541a0372f11782d1263e0cbdcb56&v=4"
              alt=""
            />
          </div>
          <div className="name">Priyansh Khunt</div>
          <div className="type gray">Commissioner</div>
        </section>
        <section className="menu-links">
          <div className="g-1">
            <div className="title">Main</div>
            <Link className="links" to="/">
              <DashboardOutlinedIcon />
              Index
            </Link>
          </div>
          <div className="g-2">
            <div className="title">General</div>
            <Link className="links" to="/admin/event-list">
              <FestivalOutlinedIcon />
              Event-List
            </Link>
            <Link className="links" to="/admin/charts">
              <InsertChartOutlinedIcon />
              Charts
            </Link>
          </div>
          <div className="g-3">
            <div className="title">Add New</div>
            <Link className="links" to="/admin/add/event">
              <FestivalIcon />
              Add Events
            </Link>

            <Link className="links" to="/admin/add/bookmark">
              <EventIcon /> Add Bookmark
            </Link>
          </div>
          <div className="g-4">
            <div className="title">Approvement</div>
            <Link className="links" to="/admin/artist/table">
              <PeopleIcon />
              Artists
            </Link>

            {/* <Link className="links">
              <NewspaperIcon /> New Blog
            </Link> */}
          </div>
          <div className="g-5">
            <Link to="/signIn" className="log-out">
              <LogoutIcon id="gold" /> LogOut
            </Link>
          </div>
        </section>
      </aside>
    </>
  );
};

export default Aside;
