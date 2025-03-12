import { useContext } from "react";
import { CustomersContext } from "../context/customersContext";
import Customer from "./Customer";
import EmptyData from "./EmptyData";

const Customers = () => {
  const { customers } = useContext(CustomersContext);
  return (
    <div className="customers">
      {customers.length ? (
        customers.map((customer) => (
          <Customer index={customer._id} customer={customer} />
        ))
      ) : (
        <EmptyData cache={"customers"} />
      )}
    </div>
  );
};
export default Customers;
