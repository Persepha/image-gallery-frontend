import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { gallery } from "../redux/gallery/actionCreators";
import { Gallery } from "../components";
import { Pagination } from "../components/Pagination";

export const GalleryPage: FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage, offset, limit } = useAppSelector(
    (state) => state.filterReducer
  );

  const { error, isLoading, data } = useAppSelector(
    (state) => state.galleryReducer
  );

  const getGallery = () => {
    dispatch(gallery({ offset, limit }));
  };

  useEffect(() => {
    getGallery();
  }, [currentPage]);

  return (
    <>
      <div className="ctr">{isLoading && <h1>Loading...</h1>}</div>
      {error && <h1>{error}</h1>}
      {data && (
        <>
          <Gallery images={data.results} />
          <Pagination limit={2} count={data.count} />
        </>
      )}
    </>
  );
};
