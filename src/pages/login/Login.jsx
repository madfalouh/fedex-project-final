import React, { useState } from "react";
import fedEX from "./../../assets/FedEx-Logo.png";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Navigate based on username
    if (username === 'manager') {
      navigate('/');
    } else if (username === 'courier') {
      navigate('/courier');
    } else if (username === 'vice') {
      navigate('/vice');
    }
    // Add more conditions as needed
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-body-container">
          <div className="login-second-section">
            <img src={fedEX} />
            <div className="input-container">
              {" "}
              <input placeholder="Username"    style={{color : "black"}}  onChange={handleUsernameChange}  />{" "}
            </div>
            <div className="input-container">
              {" "}
              <input
                className="input-second"
                placeholder="Password"
                type="password"
              />{" "}
            </div>

            <div className="input-container-checkbox">
              {" "}
              <input type="checkbox" />
              <label> Remeber me</label>
            </div>
            <div className="button-container">
              <button onClick={handleSubmit} >Login </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
