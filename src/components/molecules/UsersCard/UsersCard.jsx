import { Card, CardActions } from "@mui/material";
import { UsersImg } from "../../atoms/UsersImg/UsersImg";
import { UsersName } from "../../atoms/UsersName/UsersName";
import { Follow } from "../../atoms/Follow/Follow";
import { ViewProfile } from "../../atoms/ViewProfile";

export function UsersCard({ user }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <UsersImg img={user.photos.large} />
      <UsersName name={user.name} />

      <CardActions>
        <Follow />
        <ViewProfile id={user.id} />
      </CardActions>
    </Card>
  );
}
