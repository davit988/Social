import { Box } from "@mui/material";
import React from "react";
import { UsersCard } from "../../molecules/UsersCard/UsersCard";
import { useDispatch, useSelector } from "react-redux";
import { changePageAC } from "../../../store/reducers/usersReducer";

export const UsersList = ({ users }) => {
  const dispatch = useDispatch()
   const {totalUsersCount} = useSelector((state) => state.usersData)


  let pageCount = Math.round(totalUsersCount/100) 
  let pages = []

 for(let i = 1;i<= pageCount;i++){
  pages.push(i)
 }
 

  return (
    <>
      <Box>
        {
          pages.map((elm) => <button onClick={() => dispatch(changePageAC(elm))}>{elm}</button>)
        }
        <Box sx={{display  : "flex", justifyContent:"center", alignItems:"center", gap :"20px", flexWrap :"wrap"}}>
          {users?.map((elm) => (
            <UsersCard key={elm.id} user={elm} />
          ))}
        </Box>
      </Box>
    </>
  );
};
