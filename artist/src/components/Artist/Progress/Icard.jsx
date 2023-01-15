import React from "react";
import "../../../Css/Icard.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import Tilt from "react-parallax-tilt";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

const Icard = () => {
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
  return (
    <div className="ID">
      <div className="ID-card" id="myPage">
        <div className="id-top">
          <div className="logo">
            <img
              src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/gov-logo.png"
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
            <img
              src={`https://avatars.githubusercontent.com/u/58349765?s=400&u=22e094b356d4541a0372f11782d1263e0cbdcb56&v=4`}
              alt=""
              className="id-dp"
            />

            {/* <QRCode title="dp" value={newstrign} size="150" /> */}
          </div>
          <div className="right">
            <div className="id-field">
              <label htmlFor="name">Name : </label>
              <div className="val">Priyansh Khunt</div>
            </div>
            <div className="id-field">
              <label htmlFor="id">ID : </label>
              <div className="val">700456165816</div>
            </div>
            <div className="id-field">
              <label htmlFor="gname">Group Name : </label>
              <div className="val">stackHackers</div>
            </div>
            <div className="id-field">
              <label htmlFor="dance-form">Dance Form :</label>
              <div className="val">Garba</div>
            </div>

            <div className="id-field">
              <label htmlFor="theme">Theme : </label>
              <div className="val">Cultural</div>
            </div>
            <div className="id-field">
              <label htmlFor="email">Email : </label>
              <div className="val">stackHackers@gmail.com</div>
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
  );
};

export default Icard;
