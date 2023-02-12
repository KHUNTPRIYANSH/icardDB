import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Css/ArtistInfo.css";
import emailjs from "@emailjs/browser";

const ArtistInfo = (props) => {
  const { admin, id, backend, islogin } = props;
  console.log(admin + " hi");
  const [showpart, setShowpart] = useState(false);
  const [sp, setsp] = useState("Show all participants");
  const [adminapr, setAdminapr] = useState(false);
  const [level, setLevel] = useState("0");
  const nav = useNavigate();
  const [artist, setArtist] = useState({
    gname: "--",
    name: [
      {
        name: "--",
        gender: "--",
        email: "--",
        phoneNo: "--",
      },
    ],
    tnartist: 0,
    eventId: "--",
    eventName: "--",
    TOP: "--",
    FOICD: "--",
    DOA: "--",
    applyDay: "--",
    applyMonth: "--",
    applyYear: "--",
    fulltime: "--",
    gphoto: "#",
    img: "#",
    adhar: "#",
    sign: "#",
    govpho: "#",
    PEON: "--",
    officer: "--",
    commisioner: "--",
    isCardAlloted: false,
  });
  const [lead, setLead] = useState({
    name: "--",
    gender: "--",
    email: "--",
    phoneNo: "--",
  });

  const getartist = async () => {
    const res = await fetch(`${backend}/api/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setArtist(data);
    setLead(data.name[0]);
    if (admin == "clerk" && data.PEON == "Approved") {
      setAdminapr(true);
    } else if (admin == "dydo" && data.officer == "Approved") {
      setAdminapr(true);
    } else if (admin == "commisioner" && data.commisioner == "Approved") {
      setAdminapr(true);
    }
  };
  const showpt = () => {
    if (showpart) {
      setShowpart(false);
      setsp("Show all participants");
    } else {
      setShowpart(true);
      setsp("Hide participants");
    }
  };
  const reject = async () => {
    if (
      window.confirm(
        "Are you want to REJECT? If you reject than this data will be delete..."
      )
    ) {
      const res = await fetch(`${backend}/api/getuser/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      alert(data.status);
    }
  };
  const approve = async () => {
    if (window.confirm("approve?")) {
      const res = await fetch(`${backend}/api/approve/${admin}/${id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      if (data.status != "ok") {
        alert(data.status);
      } else {
      }
    }
  };
  useEffect(() => {
    if (!islogin) {
      nav("/signIn");
    } else {
      setTimeout(() => {
        console.log(id);
        getartist();
      }, 1000);
    }
  }, []);

  const sendmailclrk = async (k) => {
    const res = await fetch(`${backend}/api/updatelevel/${k}/1`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.status != "ok") {
      alert(data.status);
    } else {
      getlevel();
    }
  };
  const sendmailcommisioner = async (k) => {
    const res = await fetch(`${backend}/api/updatelevel/${k}/2`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.status != "ok") {
      alert(data.status);
    } else {
      getlevel();
    }
  };
  const getlevel = async () => {
    const data = await fetch(`${backend}/api/level/${id}`, { method: "GET" });
    const res = await data.json();

    console.log(res);

    if ((res.status = "ok")) {
      if (res.level == 1) {
        setLevel("1");
      }

      if (res.level == 2) {
        setLevel("2");
      }
    } else {
    }
  };
  const form = useRef();
  const sendmail = async () => {
    await emailjs
      .sendForm(
        "service_z80kdsc",
        "template_1g6p4vm",
        form.current,
        "tAnIMRTGjOth0eHFS"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mail is send");
          sendmailclrk(id);
          getlevel();
          return true;
        },
        (error) => {
          console.log(error.text);
          return false;
        }
      );
  };
  useEffect(() => {
    getlevel();
  }, []);

  return (
    <div>
      <form style={{ display: "none" }} ref={form}>
        <label>Name</label>
        <input
          type="text"
          value={"virengirigoswami3@gmail.com"}
          onChange={() => {}}
          name="user_name"
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          value={"khuntpriyansh1@gmail.com"}
          onChange={() => {}}
          name="user_email"
        />
        <br />
        <label>Message</label>
        <textarea
          value={
            "your from is seen and you have to come after 3 days.  sedule_ofline_meet: https://calendly.com/lodhiyaamin88/verification-process?month=2023-02"
          }
          onChange={() => {}}
          name="message"
        />
        <br />
        <input type="submit" value="Send" />
              
      </form>
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
            <div className="ol-l">Event Name</div>
          </div>
          <div className="i-r">{artist.eventName}</div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Leader Name</div>
          </div>
          <div className="i-r">{lead.name}</div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Group Name</div>
          </div>
          <div className="i-r">{artist.gname}</div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Contact Number</div>
          </div>
          <div className="i-r">{lead.phoneNo}</div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Email Address</div>
          </div>
          <div className="i-r">{lead.email}</div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">No. of Artist</div>
          </div>
          <div className="i-r m-info">
            <div>
              <p>{artist.tnartist}</p>
              <button onClick={showpt} className="sm">
                {sp}
              </button>
            </div>
            <div style={{ display: `${showpart ? "unset" : "none"}` }}>
              {artist.name.map((ob) => {
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
        {/* <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Performance Theme</div>
          </div>
          <div className="i-r">Cultural</div>
        </div> */}

        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Awards / Honors</div>
          </div>
          <div className="i-r">{artist.DOA}</div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Performed Before</div>
          </div>
          <div className="i-r">{artist.FOICD}</div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Group Picture</div>
          </div>
          <div className="i-r i-r-dp">
            <img src={artist.gphoto} alt="" />
          </div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Leader Picture</div>
          </div>
          <div className="i-r i-r-dp">
            <img src={artist.img} alt="" />
          </div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Leader's Aadhar</div>
          </div>
          <div className="i-r i-r-ad">
            <img src={artist.adhar} alt="" />
          </div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Leader's Signature</div>
          </div>
          <div className="i-r i-r-s">
            <img src={artist.sign} alt="" />
          </div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Goverment Cirtificate</div>
          </div>
          <div className="i-r i-r-s">
            <img src={artist.govpho} alt="" />
          </div>
        </div>
        <center className="wpp">
          <div style={{ display: `${admin == "clerk" ? "unset" : "none"}` }}>
            {level == "1" ? (
              <div className="forbtn">
                <div
                  className="btn submit"
                  onClick={approve}
                  style={{ display: `${!adminapr ? "unset" : "none"}` }}
                >
                  Approve
                </div>
              </div>
            ) : (
              // <a
              //   href={`mailto:${artist.name[0].email},vaghelaajit464@gmail.com?subject='Regarding The validation !'&body={${artist.gname}to come after 3 days}`}
              // >
              //   <button onClick={() => sendmailclrk(id)}>mail me</button>
              // </a>
              <button className="btn b5b" onClick={sendmail}>
                Send mail
              </button>
            )}
          </div>
          <div style={{ display: `${admin == "dydo" ? "unset" : "none"}` }}>
            {artist.vlink ? (
              <div>
                <a href={`${artist.vlink}`} target="_blank">
                  <button className="btn b5b">video</button>
                </a>

                <div className="forbtn">
                  <div
                    className="btn submit"
                    onClick={approve}
                    style={{ display: `${!adminapr ? "unset" : "none"}` }}
                  >
                    Approve
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="forbtn">
                  <div
                    className="btn submit"
                    onClick={approve}
                    style={{ display: `${!adminapr ? "unset" : "none"}` }}
                  >
                    Approve
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            style={{ display: `${admin == "commisioner" ? "unset" : "none"}` }}
          >
            {level == "2" ? (
              <div className="forbtn">
                <div
                  className="btn submit"
                  onClick={approve}
                  style={{ display: `${!adminapr ? "unset" : "none"}` }}
                >
                  Approve
                </div>
              </div>
            ) : (
              <a
                href={`mailto:${artist.name[0].email},vaghelaajit464@gmail.com?subject='Regarding The validation !'&body={${artist.gname}to come after 3 days}`}
              >
                <button onClick={() => sendmailcommisioner(id)}>mail me</button>
              </a>
            )}
          </div>

          <div className="forbtn">
            <div className="btn reset" onClick={reject}>
              Reject
            </div>
          </div>
        </center>
        {/* <div className="i-field">
          <div className="i-l"></div>
          <div className="i-r"></div>
        </div> */}
      </div>
    </div>
  );
};

export default ArtistInfo;
