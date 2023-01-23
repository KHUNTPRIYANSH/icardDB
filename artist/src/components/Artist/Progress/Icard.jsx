import React, { useEffect } from "react";
import "../../../Css/Icard.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import Tilt from "react-parallax-tilt";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Icard = (props) => {
  const { backend, islogin, regId } = props;
  const [apr, setApr] = useState(false);
  const [carddata, setCarddata] = useState({
    _id: "-",
    userId: "-",
    gname: "-",
    name: [
      {
        name: "-",
        gender: "-",
        email: "-",
        phoneNo: "-",
      },
      {
        name: "-",
        gender: "-",
        email: "-",
        phoneNo: "-",
      },
    ],
    tnartist: 0,
    eventId: "-",
    eventName: "-",
    TOP: "-",
    FOICD: "-",
    DOA: "-",
    applyDay: "-",
    applyMonth: "-",
    applyYear: "-",
    fulltime: "-",
    gphoto: "#",
    img: "#",
  });
  const [edt, setedt] = useState({});
  const nav = useNavigate();
  const printDocument = async () => {
    htmlToImage
      .toPng(document.getElementById("myPage"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        const pdf = new jsPDF();
        pdf.addImage(dataUrl, "PNG", 0, 0);
        pdf.save("download.pdf");
      });
  };
  const getuserdt = async () => {
    const res = await fetch(`${backend}/api/getstatus/${regId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.pg == 3) {
      setApr(true);
      setCarddata(data.data);
      setedt(data.event);
    }
    switch (data.pg) {
      case 0:
        document.getElementById("r0").style.boxShadow =
          "0.5px 0.5px 5px 6px rgba(0, 128, 0, 0.4)";
        break;
      case 1:
        document.getElementById("p1").style.backgroundColor = "rgb(15,180, 18)";
        document.getElementById("r1").style.backgroundColor = "rgb(15,180, 18)";
        document.getElementById("r1").style.boxShadow =
          "0.5px 0.5px 5px 6px rgba(0, 128, 0, 0.4)";

        break;
      case 2:
        document.getElementById("p1").style.backgroundColor = "rgb(15,180, 18)";
        document.getElementById("r1").style.backgroundColor = "rgb(15,180, 18)";
        document.getElementById("p2").style.backgroundColor = "rgb(15,180, 18)";
        document.getElementById("r2").style.backgroundColor = "rgb(15,180, 18)";
        document.getElementById("r2").style.boxShadow =
          "0.5px 0.5px 5px 6px rgba(0, 128, 0, 0.4)";
        break;
      case 3:
        document.getElementById("p1").style.backgroundColor = "rgb(15,180, 18)";
        document.getElementById("r1").style.backgroundColor = "rgb(15,180, 18)";
        document.getElementById("p2").style.backgroundColor = "rgb(15,180, 18)";
        document.getElementById("r2").style.backgroundColor = "rgb(15,180, 18)";
        document.getElementById("p3").style.backgroundColor = "rgb(15,180, 18)";
        document.getElementById("r3").style.backgroundColor = "rgb(15,180, 18)";

        document.getElementById("r3").style.boxShadow =
          "0.5px 0.5px 5px 6px rgba(0, 128, 0, 0.4)";
        // document.getElementById("btn").style.backgroundColor = "#7211c7"
        // setbtn(false)
        break;
    }
  };
  const showId = () => {
    document.getElementById("idcard").style.display = "unset";
  };
  useEffect(() => {
    document.getElementById("idcard").style.display = "none";
    if (islogin) {
      getuserdt();
    } else {
      nav("/");
    }
  }, []);
  return (
    <div>
      <div>
        <div id="progress" className="progresscontener">
          <Tilt
            glareEnable={true}
            glareColor="#ebe7ee47"
            glarePosition="all"
            tiltMaxAngleX="13"
            tiltMaxAngleY="4"
            className="progressbar"
          >
            <div className="prbox"></div>
            <p className="gold">Id Status</p>
            <div id="0">
              <div
                id="r0"
                className="roundfill"
                style={{ backgroundColor: "rgb(15,190, 18)" }}
              ></div>
              <div className="approved">Registerd</div>
            </div>
            <div id="p1" className="progressline"></div>
            <div>
              <div id="r1" className="roundfill"></div>
              <div className="approved">Approved by Clerk</div>
            </div>
            <div id="p2" className="progressline"></div>
            <div>
              <div id="r2" className="roundfill"></div>
              <div className="approved">Approved by DYDO</div>
            </div>
            <div id="p3" className="progressline"></div>
            <div>
              <div id="r3" className="roundfill"></div>
              <div className="approved">Approved by commisioner</div>
            </div>
          </Tilt>
          <button
            id="btn"
            className="btn"
            onClick={showId}
            style={{ display: `${apr ? "unset" : "none"}` }}
          >
            Generate Id
          </button>
        </div>
      </div>
      <div className="ID" id="idcard">
        <div className="ID-card" id="myPage">
          <div className="id-top">
            <div className="logo">
              <img
                src="https://idcardgenrator.s3.ap-northeast-1.amazonaws.com/siteimage/gov-logo.png"
                alt=""
              />
            </div>
            <div className="id-title">
              <h1>Government of India</h1>
              <h2>Sports, Youth Cultural Activities Department</h2>
              <h3>Navratri Mahotsav (Rajkot) - 2022 ID-Card</h3>
            </div>
          </div>
          <div className="id-info">
            <div className="left">
              <img src={carddata.img} alt="" className="id-dp" />

              {/* <QRCode title="dp" value={newstrign} size="150" /> */}
            </div>
            <div className="right">
              <div className="id-field">
                <label htmlFor="name">Name : </label>
                <div className="val">{carddata.name[0].name}</div>
              </div>
              <div className="id-field">
                <label htmlFor="id">ID : </label>
                <div className="val">{carddata._id}</div>
              </div>
              <div className="id-field">
                <label htmlFor="gname">Group Name : </label>
                <div className="val">{carddata.gname}</div>
              </div>
              <div className="id-field">
                <label htmlFor="dance-form">Event Name :</label>
                <div className="val">{carddata.eventName}</div>
              </div>

              <div className="id-field">
                <label htmlFor="email">Email : </label>
                <div className="val">{carddata.name[0].email}</div>
              </div>
              <div className="id-field">
                <label htmlFor="date">Date Of issue :</label>
                <div className="val">10/5/22</div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={printDocument} className="btn">
          Print
        </button>
      </div>
    </div>
  );
};

export default Icard;
