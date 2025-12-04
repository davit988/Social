import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileThunk } from "../../../store/reducers/profileReducer";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { ProfileInfo } from "../../organism/ProfileInfo/ProfileInfo";



export const Profile = () => {
  const { id } = useParams();
  const { profile } = useSelector((state) => state.profileData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileThunk(id));
  }, [id]);

  return (
    <>
      <Box>
        <ProfileInfo profile={profile} />
      </Box>
    </>
  );
};
