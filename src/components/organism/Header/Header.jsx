import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { NavLink } from "react-router-dom";

const pages = [
  { title: "home", path: "/" },
  { title: "users", path: "/users" },
];

export function Header() {
  

  return (
    <AppBar position="sticky" color="error" sx={{ mb: "30px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <InstagramIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "25px",
              ml: "30px",
            }}
          >
            {pages.map((page) => (
              <Button
                component={NavLink}
                to={page.path}
                key={page.path}
                sx={{ my: 2, color: "white", display: "block" }}
                variant="contained"
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
