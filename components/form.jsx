import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, setValue, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form
      className="lead-gen__form lead-gen--box-shadow"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="lead-gen__input-wrap">
        <input
          className={`${
            errors.firstName
              ? "lead-gen__input--error-state"
              : "lead-gen__input"
          }`}
          type="text"
          name="firstName"
          placeholder="First Name"
          ref={register({
            required: {
              value: true,
              message: "First Name is required"
            },
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i
          })}
        />
        {errors && errors.firstName && (
          <span className="lead-gen__input--error-icon">⚠️</span>
        )}
      </div>
      <span className="lead-gen__input--error-text">
        {errors.firstName && errors.firstName.message}
      </span>

      <div className="lead-gen__input-wrap">
        <input
          className={`${
            errors.lastName ? "lead-gen__input--error-state" : "lead-gen__input"
          }`}
          type="text"
          name="lastName"
          placeholder="Last Name"
          ref={register({
            required: {
              value: true,
              message: "Last Name is required"
            },
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i
          })}
        />
        {errors && errors.lastName && (
          <span className="lead-gen__input--error-icon">⚠️</span>
        )}
      </div>
      <span className="lead-gen__input--error-text">
        {errors.lastName && errors.lastName.message}
      </span>

      <div className="lead-gen__input-wrap">
        <input
          className={`${
            errors.email ? "lead-gen__input--error-state" : "lead-gen__input"
          }`}
          type="text"
          name="email"
          placeholder="Email Address"
          ref={register({
            required: {
              value: true,
              message: "Email is required"
            }
          })}
        />
        {errors && errors.email && (
          <span className="lead-gen__input--error-icon">⚠️</span>
        )}
      </div>
      <span className="lead-gen__input--error-text">
        {errors.email && errors.email.message}
      </span>

      <div className="lead-gen__input-wrap">
        <input
          className={`${
            errors.password ? "lead-gen__input--error-state" : "lead-gen__input"
          }`}
          type="text"
          name="password"
          placeholder="Password"
          ref={register({
            required: {
              value: true,
              message: "Password is required"
            }
          })}
        />
        {errors && errors.password && (
          <span className="lead-gen__input--error-icon">⚠️</span>
        )}
      </div>
      <span className="lead-gen__input--error-text">
        {errors.password && errors.password.message}
      </span>

      {/*  IRL use a button for a11y reasons! */}
      <div
        className="lead-gen__btn"
        role="button"
        onClick={handleSubmit(onSubmit)}
        type="submit"
      >
        <span className="lead-gen__btn--text-size-16">
          CLAIM YOUR FREE TRIAL
        </span>
      </div>

      <p className="lead-gen__small-print">
        By clicking the button you are agreeing to our
        <span className="lead-gen__small-print--important">
          Terms and Services
        </span>
      </p>
    </form>
  );
};

export default Form;
