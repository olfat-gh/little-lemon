import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="about">Menu</NavLink>
          </li>
          <li>
            <NavLink to="about">Resrvations</NavLink>
          </li>
          <li>
            <NavLink to="about">Order Online</NavLink>
          </li>
          <li>
            <NavLink to="about">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
