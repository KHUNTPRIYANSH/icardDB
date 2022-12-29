import React, { useEffect, useState } from "react";
import "../css/Artist.css";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Artists = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [sdate, setSdate] = useState("");
  const admin = "clerk";
  const getuser = async () => {
    setSearch("");
    setSdate("");
    const data = await fetch(`http://localhost:8080/get/${admin}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    setUser(res.admindata);
    // console.log(res.admindata);
  };
  const getsearch = async (src) => {
    // console.log("search");

    const data = await fetch(`http://localhost:8080/get/${admin}/${src}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    setUser(res.admindata);
  };
  const searchByDate = async (dt) => {
    const data = await fetch(`http://localhost:8080/date/${admin}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dt,
      }),
    });
    const res = await data.json();
    setUser(res.admindata);
  };
  const getapproved = async () => {
    let newuser = [];
    let srch = user;
    for (let i = 0; i < srch.length; i++) {
      if (srch[i].PEON == "Approved") {
        newuser.push(srch[i]);
      }
    }
    setUser(newuser);
  };
  const getpending = async () => {
    let newuser = [];
    let srch = user;
    for (let i = 0; i < srch.length; i++) {
      if (srch[i].PEON == "Pending") {
        newuser.push(srch[i]);
      }
    }
    setUser(newuser);
  };

  const sortbyName = async () => {
    const data = await fetch(`http://localhost:8080/name/${admin}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    setUser(res.admindata);
  };
  const sortbyTime = async () => {
    const data = await fetch(`http://localhost:8080/time/${admin}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    setUser(res.admindata);
  };
  const sortbyTimed = async () => {
    const data = await fetch(`http://localhost:8080/timed/${admin}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    setUser(res.admindata);
  };

  useEffect(() => {
    getuser();
  }, []);
  return (
    <div>
      <header className="event-sec">
        <center>
          <div className="e-title">
            List Of
            <span id="golden"> Artist </span>
            To Validate
          </div>
        </center>
      </header>
      <div className="t-box">
        <div className="filter" id="filter">
          <div className="fil-title">Filter By Dance</div>
          <div
            className="hid-sec"
            id="hid-sec"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <button onClick={sortbyName}>SortbyName </button>
              <button onClick={sortbyTime}>Sortbytime </button>
              <button onClick={sortbyTimed}>Sortbytime-dsc </button>
            </div>

            <input
              placeholder="seach by date"
              style={{ backgroundColor: "transparent", color: "white" }}
              type="text"
              value={sdate}
              onChange={(e) => {
                e.preventDefault();
                searchByDate(e.target.value);
                setSdate(e.target.value);
              }}
            />
            <input
              style={{ backgroundColor: "transparent", color: "white" }}
              value={search}
              onChange={(e) => {
                e.preventDefault();
                getsearch(e.target.value);
                setSearch(e.target.value);
              }}
              placeholder="search here"
              type="search"
            />
            <button onClick={getuser}>reset</button>

            <button onClick={getuser} style={{ marginLeft: "50px" }}>
              All
            </button>
            <button onClick={getapproved}>Approved</button>
            <button onClick={getpending}>Pending</button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Lead Name</th>
              <th>Event Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {user.length != 0 ? (
              user.map((us) => {
                return (
                  <tr>
                    <td>{us.gname}</td>
                    <td>{us.name}</td>
                    <td>{us.TOP}</td>
                    <td>
                      <a href="#">{us.email}</a>
                    </td>
                    <td>{us.date}</td>
                    <td className="pd">{us.officer}</td>
                  </tr>
                );
              })
            ) : (
              <p>no data</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Artists;
