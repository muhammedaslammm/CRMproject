const useDate = () => {
  return new Date().toISOString().split("T")[0];
};

export default useDate;
