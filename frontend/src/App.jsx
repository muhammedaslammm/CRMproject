import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Toaster } from "sonner";

const Application = () => {
  const location = useLocation();
  const home = location.pathname.includes("home");
  return (
    <div className="application h-screen flex flex-col justify-center items-center">
      <div className="application__container flex flex-col gap-[2rem] border border-neutral-500/80 rounded-[2rem] w-[75%] grow-[1] my-[7rem] pt-[1.5rem] px-[4rem] pb-[3rem]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
export default Application;
