import { FC } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { RegistrationFormInput } from "./Registration.props";
import { registration } from "../../../redux/auth/actionCreators";
import { Loader } from "../../Loader";
import { Button } from "../../Button";
import cn from "classnames";
import styles from "../Form.module.css";

export const Registration: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading } = useAppSelector((state) => state.authReducer);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegistrationFormInput>();

  const onSubmit: SubmitHandler<RegistrationFormInput> = async (data) => {
    console.log(data);
    const authResult = await dispatch(registration(data));

    if (registration.fulfilled.match(authResult)) {
      return navigate("/");
    }

    if (registration.rejected.match(authResult)) {
      const error = authResult.payload;

      error?.extra?.fields?.username &&
        setError(
          "username",
          {
            type: "server",
            message: error.extra.fields.username,
          },
          { shouldFocus: true }
        );

      error?.extra?.fields?.email &&
        setError(
          "email",
          {
            type: "server",
            message: error.extra.fields.email,
          },
          { shouldFocus: true }
        );

      error?.extra?.fields?.password1 &&
        setError(
          "password1",
          {
            type: "server",
            message: error.extra.fields.password1,
          },
          { shouldFocus: true }
        );

      error?.extra?.fields?.password2 &&
        setError(
          "password2",
          {
            type: "server",
            message: error.extra.fields.password2,
          },
          { shouldFocus: true }
        );

      error?.extra?.fields?.non_field_errors &&
        setError(
          "password2",
          {
            type: "server",
            message: error.extra.fields.non_field_errors,
          },
          { shouldFocus: true }
        );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {isLoading && (
          <div className={styles.container}>
            <Loader />
          </div>
        )}

        <h1 className={styles.info}>Registration</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={cn(styles.field, {
              [styles.invalid]: errors.username,
            })}
          >
            <label htmlFor="username" className={styles.label}>
              Username <span className={styles.required}>*</span>
            </label>
            <input
              className={cn(styles.input, {
                [styles.invalid]: errors.username,
              })}
              {...register("username", {
                required: "Please enter a username",
                maxLength: 50,
              })}
            />
          </div>
          {errors.username && (
            <div className={styles.invalid}>{errors.username?.message}</div>
          )}

          <div
            className={cn(styles.field, {
              [styles.invalid]: errors.email,
            })}
          >
            <label htmlFor="email" className={styles.label}>
              Email <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              className={cn(styles.input, {
                [styles.invalid]: errors.email,
              })}
              {...register("email", {
                required: "Please enter an email",
              })}
            />
          </div>
          {errors.email && (
            <div className={styles.invalid}>{errors.email?.message}</div>
          )}

          <div
            className={cn(styles.field, {
              [styles.invalid]: errors.password1,
            })}
          >
            <label htmlFor="password1" className={styles.label}>
              Password <span className={styles.required}>*</span>
            </label>
            <input
              type="password"
              className={cn(styles.input, {
                [styles.invalid]: errors.password1,
              })}
              {...register("password1", {
                required: "Please enter a password",
              })}
            />
          </div>
          {errors.password1 && (
            <div className={styles.invalid}>{errors.password1?.message}</div>
          )}
          <div
            className={cn(styles.field, {
              [styles.invalid]: errors.password2,
            })}
          >
            <label htmlFor="password2" className={styles.label}>
              Password confirmation <span className={styles.required}>*</span>
            </label>
            <input
              type="password"
              className={cn(styles.input, {
                [styles.invalid]: errors.password2,
              })}
              {...register("password2", {
                required: "Please enter a password confirmation",
              })}
            />
          </div>
          {errors.password2 && (
            <div className={styles.invalid}>{errors.password2?.message}</div>
          )}
          <div className={styles.button}>
            <Button type="submit">sign up</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
