import { useForm } from "react-hook-form";
import { forwardRef, useContext } from "react";
import useDate from "../customHooks/useDate";
import { DealsContext } from "../context/DealsContext";

const DealModal = forwardRef(({ closeModal, customerid }, ref) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { addDeal } = useContext(DealsContext);

  const date = useDate();

  const formSubmit = async (data) => {
    data.customerid = customerid;
    const response = await addDeal(data);
    if (response.success) {
      console.log(response.message);
      closeModal();
    } else {
      console.log(response);
    }
  };
  return (
    <dialog
      className="left-[50%] translate-x-[-50%] w-[30%] top-[20%] px-[2.5rem] py-[1.5rem] border border-neutral-300 backdrop:bg-black/30"
      ref={ref}
    >
      <p className="text-[1.8rem] capitalize mb-[1.8rem]">make a deal</p>
      <form
        action=""
        className="text-[1.6rem] flex flex-col gap-[2.4rem]"
        onSubmit={handleSubmit(formSubmit)}
      >
        <div className="deal_name relative">
          <input
            type="text"
            placeholder="Deal Name"
            {...register("deal_name", { required: "field required" })}
            className="input--modal"
          />
          {errors.deal_name && (
            <p className="modal--error">{errors.deal_name.message}</p>
          )}
        </div>
        <div className="amount_and_date flex gap-[1rem]">
          <div className="amount w-[50%] relative">
            <input
              type="text"
              placeholder="Final Amount"
              {...register("amount", { required: "field required" })}
              className="input--modal"
            />
            {errors.amount && (
              <p className="modal--error">{errors.amount.message}</p>
            )}
          </div>
          <div className="closing_date w-[50%] relative">
            <input
              type="date"
              {...register("final_date", {
                required: "field required",
                validate: (value) =>
                  value >= date || "cannot select previous date",
              })}
              className="input--modal"
            />
            {errors.final_date && (
              <p className="modal--error">{errors.final_date.message}</p>
            )}
          </div>
        </div>
        <div className="status w-[50%]">
          <select
            name=""
            id=""
            {...register("status")}
            className="w-full input--modal"
          >
            <option value="Pending">Pending</option>
            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
          </select>
        </div>

        <div className="buttons mt-[2rem] flex justify-end gap-[1rem]">
          <button
            type="button"
            className="button--modal text-red-900 border border-red-900 font-medium"
            onClick={closeModal}
          >
            close
          </button>
          <button className="button--modal text-white bg-blue-900/90 font-medium">
            create deal
          </button>
        </div>
      </form>
    </dialog>
  );
});

export default DealModal;
