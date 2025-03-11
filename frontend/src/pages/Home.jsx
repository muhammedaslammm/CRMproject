import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h1>howe page</h1>
      <Outlet />
    </div>
  );
};

export default Home;
