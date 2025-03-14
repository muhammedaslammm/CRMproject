import { useContext } from "react";
import { CustomersContext } from "../context/customersContext";
import Customer from "./Customer";
import EmptyData from "./EmptyData";

const Customers = () => {
  const { customers } = useContext(CustomersContext);
  return (
    <div className="customers mt-[1rem] flex flex-col gap-[1rem]">
      {customers.length ? (
        customers.map((customer) => {
          return (
            <div className="customer__data" key={customer._id}>
              <Customer index={customer._id} customer={customer} />
            </div>
          );
        })
      ) : (
        <EmptyData cache={"customers"} />
      )}
    </div>
  );
};
export default Customers;
