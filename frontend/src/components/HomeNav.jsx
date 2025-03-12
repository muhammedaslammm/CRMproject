import { NavLink } from "react-router-dom";
const HomeNav = () => {
  return (
    <nav className="flex gap-[3.5rem] text-[1.9rem] capitalize">
      <NavLink
        to="/api/home/customers"
        className={({ isActive }) =>
          isActive ? "text-black" : "text-gray-600"
        }
      >
        customers
      </NavLink>
      <NavLink
        to="/api/home/deals"
        className={({ isActive }) =>
          isActive ? "text-black" : "text-gray-600"
        }
      >
        deals
      </NavLink>
      <NavLink
        to="/api/home/notes"
        className={({ isActive }) =>
          isActive ? "text-black" : "text-gray-600"
        }
      >
        notes
      </NavLink>
    </nav>
  );
};

export default HomeNav;
