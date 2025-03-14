import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CustomersContext } from "../context/customersContext";
import React from "react";

const CustomerModal = React.forwardRef(({ closeModal }, ref) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { addCustomer } = useContext(CustomersContext);

  const formSubmit = async (userData) => {
    const response = await addCustomer(userData);
    if (response.success) {
      console.log(response.message);
      closeModal();
    } else {
      console.log(response.message);
    }
  };
  return (
    <dialog
      ref={ref}
      className="customer__modal w-[35%] border border-neutral-400 rounded-[.5rem] top-[25%] translate-y-[-25%] left-[50%] translate-x-[-50%]  p-[2rem]  gap-[1rem]"
      open
    >
      <p className="text-[2rem] capitalize">enter customer details</p>
      <form
        action=""
        className="text-[1.6rem] flex flex-col gap-[2.5rem]"
        onSubmit={handleSubmit(formSubmit)}
        id="customersmodal"
      >
        <div className="username relative w-[50%]">
          <input
            type="text"
            placeholder="Name"
            className="input--modal"
            {...register("username", { required: "field required" })}
          />
          {errors.username && (
            <p className="modal--error">{errors.username.message}</p>
          )}
        </div>
        <div className="email relative w-full">
          <input
            type="text"
            placeholder="Email"
            className="input--modal"
            {...register("email", {
              required: "field required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "invalid email",
              },
            })}
          />
          {errors.email && (
            <p className="modal--error">{errors.email.message}</p>
          )}
        </div>
        <div className="address relative">
          <textarea
            type="text"
            className="input--modal"
            placeholder="Current Address"
            {...register("address", { required: "field required" })}
          />
          {errors.address && (
            <p className="modal--error top-[6rem]">{errors.address.message}</p>
          )}
        </div>
        <div className="post-and-num flex gap-[.5rem]">
          <div className="post relative w-[40%]">
            <input
              type="number"
              placeholder="Post Code"
              {...register("postcode", { required: "field required" })}
              className="input--modal"
            />
            {errors.postcode && (
              <p className="modal--error">{errors.postcode.message}</p>
            )}
          </div>
          <div className="phone relative w-[60%]">
            <input
              type="text"
              placeholder="Phone"
              className="input--modal"
              {...register("phone", { required: "field required" })}
            />
            {errors.phone && (
              <p className="modal--error">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div className="buttons flex gap-[.6rem] mt-[2.5rem] self-end">
          <button
            onClick={closeModal}
            type="submit"
            className=" button--modal border border-red-900 text-red-900 font-medium"
          >
            close
          </button>
          <button
            type="submit"
            className="button--modal bg-neutral-800 text-white"
          >
            create customer
          </button>
        </div>
      </form>
    </dialog>
  );
});
export default CustomerModal;
