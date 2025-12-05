import { Box } from "@mui/material";
import { Login } from "../../organism/Login/Login";
Box;

export const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Login />
    </Box>
  );
};
