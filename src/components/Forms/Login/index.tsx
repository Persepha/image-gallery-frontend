import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormInput } from "./Login.props";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { login } from "../../../redux/auth/actionCreators";

import cn from "classnames";
import styles from "../Form.module.css";
import { Loader } from "../../Loader";
import { Button } from "../../Button";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading } = useAppSelector((state) => state.authReducer);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    const authResult = await dispatch(login(data));

    if (login.fulfilled.match(authResult)) {
      return navigate("/");
    }

    if (login.rejected.match(authResult)) {
      const error = authResult.payload;
      console.log(error);

      error?.extra?.fields?.non_field_errors &&
        setError(
          "username",
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

        <h1 className={styles.info}>Login</h1>

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
              placeholder=" "
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
              [styles.invalid]: errors.password,
            })}
          >
            <label htmlFor="password" className={styles.label}>
              Password <span className={styles.required}>*</span>
            </label>
            <input
              type="password"
              placeholder=" "
              className={cn(styles.input, {
                [styles.invalid]: errors.password,
              })}
              {...register("password", { required: "Please enter a password" })}
            />
          </div>

          {errors.password && (
            <div className={styles.invalid}>{errors.password?.message}</div>
          )}

          <div className={styles.button}>
            <Button type="submit">log in</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
