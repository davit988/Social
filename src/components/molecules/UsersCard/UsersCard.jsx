import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import userImg from "../../../assets/photo/user.png";
import { NavLink } from "react-router-dom";

export function UsersCard({ user }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: "290px" }}
        image={user.photos.large ? user.photos.large : userImg}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" sx={{ background: "#DC143C" }}>
          Follow
        </Button>
        <Button
          component={NavLink}
          to={`/users/profile/${user.id}`}
          variant="contained"
          size="small"
          sx={{ background: "#DC143C" }}
        >
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
}
