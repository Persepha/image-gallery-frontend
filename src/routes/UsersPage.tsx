import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { resetFilter } from "../redux/filter/slice";
import { Loader } from "../components/Loader";
import { Pagination } from "../components/Pagination";
import { Users } from "../components/Users";
import { users } from "../redux/users/actionCreators";

export const UsersPage: FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage, offset, limit, searchValue } = useAppSelector(
    (state) => state.filterReducer
  );

  const { error, isLoading, data } = useAppSelector(
    (state) => state.usersReducer
  );

  useEffect(() => {
    dispatch(resetFilter());
  }, []);

  const getUsers = () => {
    dispatch(users({ offset, limit, searchValue }));
  };

  useEffect(() => {
    getUsers();
  }, [currentPage, searchValue]);

  return (
    <>
      <div className="ctr">{isLoading && <Loader />}</div>
      {error && <h1>{error}</h1>}
      {data && (
        <>
          <Users users={data.results} />
          <Pagination limit={20} count={data.count} />
        </>
      )}
    </>
  );
};
