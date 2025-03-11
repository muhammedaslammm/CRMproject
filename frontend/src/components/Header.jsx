import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const home_page = location.pathname === "/";

  return (
    <div className="header">
      <div className="header__left">
        <div className="logo text-[2.5rem]">
          <span className="font-medium">CRM</span>project
        </div>
      </div>
    </div>
  );
};

export default Header;
