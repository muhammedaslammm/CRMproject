import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Application = () => {
  const location = useLocation();
  const home = location.pathname.split("/")[2] === "home" ? true : false;
  console.log("home is:", home);
  return (
    <div className="application h-screen flex flex-col justify-center items-center">
      <div className="application__container border border-neutral-900 rounded-[2rem] w-[75%] grow-[1] my-[7rem] py-[2rem] px-[3rem]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
export default Application;
