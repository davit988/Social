import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socialAPI } from "../../../api/api";
import { Box } from "@mui/material";
import { UsersList } from "../../organism/UsersList/UsersList";

export const Users = () => {
  const { users } = useSelector((state) => state.usersData);
  const dishpatch = useDispatch();
  console.log(users);

  useEffect(() => {
    socialAPI.getUsers(dishpatch);
  }, []);

  return (
    <>
    <Box>
      <UsersList users={users} />
    </Box>
    </>
  );
};
