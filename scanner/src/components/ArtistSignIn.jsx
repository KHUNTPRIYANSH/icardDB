import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ArtistSignIn.css";

const ArtistSignIn = (props) => {
  const {backend,setIslogin,setAdmin}=props;
  const [email,setEmail]=useState("");
  const [password,setpassword]=useState("");
  const [submit,setSubmit]=useState("Sign In");
  const [signIn,setSignIn]=useState(false);
  const nav = useNavigate();
  const handlesubmit = async()=>{
    if(email=="" || password==""){
      alert("Enter valid id password");
      return;
    }
    setSubmit("Just A Sec...");
    setSignIn(true);
    const res  = await fetch(`${backend}/mstaf/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })

    })
    const data = await res.json();
    if(data.status=="ok"){
      setIslogin(true);
      setAdmin(data.role);
      window.localStorage.setItem("role0001",data.role);
      setTimeout(() => {
        nav("/");
      }, 2000);

    }else{
      alert(data.status);
      setSubmit("Sign In");
      setSignIn(false);
    }
    
  }
  useEffect(()=>{
    const role = window.localStorage.getItem("role0001");
    if(role){
      setIslogin(true);
      setAdmin(role);
      nav("/");
    }
  },[])
  return (
    <>
      <section id="ArtSignIn">
        <div className="left">
          <img
            src="https://idcardgenrator.s3.ap-northeast-1.amazonaws.com/siteimage/art-log.png"
            alt=""
          />
        </div>
        <div className="right">
          <div className="data">
            <header>
              {/* <AddCardIcon id="logo" className="gold" /> */}
              My-ID
            </header>
            <h1>Welcome back!</h1>
            <h2>Please sign in to continue.</h2>
            <form action="#">
              <h3>Email</h3>
              <input type="text" placeholder="abcd123@xyz.com" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
              <h3>Password</h3>
              <input type="password" placeholder="●●●●●●●●●●●" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
              <button type="submit" className="btn" onClick={handlesubmit} disabled={signIn}>
                {submit}
              </button>
            </form>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtistSignIn;
