import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <Link to="/bookings">Bookings</Link>
        </li>
        <li>
          <a href="/online">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
