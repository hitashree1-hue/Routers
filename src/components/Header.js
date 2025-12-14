import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2 className="logo">MySite</h2>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/user">User Info</NavLink>
      </nav>
    </header>
  );
}

export default Header;
