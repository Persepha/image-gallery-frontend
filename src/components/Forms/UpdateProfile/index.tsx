import { FC, useEffect } from "react";
import { UpdateProfileFormInput } from "./UpdateProfile.props";
import styles from "../Form.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import cn from "classnames";
import { Button } from "../../Button";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { updateUserProfile } from "../../../redux/users/actionCreators";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../Loader";
import { setAvatar } from "../../../redux/auth/slice";

export const UpdateProfile: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { error, isLoading, profile } = useAppSelector(
    (state) => state.userProfileReducer
  );

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<UpdateProfileFormInput>();

  useEffect(() => {
    if (profile) {
      setValue("username", profile.username);
      setValue("avatar", profile.avatar);
    }
  }, []);

  const onSubmit: SubmitHandler<UpdateProfileFormInput> = async (data) => {
    const formValues = { ...data };

    if (formValues.avatar === "" || formValues.avatar === profile?.avatar) {
      delete formValues.avatar;
    }
    if (
      formValues.username === "" ||
      formValues.username === profile?.username
    ) {
      delete formValues.username;
    }

    const result = await dispatch(updateUserProfile(formValues));

    if (updateUserProfile.fulfilled.match(result)) {
      dispatch(setAvatar(result.payload.avatar));
      return navigate("/profile/");
    }

    if (updateUserProfile.rejected.match(result)) {
      const error = result.payload;

      error?.extra?.fields?.username &&
        setError(
          "username",
          {
            type: "server",
            message: error.extra.fields.username,
          },
          { shouldFocus: true }
        );

      error?.extra?.fields?.avatar &&
        setError(
          "avatar",
          {
            type: "server",
            message: error.extra.fields.avatar,
          },
          { shouldFocus: true }
        );

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
        {error && (
          <div className={cn(styles.invalid, styles.container)}>{error}</div>
        )}

        <h1 className={styles.info}>Update profile</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={cn(styles.field, {
              [styles.invalid]: errors.username,
            })}
          >
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              className={cn(styles.input, {
                [styles.invalid]: errors.username,
              })}
              {...register("username", {
                maxLength: 200,
              })}
            />
          </div>
          {errors.username && (
            <div className={styles.invalid}>{errors.username?.message}</div>
          )}

          <div
            className={cn(styles.field, {
              [styles.invalid]: errors.avatar,
            })}
          >
            <label htmlFor="avatar" className={styles.label}>
              Avatar
            </label>
            <input
              type="url"
              className={cn(styles.input, {
                [styles.invalid]: errors.avatar,
              })}
              {...register("avatar")}
            />
          </div>
          {errors.avatar && (
            <div className={styles.invalid}>{errors.avatar?.message}</div>
          )}

          <div className={styles.button}>
            <Button type="submit">update profile</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
