import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import SignUpFormModal from '../SignUpFormModal';
import LoginForm from '../LoginFormModal';


function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

    const closeMenu = () => {
      setShowMenu(false);
    };

    // document.addEventListener("click", closeMenu);
    
    // useEffect(() => {
    //   if (showMenu) return;
      
    //   return () => document.removeEventListener("click", closeMenu);
    // }, [showMenu]);
    

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logoutUser());
  };
  console.log()


return (
    <div className='profile-button'>
      <button onClick={openMenu} className='profile-icon'>profile
        <i className="fa-solid fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          {/* <li><button onClick={setShowModal(true)}>test</button></li> */}
          
        <button onClick={() => {
          setShowModal(true)
          closeMenu()
        }
        }>Sign Up</button>
            <button onClick={logout}  className="button">Log Out</button>
        
        </ul>
      )}
      {showModal && (<SignUpFormModal setShowModal={setShowModal}/>)}
      <LoginForm/>
    </div>
  );
}

export default ProfileButton;
