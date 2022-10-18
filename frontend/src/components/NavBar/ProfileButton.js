import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import SignUpFormModal from '../SignUpFormModal';
import LoginForm from '../LoginFormModal';
import ListFormModal from "../ListForm/indexListFormModal";


function ProfileButton(props) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showListFormModal, setShowListFormModal] = useState(false);

  const currentUser = useSelector((state) => {
    return state.session.user;
  });

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (!showMenu) return;
  
    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);



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
      <button id="profile-button" onClick={profileButton()}className='profile-icon'>profile
        <i className="fa-solid fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
        {currentUser ? (
            <>
            <div className="logout-button">
            <button id="drop-logout" 
              onClick={()=>{
              logout()
              closeMenu()
            }}>Log out</button>
            </div>
            <div className="host-button">
             <button id="drop-host" 
              onClick={()=>{
              setShowListFormModal(true)
              closeMenu()
            }}>Host your home</button>
            </div>

            </>
            
          ) : (
            <>
              <div className="signup-button">
              <button id="drop-signup"
                 onClick={() => {
                  setShowSignUpModal(true)
                  closeMenu()
              }
              }>Sign Up</button>
              </div>
              <div className="login-button">
              <button id="drop-login" 
                onClick={() => {
                setShowLoginModal(true)
                closeMenu()
              }
              }>Login</button>
              </div>
            </>  
          )
        }
        </ul>
      )}
      {showSignUpModal && (<SignUpFormModal setShowSignUpModal={setShowSignUpModal}/>)}

      {showLoginModal && (<LoginForm setShowLoginModal = {setShowLoginModal}/>)}

      {showListFormModal && (<ListFormModal
      setShowListFormModal = {setShowListFormModal}/>
      )}
    </div>
  );
}

export default ProfileButton;
