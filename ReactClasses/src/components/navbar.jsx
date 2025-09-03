import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="px-30 bg-white p-4 flex gap-10 items-center justify-between">
      <div className="h-10 w-10">
        <img className="h-10 w-10" src=" /react.svg" alt="" />
      </div>
      <div className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contect</NavLink>
      </div>

      <Link to="/login" className="bg-amber-400 px-10 py-2 rounded-2xl">
        Login
      </Link>
    </div>
  );
}
