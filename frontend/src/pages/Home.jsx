import { Outlet, NavLink, useLocation } from "react-router-dom";
import HomeButton from "../components/HomeButton";
const Home = () => {
  const location = useLocation();
  const operation = location.pathname.split("/")[3];

  return (
    <div className="home border border-neutral-400/80 grow-[1] rounded-[1.5rem] py-[1rem] px-[3rem]">
      <div className="navigation__section flex justify-between items-center">
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
        <HomeButton text={operation} />
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
