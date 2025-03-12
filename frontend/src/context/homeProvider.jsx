import { CustomersProvider } from "./customersContext";

const HomeProvider = ({ children }) => {
  return <CustomersProvider>{children}</CustomersProvider>;
};

export default HomeProvider;
