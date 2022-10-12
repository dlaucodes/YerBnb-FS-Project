import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import SignUpFormModal from '../SignUpFormModal';
import LoginForm from '../LoginFormModal';


function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

    const closeMenu = () => {
      setShowMenu(false);
    };

  const logout = () => {
    // e.preventDefault();
    dispatch(sessionActions.logoutUser());
  };
  console.log()

  const profileButton = ()=>{
    if(showMenu){return closeMenu}
    else{return openMenu}
  }


return (
    <div className='profile-button'>
      <button onClick={profileButton()}className='profile-icon'>profile
        <i className="fa-solid fa-user-circle" />
        
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          
        <button onClick={() => {
          setShowSignUpModal(true)
          closeMenu()
        }
        }>Sign Up</button>

         <button onClick={() => {
           setShowLoginModal(true)
           closeMenu()
         }
         }>Login</button>

        <button onClick={()=>{
          logout()
          closeMenu()
        }} 
        className="button">Log Out</button>
        
        </ul>
      )}
      {showSignUpModal && (<SignUpFormModal setShowSignUpModal={setShowSignUpModal}/>)}
      {showLoginModal && (<LoginForm setShowLoginModal = {setShowLoginModal}/>)}
    </div>
  );
}

export default ProfileButton;
