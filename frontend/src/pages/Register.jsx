import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import RegisterData from "../components/RegisterData.jsx";
import RegisterImg from "../components/RegisterImg.jsx";

const Register = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("register");
  useEffect(() => {
    if (user) navigate("/api/home");
  });
  return (
    <div className="register grow-[1] flex border border-neutral-400 rounded-[1rem]">
      <RegisterImg currentPage={currentPage} />
      <RegisterData setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
};

export default Register;
