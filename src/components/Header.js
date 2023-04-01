import Nav from "./Nav";
import logo from "../assets/Logo.svg";

import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <img src={logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
}

export default Header;
