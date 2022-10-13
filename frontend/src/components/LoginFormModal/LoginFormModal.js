import "./LoginFormPage.css";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import * as sessionActions from "../../store/session";



const LoginForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.loginUser({username, password})).catch(
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

  const handleDemo = (e)=>{
    e.preventDefault();
    setUsername("Demo")
    setPassword("password")
    dispatch(sessionActions.loginUser({username: "Demo", password: "password"}))
  }
  
  return (
    <div class="modal-content animate-bottom"> 
    <form id="login" onSubmit={handleSubmit}>
      {errors.map((error) => error)}
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
      <button type="submit" >Login</button>
      <button type="submit" onClick={handleDemo}>Demo User</button>
    </form>
    </div>
  );
};

export default LoginForm;
