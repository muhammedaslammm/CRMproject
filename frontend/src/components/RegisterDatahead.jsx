const RegisterDatahead = ({ currentPage }) => {
  return (
    <h1 className="head font-medium text-[3.5rem] text-neutral-800 capitalize">
      {currentPage === "register"
        ? "let's register first"
        : "enter login details"}
    </h1>
  );
};

export default RegisterDatahead;
