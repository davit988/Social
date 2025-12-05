import { Box } from "@mui/material";
import { ProfileImg } from "../../atoms/ProfileImg/ProfileImg";
import { ProfileName } from "../../atoms/ProfileName/ProfileName";
import { useDispatch } from "react-redux";
import { changePhotoThunk } from "../../../store/reducers/profileReducer";

export const ProfileHeader = ({ profileHeader }) => {
  const id = localStorage.getItem("userId");
  const dispatch = useDispatch();

  const chnageImg = (e) => {
    const file = e.target.files[0];

    dispatch(changePhotoThunk(file));
  };

  return (
    <>
      <Box>
        <ProfileName profileName={profileHeader?.name} />
        <ProfileImg profileImg={profileHeader?.img} />
        {profileHeader.id == id ? (
          <input type="file" onChange={chnageImg} />
        ) : (
          ""
        )}
      </Box>
    </>
  );
};
