import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import "../css/Menu.css";
const Menu = () => {
  return (
    <>
      <nav>
        <div className="search">
          <input
            type="search"
            name=""
            placeholder="Search for anything ..."
            id=""
          />
          <SearchIcon />
        </div>
        <div className="nav-links">
          <LightModeOutlinedIcon id="light" />
          <MarkEmailUnreadOutlinedIcon id="mail" />
          <NotificationsActiveOutlinedIcon id="noti" />
          <img
            src="https://avatars.githubusercontent.com/u/58349765?s=400&u=22e094b356d4541a0372f11782d1263e0cbdcb56&v=4"
            alt=""
          />
        </div>
      </nav>
    </>
  );
};

export default Menu;
