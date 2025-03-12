const HomeButton = ({ text }) => {
  return (
    <button
      className={`capitalize text-[1.4rem] bg-red-700/85 rounded-[.25rem] text-white font-medium py-[.3rem] px-[.7rem] cursor-pointer`}
    >
      add {text}
    </button>
  );
};

export default HomeButton;
