import React from "react";
import { Link } from "react-router-dom";
import "../../Css/ArtistSignIn.css";
import AddCardIcon from "@mui/icons-material/AddCard";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
const ArtistSignIn = () => {
  return (
    <>
      <section id="ArtSignIn">
        <div className="left">
          <img
            src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/art-log.png"
            alt=""
          />
        </div>
        <div className="right">
          <div className="data">
            <header>
              <AddCardIcon id="logo" className="gold" />
              My-ID
            </header>
            <h1>Welcome back!</h1>
            <h2>Please sign in to continue.</h2>
            <form action="#">
              <h3>Email</h3>
              <input type="text" placeholder="abcd123@xyz.com" />
              <h3>Password</h3>
              <input type="password" placeholder="●●●●●●●●●●●" />
              <button type="submit" className="btn">
                Sign In
              </button>
            </form>
            <div className="b-box">
              <div className="btn">
                Login With <FacebookRoundedIcon />
              </div>
              <div className="btn">
                Login With <TwitterIcon />
              </div>
            </div>
            <p>
              <span className="gray">Don't have an account?</span>
              <Link to="/signUp">Create an Account</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtistSignIn;
