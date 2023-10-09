import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'

function ProfileButton({ user }) {
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button id='user-profile-button' onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>
              <button onClick={handleLogout}>Log Out</button>
            </div>
          </>
        ) : (
          <>
          <button onClick={() => {
            history.push('/login')
          }}>Log In</button>
          <button onClick={() => {
            history.push('/signup')
          }}>Sign Up</button>
          </>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
