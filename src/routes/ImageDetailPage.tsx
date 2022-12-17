import { FC, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { galleryImage } from "../redux/gallery/actionCreators";
import { ImageDetail } from "../components/ImageDetail";
import { StatusMessage } from "../components/StatusMessage";

export const ImageDetailPage: FC = () => {
  const dispatch = useAppDispatch();
  const { slug } = useParams();

  const { error, isLoading, imageDetail } = useAppSelector(
    (state) => state.galleryImageDetailReducer
  );

  const getImageDetail = () => {
    if (slug) {
      dispatch(galleryImage({ slug }));
    }
  };

  useEffect(() => {
    getImageDetail();
  }, []);

  return error || !imageDetail || isLoading ? (
    <StatusMessage error={error} errorMessage={error} isLoading={isLoading} />
  ) : (
    <ImageDetail imageDetail={imageDetail} />
  );
};
