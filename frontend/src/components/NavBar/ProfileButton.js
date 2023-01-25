import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import SignUpFormModal from '../SignUpFormModal';
import LoginForm from '../LoginFormModal';
import ListFormModal from "../Listings/indexListFormModal";


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
    <div className='profile-button-div'>
      <button id="profile-button" onClick={profileButton()}>

        <svg className='profile-menu' width={16} height={16} viewBox="0 0 32 32" fill={'#929292'} stroke={'#929292'} strokeWidth={3}>
        <g fill="none" fillRule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g>
        </svg>

        <svg className='profile-icon' width={30} height={30} viewBox="0 0 32 32" fill={'#717171'}>
          <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
        </svg>

      </button>
      {showMenu && (
        <div className="profile-dropdown">
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
              <div className="divider">

              </div>
        </div>
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
