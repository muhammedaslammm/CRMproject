import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import HomeButton from "../components/HomeButton";
import HomeNav from "../components/HomeNav";
import HomeProvider from "../context/homeProvider";
import ModalManager from "../components/ModalManager";
const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext) || 1;

  const location = useLocation();
  const section = location.pathname.split("/")[3];
  const [modal, setModal] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!user) navigate("/api/register");
  }, []);

  const openModal = () => setModal(section);
  const closeModal = () => setModal(null);

  return (
    <HomeProvider>
      <div className="home border border-neutral-400/80 grow-[1] overflow-y-auto rounded-[1.5rem] pb-[1.4rem] px-[3rem]">
        <div className="sticky top-0 bg-white flex justify-between items-center py-[1rem]">
          <HomeNav />
          <HomeButton buttonLabel={section} openModal={openModal} />
        </div>
        <ModalManager modal={modal} closeModal={closeModal} ref={modalRef} />
        <Outlet />
      </div>
    </HomeProvider>
  );
};

export default Home;
