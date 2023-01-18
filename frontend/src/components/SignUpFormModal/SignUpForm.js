import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/modal";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import gitlogo from "../../assets/logos/github-mark.png";
import linkedinlogo from "../../assets/logos/linkedinlogo.png";
import wellfoundlogo from "../../assets/logos/wellfoundlogo.png";
import emaillogo from "../../assets/logos/email.png";
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
  
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  const buttonMailto = (mailto) =>{
    window.open(mailto)
  }

  

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

      <div className="github-developer-button" onClick={() => openInNewTab('https://github.com/dlaucodes')}>
        <img src={gitlogo} alt=""/>
        <div className="dev-text">Github</div> 
      </div>

      <div className="linkedin-developer-button" onClick={() => openInNewTab('https://linkedin.com/in/dlaucodes')}>
        <img src={linkedinlogo} alt=""/> 
        <div className="dev-text">Linkedin</div> 
      </div>
       <div className="wellfound-developer-button" onClick={() => openInNewTab('https://angel.co/u/chun-k-lau')}>
        <img src={wellfoundlogo} alt=""/> 
        <div className="dev-text">Wellfound</div> 
      </div>
       <div className="email-developer-button" onClick={()=> buttonMailto('mailto: dlaucodes@gmail.com')}>
        <img src={emaillogo} alt=""/> 
        <div className="dev-text">Email</div> 
      </div>
      </div>
      </form>
    </div>
  );
}

export default SignUpForm;