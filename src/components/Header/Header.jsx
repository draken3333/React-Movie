import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import userIcon from "../../assets/Images/user-icon.png";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="headerLogo">
        <div className="headerLogo-text">Movie React-App</div>
      </Link>
      <div className="user-images">
        <img src={userIcon} alt="userImages" />
      </div>
    </div>
  );
}

export default Header;
