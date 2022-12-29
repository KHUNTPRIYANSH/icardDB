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
import "../css/Aside.css";
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
            <div className="links">
              <DashboardOutlinedIcon />
              Index
            </div>
          </div>
          <div className="g-2">
            <div className="title">General</div>
            <div className="links">
              <FestivalOutlinedIcon />
              Event-List
            </div>
            <div className="links">
              <InsertChartOutlinedIcon />
              Charts
            </div>
          </div>
          <div className="g-3">
            <div className="title">New Post</div>
            <div className="links">
              <FestivalIcon />
              Add Events
            </div>

            <div className="links">
              <NewspaperIcon /> New Blog
            </div>
          </div>
          <div className="g-4">
            <div className="title">Approvement</div>
            <div className="links">
              <PeopleIcon />
              Artists
            </div>

            <div className="links">
              <NewspaperIcon /> New Blog
            </div>
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
