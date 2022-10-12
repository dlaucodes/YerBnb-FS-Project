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
    <form id="login" onSubmit={handleSubmit}>
      {errors.map((error) => error)}
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
      <button type="submit" onClick={handleDemo}>Demo User</button>
    </form>
    
  );
};

export default LoginForm;
