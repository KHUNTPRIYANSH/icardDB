import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Css/ArtistSignIn.css";
import "../../Css/ArtUp.css";
import AddCardIcon from "@mui/icons-material/AddCard";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
const ArtUp = (props) => {
  const nav = useNavigate();
  const {backend}=props;
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [mobile,setMobile]=useState("");
  const [submit,setSubmit]=useState("Create Account");
  const handlesubmit = async ()=>{
    if(submit=="Creating..."){
      return;
    }
    setSubmit("Creating...");
    const res= await fetch(`${backend}/api/register`,{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify({
        name,
        email,
        password,
        mobileno:mobile,
      })
    })
    const data = await res.json();
    if(data.status=="ok"){
      alert("successefully registerd");
      nav("/signIn");
    }else{
      alert(data.status);
    }
    setSubmit("Create Account");
  }
  return (
    <>
      <section id="ArtSignIn">
        <div className="left">
          <img
            src="https://idcardgenrator.s3.ap-northeast-1.amazonaws.com/siteimage/auppp.png"
            alt=""
            id="Aup"
          />
        </div>
        <div className="right">
          <div className="data">
            <header>
              <AddCardIcon id="logo" className="gold" />
              My-ID
            </header>
            <h1>Get Started</h1>
            <h2>It's free to SignUp and only takes a minute.</h2>
            <form action="#">
              <h3>Firstname & Lastname</h3>
              <input type="text" placeholder="Enter your first and last name"  value={name} onChange={(e)=>{setName(e.target.value)}}/>
              <h3>Email</h3>
              <input type="text" placeholder="abcd123@xyz.com"  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <h3>Password</h3>
              <input type="password" placeholder="●●●●●●●●●●●"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              <h3>Mobile No</h3>
              <input type="text" placeholder="Enter Your number"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
              <button type="submit" className="btn" onClick={ (e)=>{e.preventDefault();
              handlesubmit();
              } }>
                {submit}
              </button>
            </form>
            <div className="b-box">
              <div className="btn">
                SignUp With <FacebookRoundedIcon />
              </div>
              <div className="btn">
                SignUp With <TwitterIcon />
              </div>
            </div>
            <p>
              <span className="gray">Already have an account?</span>
              <Link to="/signIn">Sign In</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtUp;
