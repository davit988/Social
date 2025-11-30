import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileThunk } from "../../../store/reducers/profileReducer";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const { id } = useParams();
  const { profile } = useSelector((state) => state.profileData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileThunk(id));
  }, [id]);

  return (
    <>
      <div>
        <h1>{profile?.fullName}</h1>
        <h2>{profile?.userId}</h2>
      </div>
    </>
  );
};
