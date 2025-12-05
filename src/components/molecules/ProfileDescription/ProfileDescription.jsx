import { useState } from "react";
import { changeInfoThunk } from "../../../store/reducers/profileReducer";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";

export function ProfileDescription({ profile }) {
  const [aboutMe, setAboutMe] = useState("");
  const [job, setJob] = useState("");
  const [forJob, setForJob] = useState(false);
  const [change, setChage] = useState(true);
  const dispatch = useDispatch();
  console.log(aboutMe, job);

  const inf = () => {
    const obj = {
      userId: 123,
      lookingForAJob: forJob,
      lookingForAJobDescription: job,
      fullName: "iamarche",
      aboutMe: aboutMe,
      contacts: {
        github: "",
        vk: "",
        facebook: "",
        instagram: "",
        twitter: "",
        website: "",
        youtube: "",
        mainLink: "",
      },
    };
    dispatch(changeInfoThunk(obj));
    setChage(!change);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <form action="">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4,200px)",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <label>User ID</label>
          <label>About Me</label>
          <label>Looking For a Job</label>
          <label>Job Desc</label>
        </Box>
        <br />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4,200px)",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
            alignContent: "center",
          }}
        >
          <label>{profile?.userId}</label>
          {change ? (
            <label>{profile?.aboutMe}</label>
          ) : (
            <input
              style={{ borderRadius: "15px", padding: "5px" }}
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
            />
          )}
          {change ? (
            <label>{profile?.lookingForAJob ? "+" : "-"}</label>
          ) : (
            <input
              type="checkbox"
              checked={forJob}
              onChange={(e) => setForJob(e.target.checked)}
            />
          )}
          {change ? (
            <label>{profile?.lookingForAJobDescription}</label>
          ) : (
            <input
              style={{ borderRadius: "15px", padding: "5px" }}
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          )}
        </Box>
      </form>
      {change ? "" : <Button onClick={inf}>Change</Button>}
      {change ? (
        <Button onClick={() => setChage(!change)}>Change Info</Button>
      ) : (
        ""
      )}
    </Box>
  );
}
