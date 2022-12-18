import { FC } from "react";

import ReactPaginate from "react-paginate";

import { PaginationProps } from "./Pagination.props";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setCurrentPage, setOffset } from "../../redux/filter/slice";
import styles from "./Pagination.module.css";

export const Pagination: FC<PaginationProps> = ({ count }) => {
  const dispatch = useAppDispatch();

  const { limit, currentPage } = useAppSelector((state) => state.filterReducer);

  const pageCount = Math.ceil(count / limit);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected * limit;

    dispatch(setOffset(newOffset));
    dispatch(setCurrentPage(event.selected + 1));
  };

  return (
    <div className={styles.container}>
      <ReactPaginate
        className={styles.pagination}
        forcePage={currentPage - 1}
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
