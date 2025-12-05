import { CardMedia } from "@mui/material";
import React from "react";
import userImg from "../../../assets/photo/user.png";

export const UsersImg = ({ img }) => {
  return (
    <CardMedia
      sx={{ height: "290px" }}
      image={img ? img : userImg}
      title="green iguana"
    />
  );
};
