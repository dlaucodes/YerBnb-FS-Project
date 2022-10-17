import "./LoginFormPage.css";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import * as sessionActions from "../../store/session";



const LoginForm = ({setShowLoginModal}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.loginUser({username, password})).then(()=>setShowLoginModal(false)).catch(
      async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) {
          setErrors(data.errors);
        } else if (data) {
          setErrors([data]);
        } else {
          setErrors([res.statusText]);
        }
      }
    );
  };

  const handleDemo = ()=>{
    // e.preventDefault();
    setUsername("Demo")
    setPassword("password")
    dispatch(sessionActions.loginUser({username: "Demo", password: "password"}))
  }
  
  return (
    <div class="modal-content animate-bottom"> 
    <form id="login" onSubmit={handleSubmit}>
      {errors.map((error) => error)}
          <hr id="divider"/>
            <div 
        onClick={() => setShowLoginModal(false)} className="close-modal"><span >X</span></div>
           <div className="welcome-div">
        <h2 id="welcome-text">Welcome to yerbnb</h2>
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
              className="password-field1"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
        </div>
      <br />
        <div>
          <button type="submit" id="login-button">Login</button>
        </div>
        <div>
          <button type="submit" id="demo-button" onClick={handleDemo}>Demo User</button>
        </div>
    </form>
    </div>
  );
};

export default LoginForm;
