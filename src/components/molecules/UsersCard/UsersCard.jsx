import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';
import userImg from "../../../assets/photo/user.png"
import { NavLink } from 'react-router-dom';

export function UsersCard({user}) {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: '290px' }}
        image={user.photos.large ? user.photos.large : userImg}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {user.name}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">Follow</Button>
        <Button component={NavLink}  to='/' variant="contained" size="small">View Profile</Button>
      </CardActions>
    </Card>
  );
}
