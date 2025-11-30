import React, { useState } from "react";
import { loginThunk } from "../../../store/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.authData);
  const handleSubmit = (e) => {
    e.preventDefault();
    let body = { email, password };

    dispatch(
      loginThunk({ email: "hakobyan95narek@gmail.com", password: "narek95" })
    );
  };
  console.log(userId);

  if (userId) {
    return<Navigate to={`/users/profile/${userId}`}/>
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};
