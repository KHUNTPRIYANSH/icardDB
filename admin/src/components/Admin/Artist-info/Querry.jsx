import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Fixed/Loading";

function Querry(props) {
  const { backend, islogin, setUserId } = props;
  const [qrs, setQrs] = useState([]);
  const nav = useNavigate();
  const getquerry = async () => {
    const res = await fetch(`${backend}/chat/admin`, { method: "GET" });
    const data = await res.json();
    setQrs(data.data);
  };
  useEffect(() => {
    if (islogin) {
      getquerry();
    } else {
      nav("/signIn");
    }
  }, []);
  return (
    <div>
      <h1 style={{ color: "var(--color2d)" }}>Artists Queries</h1>
      <div>
        {qrs.length == 0 ? (
          <Loading />
        ) : (
          qrs.map((q) => {
            return (
              <div
                style={{
                  cursor: "pointer",
                  margin: " 10px 0px",
                  padding: "20px",
                  background: " linear-gradient(to right, #606c88, #3f4c6b)",
                }}
                onClick={(d) => {
                  setUserId({
                    id: q._id,
                    name: q.name,
                  });
                  setTimeout(() => {
                    nav("/chat");
                  }, 500);
                }}
              >
                <p style={{ color: "white" }}>Artist Name : {q.name}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Querry;
