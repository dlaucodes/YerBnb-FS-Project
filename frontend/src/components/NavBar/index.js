import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignUpFormModal from '../SignUpFormModal';
import LoginForm from '../LoginFormModal';
import ProfileButton from './ProfileButton';
import SearchIcon from "@material-ui/icons/Search";
import './NavBar.css';

function NavBar() {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        {/* <SignUpFormModal/>
        <LoginForm/> */}
        
        <ProfileButton/>
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <header className="site-header">
      <div className="home_icon">
        <NavLink exact to="/" className="nav-title"><img id="home-icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt=""/>
        </NavLink>
      </div>

      <div className="right">
        {sessionLinks}
        
      </div>
      
            
      </header>
  );
}

export default NavBar;
