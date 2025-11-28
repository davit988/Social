import React from "react";
import { Header } from "../../organism/Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

export const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};
