const StateEditLine = ({ currentPage, setCurrentPage }) => {
  let register = currentPage === "register" ? true : false;

  const changeState = () => {
    if (register) setCurrentPage("login");
    else setCurrentPage("register");
  };

  return (
    <p className="text-[1.6rem] mt-[1.6rem]">
      {register ? "Already have an account?" : "Create a new account"}{" "}
      <span
        className="text-violet-800 font-medium cursor-pointer"
        onClick={() => changeState()}
      >
        {register ? "Login" : "Click here"}
      </span>
    </p>
  );
};

export default StateEditLine;
