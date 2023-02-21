import React from "react";
import Wrapper from "./NavbarStyle";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import { useAuthGlobalContext } from "../../context/authContext/authContext";
import UserImage from "../UserImage/UserImage";
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { logoutUser, user, toggleSidebar } = useAuthGlobalContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div>
          <div className="logo">
            <Logo />
          </div>
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          {user?.name}
          <div
            role="button"
            className="logoutBtn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <UserImage />
            <FaCaretDown />
          </div>
          {showLogout && (
            <div className="dropdown show-dropdown">
              <button
                type="button"
                className="dropdown-btn"
                onClick={logoutUser}
              >
                logout
              </button>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
