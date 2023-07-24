import Nav from "./Nav";
import logo from "../assets/Logo.svg";

import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div className="content Header-content">
        <img src={logo} alt="Little Lemon Logo" />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
