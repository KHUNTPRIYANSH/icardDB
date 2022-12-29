import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../Css/App.css";
import "./Aside";
import "./Menu";
import Aside from "./Aside";
import Menu from "./Menu";
import Charts from "./Charts";
import "../css/App.css";
import Artists from "./Artists";
import Contact from "./Contact";
import Events from "./Events";
import Footer from "./Footer";
import EventForm from "./EventForm";
import ProgressCheck from "./ProgressCheck";
import ArtistSignIn from "./ArtistSignIn";
import ArtUp from "./ArtUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signIn" element={<ArtistSignIn />} />
          <Route path="/signUp" element={<ArtUp />} />
          <Route
            path="/"
            element={
              <div className="App">
                <Aside />
                <main>
                  <Menu />
                  <div id="router">
                    <EventForm />
                    <ProgressCheck />
                    <Artists />
                    <Contact />
                    <Events />
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
