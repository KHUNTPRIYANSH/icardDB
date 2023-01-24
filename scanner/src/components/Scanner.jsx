import React, { useState } from "react";
import "./scanner.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import sound from "../s1.mp3";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useNavigate } from "react-router-dom";import AddCardIcon from '@mui/icons-material/AddCard';import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
const mongoose = require("mongoose");

function Scanner(props) {
  let colTheme = document.getElementById("light-t");
  if (colTheme) {
    console.log(colTheme);
  }
  const [theme, setTheme] = useState("dark-t");
  const themeSwitch = () => {
    // console.log("light");
    if (theme === "dark-t") {
      setTheme("light-t");
    } else {
      setTheme("dark-t");
    }
  };
  useEffect(() => {
    document.body.id = theme;
  }, [theme]);

  const { backend, islogin } = props;
  const [data, setdata] = useState({});
  const [id, setId] = useState("");
  const [war, setWar] = useState("Invalid");
  const nav = useNavigate();
  const [part, setPart] = useState([
    {
      name: "-",
      gender: "-",
      email: "-",
      phoneNo: "-",
    },
  ]);

  const toggle = () => {};

  const handlesubmit = async () => {
    document.getElementById("scanner").style.display = "none";
    document.getElementById("checkdt").style.display = "none";
    document.getElementById("cardt").style.display = "none";
    document.getElementById("war").style.display = "none";

    if (id == "") {
      alert("invalid id");
      return;
    }
    const res = await fetch(`${backend}/check/${id}`, { method: "GET" });
    const data = await res.json();
    if (data.status == "ok") {
      setdata(data.data);
      setPart(data.data.participants);
      setTimeout(() => {
        document.getElementById("cardt").style.display = "unset";
      }, 500);
    } else {
      setWar(data.status);
      setTimeout(() => {
        document.getElementById("war").style.display = "unset";
      }, 500);
      // alert(data.status);
    }
  };
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      // Scanner will be initialized in DOM inside element with id of 'reader'
      qrbox: {
        width: 250,
        height: 250,
      }, // Sets dimensions of scanning box (set relative to reader element width)
      fps: 20, // Frames per second to attempt a scan
    });
    function scane() {
      document.getElementById("scanner").style.display = "unset";
      document.getElementById("checkdt").style.display = "none";
      document.getElementById("cardt").style.display = "none";
      document.getElementById("war").style.display = "none";
      scanner.render(success, error);
    }
    document.getElementById("btn").onclick = scane;
    let resl = "afjkf";
    const success = (result) => {
      play();
      resl = result;
      // change here for defrente qrcode
      resl = resl.substring(6);
      scanner.clear();
      handlesubmit2(resl);
    };
    function play() {
      new Audio(sound).play();
    }
    function error(err) {
      console.error(err);
      // Prints any errors to the console
    }
    const handlesubmit2 = async (resl) => {
      // let resl = document.getElementById('getid').innerText;
      if (resl == "") {
        alert("invalid id");
        return;
      }
      if (!mongoose.Types.ObjectId.isValid(resl)) {
        setWar("Duplicate Id...");
        setTimeout(() => {
          document.getElementById("war").style.display = "unset";
        }, 500);
        return;
      }
      const res = await fetch(`${backend}/check/${resl}`, { method: "GET" });
      const data = await res.json();
      if (data.status == "ok") {
        setdata(data.data);
        setPart(data.data.participants);
        setTimeout(() => {
          document.getElementById("cardt").style.display = "unset";
        }, 500);
      } else {
        setWar(data.status);
        setTimeout(() => {
          document.getElementById("war").style.display = "unset";
        }, 500);
        // alert(data.status);
      }
    };
  });
  useEffect(() => {
    if (!islogin) {
      nav("/signIn");
    } else {
      document.getElementById("checkdt").style.display = "none";
      document.getElementById("cardt").style.display = "none";
      document.getElementById("war").style.display = "none";
      // document.getElementById('qrcodebtn').style.display="none";
    }
  }, []);
  function checkid() {
    setId("");
    document.getElementById("checkdt").style.display = "unset";
    document.getElementById("scanner").style.display = "none";
    document.getElementById("cardt").style.display = "none";
  }
  return (
    <div className="main">
      <nav>
        {/* <div className="nav-links">
          <LightModeOutlinedIcon id="light" onClick={themeSwitch} />
        </div> */}
        <div id="logo">
          <AddCardIcon /> MyId
        </div>
        <button  id="tm" onClick={themeSwitch}>
  <LightModeOutlinedIcon id="light" onClick={themeSwitch} />
        </button>
        <button className="btn" id="lo">
          {islogin ? "LogOut" : "SignIn"}
        </button>
      </nav>

      <div id="optn">
        <button className="btn" id="btn">Scan QR Code &nbsp; <QrCodeScannerIcon /> </button>
        <button className="btn" id="scid" onClick={checkid}>
          Check By Id  &nbsp;<DocumentScannerIcon />
        </button>
      </div>
      <div id="checkdt" className="checkdt">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlesubmit();
          }}
        >
          <input
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            type="text"
            placeholder="Enter Id here"
          />
          <button type="submit" id="gbt">GO</button>
        </form>
      </div>
      <div id="ctrrrr">
        <h1 id="war">{war}</h1>
      </div>
      <div id="scanner">
        <div id="reader"></div>
        <div id="result"></div>
        {/* <button id='qrcodebtn'>get Details</button> */}
      </div>

      <div id="cardt">
        <h1 id="ress">Valid Icard...</h1>
        <header className="event-sec">
          <div className="e-title">
            Details
            <span id="golden"> Of </span>
            Group
          </div>
        </header>
        <div className="a-info">
          <div className="i-field">
            <div className="i-l">
              <div className="ol-l">Group Picture</div>
            </div>
            <div className="i-r i-r-dp">
              <img src={data.groupImg} alt="" />
            </div>
          </div>
          <div className="i-field">
            <div className="i-l">
              <div className="ol-l">Leader Picture</div>
            </div>
            <div className="i-r i-r-dp">
              <img src={data.LeaderImg} alt="" />
            </div>
          </div>
          <div className="i-field">
            <div className="i-l">
              <div className="ol-l">Event Name</div>
            </div>
            <div className="i-r">{data.eventName}</div>
          </div>
          <div className="i-field">
            <div className="i-l">
              <div className="ol-l">Leader Name</div>
            </div>
            <div className="i-r">{data.LeaderName}</div>
          </div>
          <div className="i-field">
            <div className="i-l">
              <div className="ol-l">Group Name</div>
            </div>
            <div className="i-r">{data.gname}</div>
          </div>

          <div className="i-field">
            <div className="i-l">
              <div className="ol-l">No. of Artist</div>
            </div>
            <div className="i-r m-info">
              <div>
                <p>{data.NoArtist}</p>
              </div>
              <div>
                {part.map((ob) => {
                  return (
                    <div>
                      <p>name: {ob.name}</p>
                      <p>gender: {ob.gender}</p>
                      <p>email: {ob.email}</p>
                      <p>phoneNo: {ob.phoneNo}</p>
                      <br />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scanner;
