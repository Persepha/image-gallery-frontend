import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import cn from "classnames";

import styles from "../Form.module.css";
import { Loader } from "../../Loader";
import { Button } from "../../Button";
import {
  newGalleryImage,
  updateGalleryImage,
} from "../../../redux/gallery/actionCreators";
import { NewImageFormInput, NewImageProps } from "./NewImage.props";

export const NewImage: FC<NewImageProps> = ({ isUpdateImage, imageDetail }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, error } = useAppSelector((state) => state.galleryReducer);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<NewImageFormInput>();

  useEffect(() => {
    if (isUpdateImage && imageDetail) {
      setValue("name", imageDetail.name);
      setValue("url", imageDetail.url);
      setValue("slug", imageDetail.slug);
      setValue("tags", imageDetail.tags.map((tag) => tag.title).join(", "));
    }
  }, []);

  const onSubmit: SubmitHandler<NewImageFormInput> = async (data) => {
    const formValues = { ...data };

    if (formValues.slug === "" || formValues.slug === imageDetail?.slug) {
      delete formValues.slug;
    }
    if (formValues.tags === "") {
      delete formValues.tags;
    }

    const result = isUpdateImage
      ? await dispatch(
          updateGalleryImage({ ...formValues, oldSlug: imageDetail?.slug! })
        )
      : await dispatch(newGalleryImage(formValues));

    const actionCreator = isUpdateImage ? updateGalleryImage : newGalleryImage;

    if (actionCreator.fulfilled.match(result)) {
      return navigate("/");
    }

    if (actionCreator.rejected.match(result)) {
      const error = result.payload;

      error?.extra?.fields?.name &&
        setError(
          "name",
          {
            type: "server",
            message: error.extra.fields.name,
          },
          { shouldFocus: true }
        );

      error?.extra?.fields?.url &&
        setError(
          "url",
          {
            type: "server",
            message: error.extra.fields.url,
          },
          { shouldFocus: true }
        );

      error?.extra?.fields?.slug &&
        setError(
          "slug",
          {
            type: "server",
            message: error.extra.fields.slug,
          },
          { shouldFocus: true }
        );

      error?.extra?.fields?.tags &&
        setError(
          "tags",
          {
            type: "server",
            message: error.extra.fields.tags,
          },
          { shouldFocus: true }
        );

      error?.extra?.fields?.non_field_errors &&
        setError(
          "name",
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

        <h1 className={styles.info}>
          {isUpdateImage ? "Update" : "Create new"} image
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={cn(styles.field, {
              [styles.invalid]: errors.name,
            })}
          >
            <label htmlFor="name" className={styles.label}>
              Name <span className={styles.required}>*</span>
            </label>
            <input
              className={cn(styles.input, {
                [styles.invalid]: errors.name,
              })}
              {...register("name", {
                required: "Please enter an image name",
                maxLength: 200,
              })}
            />
          </div>
          {errors.name && (
            <div className={styles.invalid}>{errors.name?.message}</div>
          )}

          <div
            className={cn(styles.field, {
              [styles.invalid]: errors.url,
            })}
          >
            <label htmlFor="url" className={styles.label}>
              Url <span className={styles.required}>*</span>
            </label>
            <input
              type="url"
              className={cn(styles.input, {
                [styles.invalid]: errors.url,
              })}
              {...register("url", {
                required: "Please enter an url",
              })}
            />
          </div>
          {errors.url && (
            <div className={styles.invalid}>{errors.url?.message}</div>
          )}

          <div
            className={cn(styles.field, {
              [styles.invalid]: errors.slug,
            })}
          >
            <label htmlFor="slug" className={styles.label}>
              Slug
            </label>
            <input
              type="text"
              className={cn(styles.input, {
                [styles.invalid]: errors.slug,
              })}
              {...register("slug")}
            />
          </div>
          {errors.slug && (
            <div className={styles.invalid}>{errors.slug?.message}</div>
          )}

          <div
            className={cn(styles.field, {
              [styles.invalid]: errors.tags,
            })}
          >
            <label htmlFor="password2" className={styles.label}>
              Tags
            </label>
            <input
              type="text"
              placeholder="Enter the tags separated by commas"
              className={cn(styles.input, {
                [styles.invalid]: errors.tags,
              })}
              {...register("tags")}
            />
          </div>
          {errors.tags && (
            <div className={styles.invalid}>{errors.tags?.message}</div>
          )}

          <div className={styles.button}>
            <Button type="submit">{isUpdateImage ? "update" : "create"}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
