import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./NavBar.css";

function NavBar() {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
        <header className="site-header">
            <ul>
                <li className="nav-li">
                    <NavLink exact to="/" className="nav-title">
                        Home
                    </NavLink>
                    <div className="session-links">
                        {sessionLinks}
        
                    </div>
                </li>
      
            </ul>
      </header>
  );
}

export default NavBar;
