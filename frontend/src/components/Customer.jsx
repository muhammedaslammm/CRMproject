import CustomerButtons from "./CustomerButtons";
import DealModal from "./DealModal";
import { useRef } from "react";

const Customer = ({ customer }) => {
  const dealRef = useRef();
  const openModal = () => {
    dealRef.current.showModal();
  };
  const closeModal = () => {
    dealRef.current.close();
  };
  return (
    <div className="customer flex justify-between border border-neutral-300 py-[.8rem] px-[1.3rem] rounded-[.3rem]">
      <div className="left flex flex-col gap-[1rem]">
        <div className="top text-[1.75rem] font-medium">
          {customer.username}
        </div>

        <div className="bottom text-[1.35rem] text-neutral-800">
          <div className="address">Address: {customer?.address?.address}</div>
          <div className="postcode">
            Post-code: {customer?.address?.postcode}
          </div>
          <div className="phone">Phone: {customer?.address?.phone}</div>
        </div>
        <div className="last_row flex flex-col gap-[.2rem]">
          <div className="total_deals capitalize font-medium text-[1.4rem]">
            total deals : {customer?.dealid.length}
          </div>
          <div className="date text-[1.15rem] text-neutral-600">
            User Created :{customer.createdDate.split("T")[0]}
          </div>
        </div>
      </div>
      <CustomerButtons openModal={openModal} customerid={customer._id} />
      <DealModal
        closeModal={closeModal}
        customerid={customer._id}
        ref={dealRef}
      />
    </div>
  );
};

export default Customer;
