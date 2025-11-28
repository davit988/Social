import React, { useState } from "react";
import { loginThunk } from "../../../store/reducers/authReducer";
import { useDispatch } from "react-redux";

export const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let body = { email, password };
    console.log(email, password);
    dispatch(
      loginThunk({ email: "hakobyan95narek@gmail.com", password: "narek95" })
    );
  };
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
