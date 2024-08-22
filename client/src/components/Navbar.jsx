import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 rounded-lg items-center justify-center flex font-bold">
        <p className="blue-gradient_text">todor</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => (isActive ? "font-bold" : "text-black")}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "font-bold" : "text-black")}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
