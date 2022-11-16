import { FC, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { galleryImage } from "../redux/gallery/actionCreators";
import { Loader } from "../components/Loader";
import { ImageDetail } from "../components/ImageDetail";

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

  return (
    <>
      <div className="ctr">{isLoading && <Loader />}</div>
      {error && <h1>{error}</h1>}
      {imageDetail && <ImageDetail imageDetail={imageDetail} />}
    </>
  );
};
