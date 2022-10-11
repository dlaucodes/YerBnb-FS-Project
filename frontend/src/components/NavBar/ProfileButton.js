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

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logoutUser());
  };
  console.log()


return (
    <div className='profile-button'>
      <button onClick={openMenu} className='profile-icon'>
        <i className="fa-solid fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          {/* <li><button onClick={setShowModal(true)}>test</button></li> */}
          <li><SignUpFormModal/></li>
          <li><LoginForm/></li>
          <li>
            <button onClick={logout}  className="button">Log Out</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
