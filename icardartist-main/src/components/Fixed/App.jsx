import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../../Css/App.css";
import "../Fixed/Menu";
import Menu from "../Fixed/Menu";
import Events from "../Fixed/Events";
import Footer from "../Fixed/Footer";
import EventForm from "../Artist/EventForm/EventForm";
import ProgressCheck from "../Artist/Progress/ProgressCheck";
import ArtistSignIn from "../Log/ArtistSignIn";
import ArtUp from "../Log/ArtUp";
import Icard from "../Artist/Progress/Icard";
import Error404 from "../Fixed/Error404";
import { dividerClasses } from "@mui/material";
import Home from "../Artist/Home/Home";
import About from "../Artist/Home/About";
import Contact from "../Artist/Home/Contact";
import LegendaryCursor from "legendary-cursor";

window.addEventListener("load", () => {
  LegendaryCursor.init({
    lineSize: 0.05,
    opacityDecrement: 0.55,
    speedExpFactor: 0.8,
    lineExpFactor: 0.6,
    sparklesCount: 65,
    maxOpacity: 0.99,

    // lineSize: 0,
    // opacityDecrement: 0,
    // speedExpFactor: 0.9,
    // lineExpFactor: 0,
    // sparklesCount: 55,
    // maxOpacity: 0.000001, // should be a number between [0 ... 1]
    texture1:
      "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/grad/Screenshot%20(426).png", // texture displayed on mouse hover
    texture2:
      "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/grad/Screenshot%20(426).png", // texture displayed on mouse hover
    // texture2:         "http://path_to_texture",      // texture displayed on mouse click
    texture3:
      "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/grad/Screenshot%20(426).png", // texture displayed on sparkles
  });
});
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signIn" element={<ArtistSignIn />} />
          <Route path="/signUp" element={<ArtUp />} />
          <Route path="*" element={<Error404 />} />
          <Route
            path="/"
            element={
              <div id="art-site">
                <Menu />
                <div className="bbbbb" id="cus">
                  <Home />
                  <About />
                </div>
                <Events />
                <EventForm />
                <Icard />
                <ProgressCheck />
                <Contact />
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
