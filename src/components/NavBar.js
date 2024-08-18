// src/components/NavBar.js
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Make sure to style it if necessary

const NavBar = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/actors">Actors</NavLink>
  </nav>
);

export default NavBar;

