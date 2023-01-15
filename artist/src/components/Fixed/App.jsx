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
                <Home />
                <About />
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
