import { useEffect } from "react";
import { socialAPI } from "./api/api";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const users = useSelector((state) => state.usersData);
  const dispatch = useDispatch();

  useEffect(() => {
    socialAPI.getUsers(dispatch);
  }, []);
  return <></>;
}

export default App;
