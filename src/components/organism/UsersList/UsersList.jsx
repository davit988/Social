import { Box } from "@mui/material";
import React from "react";
import { UsersCard } from "../../molecules/UsersCard/UsersCard";
import { useDispatch } from "react-redux";
import { changePageAC } from "../../../store/reducers/usersReducer";

export const UsersList = ({ users }) => {
  const dispatch = useDispatch()
  const foo = () => {

  }
  return (
    <>
      <Box>
        <button onClick={() => dispatch(foo)}>1</button>
        <button onClick={() => dispatch(changePageAC(2))}>2</button>
        <button onClick={() => dispatch(changePageAC(3))}>3</button>
        <Box sx={{display  : "flex", justifyContent:"center", alignItems:"center", gap :"20px", flexWrap :"wrap"}}>
          {users?.map((elm) => (
            <UsersCard key={elm.id} user={elm} />
          ))}
        </Box>
      </Box>
    </>
  );
};
