const HomeButton = ({ buttonLabel, openModal }) => {
  return (
    <button
      className={`capitalize text-[1.4rem] bg-red-700/70 rounded-[.2rem] text-white font-medium py-[.4rem] px-[.5rem] cursor-pointer`}
      onClick={openModal}
    >
      add {buttonLabel}
    </button>
  );
};

export default HomeButton;
