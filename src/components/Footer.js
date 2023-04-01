import logo from "../assets/logo_vert.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <section>
        <img src={logo} alt="Little Lemon Logo" />
      </section>
      <section>
        <h4>Doormat Navigation</h4>
        <nav>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservation</a>
          </li>
          <li>
            <a href="/online">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </nav>
      </section>
      <section>
        <h4>Contact</h4>
        <li>
          <a href="/address">Address</a>
        </li>
        <li>
          <a href="/number">Phone Number</a>
        </li>
        <li>
          <a href="/email">Email</a>
        </li>
      </section>
      <section>
        <h4>Social Media Links</h4>
        <li>
          <a href="/address">Address</a>
        </li>
        <li>
          <a href="/number">Phone Number</a>
        </li>
        <li>
          <a href="/email">Email</a>
        </li>
      </section>
    </footer>
  );
}

export default Footer;
