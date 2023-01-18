import React, { useEffect, useState } from "react";
import "../../../Css/Artist.css";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Artists = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [sdate, setSdate] = useState("");
  const admin = "clerk";
  const pagesize = 3;
  const [start, setStart] = useState(0);
  const [totalpage, setTotalpage] = useState(0);
  const [arr, setArr] = useState([]);
  const [issearch, setIssearch] = useState(false);
  const [tsort, setTsort] = useState("get");
  const [isdata, setIsdata] = useState(true);
  const [finaluser, setfinaluser] = useState([]);

  let ar = [];
  const countdoc = async () => {
    const res = await fetch(`http://localhost:8080/count/${admin}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const count = await res.json();
    const tp = Math.ceil(count.count / pagesize);
    ar = [];
    for (let i = 0; i < tp; i++) {
      ar.push(i);
    }
    setArr(ar);
    setTotalpage(tp);
  };
  const getuser = async (start, tsort) => {
    setIssearch(false);
    setSearch("");
    setSdate("");
    const data = await fetch(
      `http://localhost:8080/${tsort}/${admin}/${start}/${pagesize}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await data.json();
    if (res.admindata.length == 0) {
      setIsdata(false);
      setUser([]);
    } else {
      setIsdata(true);
      setUser(res.admindata);
      setfinaluser(res.admindata);
    }
    // console.log(res.admindata);
  };
  const getsearch = async (src) => {
    // console.log("search");
    setIssearch(true);
    const data = await fetch(`http://localhost:8080/get/${admin}/${src}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    if (res.admindata.length == 0) {
      setIsdata(false);
      setUser([]);
    } else {
      setIsdata(true);
      setUser(res.admindata);
    }
    // setUser(user.filter((obj)=>{

    //     return obj.name=={src};

    // }))
  };
  const searchByDate = async (dt) => {
    setIssearch(true);
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
    if (res.admindata.length == 0) {
      setIsdata(false);
      setUser([]);
    } else {
      setIsdata(true);
      setUser(res.admindata);
    }
  };

  const getapproved = async () => {
    let newuser = [];
    let srch = finaluser;
    for (let i = 0; i < srch.length; i++) {
      if (srch[i].PEON == "Approved") {
        newuser.push(srch[i]);
      }
    }
    setUser(newuser);
  };
  const getpending = async () => {
    let newuser = [];
    let srch = finaluser;
    for (let i = 0; i < srch.length; i++) {
      if (srch[i].PEON == "Pending") {
        newuser.push(srch[i]);
      }
    }
    setUser(newuser);
  };

  const sortbyName = async () => {
    setTsort("name");
    getuser(0, "name");
  };
  const sortbyTime = async () => {
    setTsort("time");
    getuser(0, "time");
  };
  const sortbyTimed = async () => {
    setTsort("timed");
    getuser(0, "timed");
  };
  let pgno = 0;
  useEffect(() => {
    countdoc();
    getuser(0, "get");
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
              className="ftr-src"
              type="text"
              value={sdate}
              onChange={(e) => {
                e.preventDefault();
                searchByDate(e.target.value);
                setSdate(e.target.value);
              }}
            />
            <input
              className="ftr-src"
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
                      <p href="#">{us.email}</p>
                    </td>
                    <td>{us.date}</td>
                    <td className="pd">{us.officer}</td>
                  </tr>
                );
              })
            ) : (
              <p style={{ display: `${isdata ? "unset" : "none"}` }}>Loading</p>
            )}
          </tbody>
          <p style={{ display: `${!isdata ? "unset" : "none"}` }}>No data</p>
        </table>
        <div
          style={{
            display: `${issearch ? "none" : "flex"}`,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "white" }}>Pages: </h2>
          {arr.map((e) => {
            return (
              <button
                onClick={(f) => {
                  setStart(e * pagesize);
                  console.log(e);
                  getuser(e * pagesize, "get");
                }}
                style={{
                  margin: "5px",
                  padding: "5px",
                  background: `${
                    e * pagesize == start ? "white" : "rgb(255,255,255,.3)"
                  }`,
                }}
                key={e}
              >
                {e + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Artists;
