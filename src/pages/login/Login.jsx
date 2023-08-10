import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  // import useNavigate
  const navigate = useNavigate();

  // useState for name
  const [name, setName] = useState("");

  // useState for password
  const [password, setPassword] = useState("");

  // set ressponse
  const [response, setRes] = useState("");

  // set error
  const [error, setError] = useState("");

  // onclick when we click submit button
  const handleClick = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name,
        // kminchelle
        password: password,
        // 0lelplR
      }),
    }).then((res) => setRes(res.status));
  };
  useEffect(() => {
    if (response === 200) {
      navigate("/home");
    } else if (response === 400) {
      setError("Invalid Credentials");
    }
  }, [response]);
  return (
    <>
      {/* main container */}
      <div className="mainContainer">
        <div className="formContainer">
          {/* header */}
          <h3 className="headingMain">Log In to your MyGov account</h3>
          <form action="" className="formMain">
            <div className="inputNameMain">
              {/* input for name */}
              <input
                type="text"
                placeholder="Please Enter Your Name"
                className="inputForName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="inputPasswordMain">
              {/* input for password */}
              <input
                type="text"
                placeholder="Please Enter Password"
                className="inputForPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <div className="buttonContainer">
            {/* submit button */}
            <button className="buttonMain" type="submit" onClick={handleClick}>
              Submit
            </button>
          </div>
          <div className="error">{error}</div>
        </div>
      </div>
    </>
  );
};

export default Login;
