import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../../Css/App.css";
import "../Fixed/Aside";
import "../Fixed/Menu";
import Aside from "../Fixed/Aside";
import Menu from "../Fixed/Menu";
import Charts from "../Admin/Charts/Charts";
import Artists from "../Admin/Artist-info/Artists";
import Contact from "../Admin/Forms/Contact";
import Chat from "../Admin/Artist-info/Contact";
import Events from "../Fixed/Events";
import Footer from "../Fixed/Footer";
import ArtistSignIn from "../Log/ArtistSignIn";
import ArtUp from "../Log/ArtUp";
import Calendar from "../Admin/Calendar/Calendar";
import ArtistInfo from "../Admin/Artist-info/ArtistInfo";
import Error404 from "../Fixed/Error404";
import Welcome from "../Fixed/Welcome";
import { useEffect } from "preact/hooks";
import Querry from "../Admin/Artist-info/Querry";

function App() {
  const [count, setCount] = useState(0);
  const [regid,setRegid]=useState("");
  const [admin,setAdmin]=useState("clerk");
  const [islogin,setIslogin]=useState(false);
  const [userId,setUserId]=useState({id:null,name:"-"});
  const backend = "https://myid-wine.vercel.app";
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signIn" element={<ArtistSignIn backend={backend} setAdmin = {setAdmin} setIslogin = {setIslogin}/>} />
          {/* <Route path="/signUp" element={<ArtUp />} /> */}
          <Route path="*" element={<Error404 />} />
          <Route
            path="/admin/artinfo"
            element={
              <div className="App">
                <Aside setIslogin={setIslogin}/>
                <main>
                  <Menu />
                  <div id="router">
                    <ArtistInfo admin={admin} id={regid} backend={backend} islogin={islogin}/>
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route
            path="/admin/artist/table"
            element={
              <div className="App">
                <Aside setIslogin={setIslogin}/>
                <main>
                  <Menu />
                  <div id="router">
                    <Artists admin ={admin} backend={backend} islogin={islogin} setId = {setRegid}/>
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="App">
                <Aside setIslogin={setIslogin}/>
                <main>
                  <Menu />
                  <div id="router">
                    <Welcome  islogin={islogin}/>
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route
            path="/chat"
            element={
              <div className="App">
                <Aside setIslogin={setIslogin}/>
                <main>
                  <Menu />
                  <div id="router">
                    <Chat backend={backend} userId={userId} islogin={islogin}/>
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route
            path="/quarry"
            element={
              <div className="App">
                <Aside setIslogin={setIslogin}/>
                <main>
                  <Menu />
                  <div id="router">
                    <Querry islogin={islogin} backend={backend} setUserId={setUserId} />
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route
            path="/admin/charts"
            element={
              <div className="App">
                <Aside setIslogin={setIslogin}/>
                <main>
                  <Menu />
                  <div id="router">
                    <Charts backend={backend} islogin={islogin}/>
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route
            path="/admin/event-list"
            element={
              <div className="App">
                <Aside setIslogin={setIslogin}/>
                <main>
                  <Menu />
                  <div id="router">
                    <Events backend={backend} islogin={islogin}/>
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route
            path="/admin/add/event"
            element={
              <div className="App">
                <Aside setIslogin={setIslogin}/>
                <main>
                  <Menu />
                  <div id="router">
                    <Contact backend={backend} islogin={islogin} />
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          {/* <Route
            path="/admin/add/bookmark"
            element={
              <div className="App">
                <Aside />
                <main>
                  <Menu />
                  <div id="router">
                    <Calendar />
                  </div>
                  <Footer />
                </main>
              </div>
            }
          /> */}
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
