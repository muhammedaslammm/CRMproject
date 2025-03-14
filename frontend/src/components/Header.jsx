import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const home_page = location.pathname.includes("home");

  return (
    <div className="header top-0">
      <div className="header__left flex items-center gap-[1.5rem]">
        <div className="logo text-[2.5rem]">
          <span className="font-medium">CRM</span>project
        </div>
        {home_page ? (
          <div className="button text-[1.8rem] font-medium capitalize text-red-800 cursor-pointer">
            logout
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
