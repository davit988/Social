import React from "react";

export const LoginPassword = ({ usersPassword, password }) => {
  return (
    <input
      style={{ width: "350px", padding: "7px  15px", borderRadius: "10px" }}
      value={password}
      onChange={(e) => usersPassword(e)}
      placeholder="password"
    />
  );
};
