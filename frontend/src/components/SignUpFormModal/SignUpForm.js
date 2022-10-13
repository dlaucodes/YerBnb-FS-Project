import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/modal";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupFormPage.css";


function SignUpForm() {
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
      return dispatch(sessionActions.signup({ username, password, firstName, lastName })).catch(
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
    <div class="modal-content animate-bottom"> 
    <form id="signup" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>

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
              className="last-name-field"
              placeholder="Last name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
        </div>

      
      <button type="submit">Sign Up</button>
  
    <div class="modal-content animate-bottom"> 
    
          </div>
    </form>
    </div>
  );
}

export default SignUpForm;