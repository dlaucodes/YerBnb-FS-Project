import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/modal";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupFormPage.css";


function SignUpForm({setShowSignUpModal}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ username, password, firstName, lastName })).then(() => {
        setShowSignUpModal(false);
      }).catch(
        async (res) => {
          let data;
          try {
            // .clone() essentially allows you to read the response body twice
            data = await res.clone().json();
          } catch {
            data = await res.text(); // Will hit this case if the server is down
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        }
      );
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };


  return (
    <div className="modal-content animate-bottom"> 

    <form className="signup" onSubmit={handleSubmit}>
      <div className="modal-heading">

      <div onClick={() => setShowSignUpModal(false)}  className="close-modal"><span >×</span>
      </div>
      <div id="signup-text">Sign Up</div>

       
    </div>

       <div className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </div>

      <div className="welcome-div">
        <h2 id="welcome-text">Welcome to Yerbnb</h2>
      </div>
 

       <div className="input-field">
            <input
              className="username-field"
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
        </div>
        <div className="input-field">
            <input
              className="password-field"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
        </div>
          <div className="input-field">
            <input
              className="confirm-password-field"
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
        </div>
          <div className="input-field">
            <input
              className="firstname-field"
              placeholder="First name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
        </div>
          <div className="input-field">
            <input
              className="lastname-field"
              placeholder="Last name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
        </div>
      <div className="signup-div">
      <button id="signup-button" type="submit">Sign Up</button>
      </div>
      <div className="or"> 
        <div className="ruler"></div>
        <div className="or-text">
        developer links
        </div>
        <div className="ruler"></div> 
      </div>
      <div className="developer-links">
      <div id="login-developer-button">Github</div>
      <div id="login-developer-button"> Linkedin</div>
      <div id="login-developer-button"> Wellfound</div>
      <div id="login-developer-button"> email</div>
      </div>
      </form>
    </div>
  );
}

export default SignUpForm;