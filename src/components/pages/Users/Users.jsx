import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { UsersList } from "../../organism/UsersList/UsersList";
import { userThunkCreator } from "../../../store/reducers/usersReducer";

export const Users = () => {
  const { users, currentPage, isLoading } = useSelector(
    (state) => state.usersData
  );
  const dishpatch = useDispatch();

  useEffect(() => {
    dishpatch(userThunkCreator(currentPage));
  }, [currentPage]);

  return (
    <>
      <Box>{isLoading ? <h1>loading...</h1> : <UsersList users={users} />}</Box>
    </>
  );
};
