import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import HomeButton from "../components/HomeButton";
import HomeNav from "../components/HomeNav";
const Home = () => {
  const location = useLocation();
  const operation = location.pathname.split("/")[3];
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) navigate("/api/register");
  });

  return (
    <div className="home border border-neutral-400/80 grow-[1] rounded-[1.5rem] py-[1rem] px-[3rem]">
      <div className="navigation__section flex justify-between items-center">
        <HomeNav />
        <HomeButton text={operation} />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
