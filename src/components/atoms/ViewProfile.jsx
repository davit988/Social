import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export const ViewProfile = ({ id }) => {
  return (
    <Button
      component={NavLink}
      to={`/users/profile/${id}`}
      variant="contained"
      size="small"
      sx={{ background: "#DC143C" }}
    >
      View Profile
    </Button>
  );
};
