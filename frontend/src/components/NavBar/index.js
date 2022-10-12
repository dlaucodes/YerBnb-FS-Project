import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignUpFormModal from '../SignUpFormModal';
import LoginForm from '../LoginFormModal';
import ProfileButton from './ProfileButton';
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
                <div className="left">
                    <NavLink exact to="/" className="nav-title">
                        Home
                    </NavLink>
                <div>
            
                </div>
                </div>
                <div className="right">
                        {sessionLinks}
                </div>
      
            
      </header>
  );
}

export default NavBar;
