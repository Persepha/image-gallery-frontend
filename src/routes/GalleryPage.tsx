import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { gallery } from "../redux/gallery/actionCreators";
import { Gallery } from "../components";
import { Pagination } from "../components/Pagination";
import { resetPagination } from "../redux/filter/slice";
import { StatusMessage } from "../components/StatusMessage";

export const GalleryPage: FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage, offset, limit, searchValue } = useAppSelector(
    (state) => state.filterReducer
  );

  const { error, isLoading, data } = useAppSelector(
    (state) => state.galleryReducer
  );

  const getGallery = () => {
    dispatch(gallery({ offset, limit, searchValue }));
  };

  useEffect(() => {
    dispatch(resetPagination());
  }, []);

  useEffect(() => {
    getGallery();
  }, [currentPage, searchValue]);

  const isNothing = () => {
    if (data) {
      return data.results.length === 0;
    }
    return true;
  };

  return error || isLoading || isNothing() || !data ? (
    <StatusMessage
      error={error}
      errorMessage={error}
      isLoading={isLoading}
      isNothing={isNothing()}
      nothingMessage="No image to display..."
    />
  ) : (
    <>
      <Gallery images={data.results} />
      <Pagination count={data.count} />
    </>
  );
};
