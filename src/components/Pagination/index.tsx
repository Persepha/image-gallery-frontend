import { FC, useEffect } from "react";

import ReactPaginate from "react-paginate";

import { PaginationProps } from "./Pagination.props";
import { useAppDispatch } from "../../hooks/redux";
import { setCurrentPage, setLimit, setOffset } from "../../redux/filter/slice";
import styles from "./Pagination.module.css";

export const Pagination: FC<PaginationProps> = ({ limit, count }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLimit(limit));
  }, []);

  const pageCount = Math.ceil(count / limit);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected * limit;

    dispatch(setCurrentPage(event.selected + 1));
    dispatch(setOffset(newOffset));
  };

  return (
    <div className={styles.container}>
      <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={() => null}
      />
    </div>
  );
};
