import React from "react";

export const LoginEmail = ({ userEmail, email }) => {
  return (
    <input
      style={{ width: "350px", padding: "7px  15px", borderRadius: "10px" }}
      value={email}
      onChange={(e) => userEmail(e)}
      placeholder="email"
    />
  );
};
