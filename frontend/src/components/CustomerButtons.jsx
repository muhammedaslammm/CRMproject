import { useContext } from "react";
import { CustomersContext } from "../context/customersContext";

const CustomerButtons = ({ openModal, customerid }) => {
  const { deleteCustomer } = useContext(CustomersContext);

  const performDeletion = async () => {
    const response = await deleteCustomer(customerid);
    if (response.success) console.log(response.message);
    else console.log(response.message);
  };

  return (
    <div className="right flex flex-col justify-between text-[1.25rem]">
      <div className="top flex justify-end">
        <button
          className="rounded-[.2rem] bg-gray-700/90 border text-white font-medium py-[.2rem] px-[.7rem] cursor-pointer"
          onClick={openModal}
        >
          add a deal
        </button>
      </div>
      <div className="bottom flex gap-[1rem]">
        <button className="border border-gray-400 py-[.2rem] px-[.7rem] rounded-[.2rem] text-gray-600 font-medium cursor-pointer">
          view customer
        </button>
        <button
          className="py-[.2rem] px-[.7rem] rounded-[.2rem] border border-red-700/90 text-red-700 font-medium cursor-pointer"
          onClick={performDeletion}
        >
          delete customer
        </button>
      </div>
    </div>
  );
};

export default CustomerButtons;
