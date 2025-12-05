import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginThunk } from "../../../store/reducers/authReducer";
import { useLocalStorage } from "../../../shared/hooks/useLocalStorage";
import { UsersLogin } from "../../molecules/UsersLogin/UsersLogin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userId = useLocalStorage();

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = { email, password };

    dispatch(
      loginThunk({ email: "archehovsepyan@gmail.com", password: "208212Dh." })
    );
  };

  if (userId) {
    return <Navigate to={`/users/profile/${userId}`} />;
  }

  return (
    <>
      <UsersLogin />
    </>
  );
};
