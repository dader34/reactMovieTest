import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
    <NavLink to="/reactMovieTest">Home</NavLink>
    <NavLink to="/reactMovieTest/directors">Directors</NavLink>
    <NavLink to="/reactMovieTest/actors">Actors</NavLink>
    </nav>
    );
};

export default NavBar;
