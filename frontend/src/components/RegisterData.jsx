import RegisterDatahead from "./RegisterDatahead";
import RegisterForm from "./RegisterForm";
import StateEditLine from "./StateEditLine";

const RegisterData = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="page__right w-[40%] px-[3.2rem] pt-[2.5rem] flex flex-col ">
      <div className="page__top flex flex-col gap-[1.5rem]">
        <RegisterDatahead currentPage={currentPage} />
        <RegisterForm currentPage={currentPage} />
      </div>
      <StateEditLine
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default RegisterData;
