import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";

export function ProfileDescription({ profile }) {
  const [a, seta] = useState(false);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">User ID</TableCell>
              <TableCell align="center">About Me</TableCell>
              <TableCell align="center">Looking For a Job</TableCell>
              <TableCell align="center">Job Desc</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{profile?.userId}</TableCell>
              <TableCell align="center">{profile?.aboutMe}</TableCell>
              <TableCell align="center">
                {profile?.lookingForAJob ? "+" : "-"}
              </TableCell>
              <TableCell align="center">
                {profile?.lookingForAJobDescription}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <button>Change Info</button>
    </>
  );
}
