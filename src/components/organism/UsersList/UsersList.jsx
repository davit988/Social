import { Box } from "@mui/material";
import { UsersCard } from "../../molecules/UsersCard/UsersCard";
import { useSelector } from "react-redux";

export const UsersList = ({ users }) => {
  const { totalUsersCount } = useSelector((state) => state.usersData);

  let pageCount = Math.round(totalUsersCount / 100);

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 440px)",
            gridTemplateRows: "repeat(34, 420px)",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {users?.map((elm) => (
            <UsersCard key={elm.id} user={elm} />
          ))}
        </Box>
      </Box>
    </>
  );
};
