import React from "react";
import "../../../Css/ArtistInfo.css";
const ArtistInfo = () => {
  return (
    <div>
      <header className="event-sec">
        <div className="e-title">
          Details
          <span id="golden"> Of </span>
          Leader
        </div>
      </header>
      <div className="a-info">
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Leader Name</div>
          </div>
          <div className="i-r">Priyansh Khunt</div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Group Name</div>
          </div>
          <div className="i-r">StackHackers</div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Contact Number</div>
          </div>
          <div className="i-r">+91 9852174630</div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Email Address</div>
          </div>
          <div className="i-r">stackHackers@gmail.com</div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">No. of Artist</div>
          </div>
          <div className="i-r">5</div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Performance Theme</div>
          </div>
          <div className="i-r">Cultural</div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Dance From</div>
          </div>
          <div className="i-r">Garba</div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Awards / Honors</div>
          </div>
          <div className="i-r">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            possimus aut facere dolor doloribus ex nisi quod ea at ut.
            Dignissimos incidunt magnam accusantium deserunt distinctio delectus
            nihil sint odit illum repudiandae, est odio nobis eaque,
            perspiciatis culpa. Voluptatum, atque. Itaque provident nulla cumque
            debitis accusamus fugit ut rerum fugiat.
          </div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Performed Before</div>
          </div>
          <div className="i-r">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            consequuntur minima nihil voluptatibus eveniet ad aliquam recusandae
            tempora mollitia corrupti at eligendi reprehenderit consequatur amet
            perspiciatis deleniti eos quisquam exercitationem esse rerum laborum
            assumenda temporibus sequi dolores!
          </div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Leader Picture</div>
          </div>
          <div className="i-r i-r-dp">
            <img
              src="https://avatars.githubusercontent.com/u/58349765?s=400&u=22e094b356d4541a0372f11782d1263e0cbdcb56&v=4"
              alt=""
            />
          </div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Leader's Aadhar</div>
          </div>
          <div className="i-r i-r-ad">
            <img
              src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/adhar-card.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="i-field">
          <div className="i-l">
            <div className="ol-l">Leader's Signature</div>
          </div>
          <div className="i-r i-r-s">
            <img
              src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/sign.png"
              alt=""
            />
          </div>
        </div>
        <center className="wpp">
          <div className="forbtn">
            <div className="btn submit">Approve</div>
          </div>
          <div className="forbtn">
            <div className="btn reset">Reject</div>
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
