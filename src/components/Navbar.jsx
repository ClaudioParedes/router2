import { NavLink } from "react-router-dom";


export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
  <>
    <div className="bg-dark">
                
          <NavLink end className={setActiveClass} to="/">
            Home
          </NavLink>
          {" - "}
          <NavLink className={setActiveClass} to="/pokemones">
            Pokemones
          </NavLink>
    
        </div>

        </>
  );
}
