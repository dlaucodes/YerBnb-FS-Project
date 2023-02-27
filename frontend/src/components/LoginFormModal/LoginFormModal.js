import "./LoginFormPage.css";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import * as sessionActions from "../../store/session";
import gitlogo from "../../assets/logos/github-mark.png";
import fblogo from "../../assets/logos/fblogo.svg";
import applelogo from "../../assets/logos/applelogo.svg";
import gmaillogo from "../../assets/logos/gmailicon.svg";
import SignUpFormModal from "../SignUpFormModal";
import SignUpForm from "../SignUpFormModal/SignUpForm";



const LoginForm = ({setShowLoginModal}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [passwordError, setPasswordError] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  
  

  if (sessionUser) return(
     <Redirect to="/" /> &&
     setShowLoginModal(false)
  )

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

  const handleDemo = (e)=>{
    e.preventDefault();
    setUsername("Demo")
    setPassword("password")
    dispatch(sessionActions.loginUser({username: "Demo", password: "password"}))
  }

  const fbDemo = (e)=>{
    e.preventDefault();
    setUsername("FacebookDemo")
    setPassword("password")
    dispatch(sessionActions.loginUser({username: "FacebookDemo", password: "password"}))
  }

  const googleDemo = (e)=>{
    e.preventDefault();
    setUsername("GoogleDemo")
    setPassword("password")
    dispatch(sessionActions.loginUser({username: "GoogleDemo", password: "password"}))
  }

  const appleDemo = (e)=>{
    e.preventDefault();
    setUsername("AppleDemo")
    setPassword("password")
    dispatch(sessionActions.loginUser({username: "AppleDemo", password: "password"}))
  }

  const gitDemo = (e)=>{
    e.preventDefault();
    setUsername("GitDemo")
    setPassword("password")
    dispatch(sessionActions.loginUser({username: "GitDemo", password: "password"}))
  }
 

  const handlePasswordError = (e) => {
    if(password.length < 5) {
      setPasswordError(true)
    } else {
      setPasswordError(false)
    }
    setPassword(e.target.value)
  }

  const toggleModal = (e) =>{
    e.preventDefault()
    setShowSignUpModal(true)   
  }
  
  if(!showSignUpModal){
  return (
    <div className="modal-content animate-bottom"> 


    <form className="login" onSubmit={handleSubmit}>
      <div className="login-modal-heading">

      <div onClick={() => setShowLoginModal(false)} className="close-modal"><span >╳</span>
      </div>

      <div id="login-text">Login</div>

      </div>
     

      <div className="errors">
        {errors.map((error, i) => error)}
      </div>

    <div className="welcome-text">
        Welcome to Yerbnb
    </div>
    
      <div className="input-field">
            <input
              className="username-field1"
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
              onChange={handlePasswordError}
              required
            />
        </div>
        <div className="password-error">{passwordError ? "password too short" : ""}</div>

        <div>
          <button type="submit" id="login-button">Login</button>
        </div>
       
        <div className="demouser">
          <button type="submit" id="demo-button" onClick={handleDemo}>Demo User</button>
        </div>
         <div className="no-login">
           No login?
          <span onClick={toggleModal}> Sign Up</span>        
        </div>
        <div className="or"> 
        <div className="ruler"></div>
        <div className="or-text">
        or Sign in with
        </div>
        <div className="login-ruler"></div> 
      </div>
      <div className="developer-links">
       
      <button className="linkedin-developer-button" type="submit" onClick={fbDemo}>
        <img src={fblogo} alt=""/> 
        <div className="dev-text">Facebook</div> 
      </button>
    

      <button className="linkedin-developer-button" type="submit" onClick={googleDemo}>
        <img src={gmaillogo} alt=""/> 
        <div className="dev-text">Google</div> 
      </button>

       <button className="wellfound-developer-button" type="submit" onClick={appleDemo}>
        <img src={applelogo} alt=""/> 
        <div className="dev-text">Apple</div> 
      </button>

      <button className="wellfound-developer-button" type="submit" onClick={gitDemo}>
        <img src={gitlogo} alt=""/> 
        <div className="dev-text">Github</div> 
      </button>
      
      </div>
    </form>
    </div>
  );
  }else {
    return(
    
    <SignUpForm setShowLoginModal={setShowLoginModal} setShowSignUpModal={setShowSignUpModal}/>
    
    )
  }
};

export default LoginForm;
