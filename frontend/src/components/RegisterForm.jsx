import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ currentPage }) => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  const formSubmit = async (data) => {
    delete data.confirmpass;
    const response = await signup(data);
    if (response.success) {
      reset();
      navigate("/api/home");
    } else if (response.matching_email) {
      console.log(response.message);
    } else {
      console.log(response.message);
    }
  };

  return (
    <form
      action=""
      className="flex flex-col gap-[3.2rem]"
      onSubmit={handleSubmit(formSubmit)}
    >
      {/* first name */}
      <div
        className={`username flex gap-[1rem] ${
          currentPage !== "register" ? "hidden" : ""
        }`}
      >
        <div className="firstname relative w-[50%]">
          <input
            type="text"
            className={`input--register `}
            placeholder="First Name"
            {...register("firstname", {
              required: "field required",
            })}
          />
          {errors.firstname && (
            <p className="register--error">{errors.firstname.message}</p>
          )}
        </div>

        {/* last name */}
        <div className="lastname relative w-[50%]">
          <input
            type="text"
            className="input--register"
            placeholder="Last Name"
            {...register("lastname", { required: "field required" })}
          />
          {errors.lastname && (
            <p className="register--error">{errors.lastname.message}</p>
          )}
        </div>
      </div>

      {/* email */}
      <div className="email relative">
        <input
          type="email"
          className="input--register"
          placeholder="Email"
          {...register("email", {
            required: "field required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "invalid email",
            },
          })}
        />
        {errors.email && (
          <p className="register--error">{errors.email.message}</p>
        )}
      </div>

      {/* password */}
      <div className="password flex gap-[1rem]">
        <div
          className={`actual relative w-[50%] ${
            currentPage !== "register" ? "w-full" : ""
          }`}
        >
          <input
            type="password"
            className="input--register"
            placeholder="Password"
            {...register("password", { required: "field required" })}
          />
          {errors.password && (
            <p className="register--error">{errors.password.message}</p>
          )}
        </div>

        {/* confirm pass */}
        <div
          className={`confirm relative w-[50%] ${
            currentPage !== "register" ? "hidden" : ""
          }`}
        >
          <input
            type="password"
            className="input--register"
            placeholder="Confirm-Password"
            {...register("confirmpass", {
              required: "field required",
              validate: (value) =>
                value === watch("password") || "incorrect password",
            })}
          />
          {errors.confirmpass && (
            <p className="register--error">{errors.confirmpass.message}</p>
          )}
        </div>
      </div>
      <div className="mt-[1.8rem]">
        <button type="submit" className="button--register">
          {currentPage === "register" ? "register" : "login"}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
