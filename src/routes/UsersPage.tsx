import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { resetFilter } from "../redux/filter/slice";
import { Pagination } from "../components/Pagination";
import { Users } from "../components/Users";
import { users } from "../redux/users/actionCreators";
import { StatusMessage } from "../components/StatusMessage";

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
      nothingMessage="No user to display..."
    />
  ) : (
    <>
      <Users users={data.results} />
      <Pagination limit={20} count={data.count} />
    </>
  );
};
