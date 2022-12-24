import { useState } from "react";
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

function App() {
  const [count, setCount] = useState(0);

  return (
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
        {/* <Charts /> */}
      </main>
    </div>
  );
}

export default App;
