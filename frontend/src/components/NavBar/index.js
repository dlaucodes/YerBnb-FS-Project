import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignUpFormModal from '../SignUpFormModal';
import LoginForm from '../LoginFormModal';
import ProfileButton from './ProfileButton';
import './NavBar.css';
import logo from '../../assets/yerbnbheader.png'

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
        <NavLink exact to="/" className="nav-title"><img id="home-icon" src={logo}/>
        </NavLink>
      </div>

      <div className="right">
        {sessionLinks}
      </div>
      
            
    </header>
  );
}

export default NavBar;
