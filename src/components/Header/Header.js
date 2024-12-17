import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Подключаем стили для header

function Header() {
  return (
    <nav className="nav">
        <a href="/main">ABOUT</a>
        <a href="/courier_profile">PROFILE</a>
        <a href="/delivery">DELIVERY</a>
        <a href="/for_couriers">FOR COURIERS</a>
        <a href="/login" className="sign-in-btn">Sign In</a>
      </nav>

  );
}

export default Header;