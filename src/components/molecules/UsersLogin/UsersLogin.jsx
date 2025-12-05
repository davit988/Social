import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocalStorage } from "../../../shared/hooks/useLocalStorage";
import { loginThunk } from "../../../store/reducers/authReducer";
import { Navigate } from "react-router-dom";
import { LoginEmail } from "../../atoms/LoginEmail/LoginEmail";
import { LoginPassword } from "../../atoms/LoginPassword/LoginPassword";
import { LoginButton } from "../../atoms/LoginButton/LoginButton";

export const UsersLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userId = useLocalStorage();

  const userEmail = (e) => {
    setEmail(e.target.value);
  };
  const usersPassword = (e) => {
    setPassword(e.target.value);
  };

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
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <label style={{ fontSize: "28px" }}>Login</label>
        <LoginEmail email={email} userEmail={userEmail} />
        <LoginPassword usersPassword={usersPassword} password={password} />
        <LoginButton />
      </form>
    </>
  );
};
