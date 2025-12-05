import { CardContent, Typography } from "@mui/material";
import React from "react";

export const UsersName = ({ name }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
    </CardContent>
  );
};
