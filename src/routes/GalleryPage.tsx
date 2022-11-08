import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { gallery } from "../redux/gallery/actionCreators";
import { Gallery } from "../components";

export const GalleryPage: FC = () => {
  const dispatch = useAppDispatch();

  const { error, isLoading, data } = useAppSelector(
    (state) => state.galleryReducer
  );

  const getGallery = () => {
    dispatch(gallery());
  };

  useEffect(() => {
    getGallery();
  }, []);

  return (
    <>
      <div className="ctr">{isLoading && <h1>Loading...</h1>}</div>
      {error && <h1>{error}</h1>}
      {data && <Gallery images={data.results} />}
    </>
  );
};
