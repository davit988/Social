import userImg from "../../../assets/photo/user.png";

export const ProfileImg = ({ profileImg }) => {
  return <img src={profileImg ? profileImg : userImg} />;
};
