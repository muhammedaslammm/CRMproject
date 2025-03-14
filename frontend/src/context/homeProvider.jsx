import { CustomersProvider } from "./customersContext";
import { DealsProvider } from "./DealsContext";

const HomeProvider = ({ children }) => {
  return (
    <CustomersProvider>
      <DealsProvider>{children}</DealsProvider>
    </CustomersProvider>
  );
};

export default HomeProvider;
