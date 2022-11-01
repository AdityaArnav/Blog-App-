import React, { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [change, setChange] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(89,176,177,1) 0%, rgba(114,157,217,1) 34%, rgba(184,154,238,1) 79%)",
      }}
    >
      <Toolbar>
        <Typography variant="h5">BLOG APP</Typography>
        {isLoggedIn && (
          <Box display="flex" marginRight="auto" marginLeft="auto">
            <Tabs
              textColor="inherit"
              value={change} /*onChange={(e,value)=>setChange(value)}*/
            >
              <Link style={{ textDecoration: "none" }} to="/blogs">
                <Tab label="ALL BLOGS" onClick={() => setChange(0)} />
              </Link>
              <Link style={{ textDecoration: "none" }} to="/myBlogs">
                <Tab label="MY BLOGS" onClick={() => setChange(1)} />
              </Link>
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              <Link style={{ textDecoration: "none" }} to="/auth">
                <Button
                  variant="contained"
                  sx={{ margin: 1, borderRadius: 7 }}
                  color="warning"
                >
                  LOGIN
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/auth">
                <Button
                  variant="contained"
                  sx={{ margin: 1, borderRadius: 7 }}
                  color="warning"
                >
                  SIGNUP
                </Button>
              </Link>{" "}
            </>
          )}
          {isLoggedIn && (
            <Link style={{ textDecoration: "none" }} to="/auth">
              <Button
                variant="contained"
                sx={{ margin: 1, borderRadius: 7 }}
                color="warning"
              >
                LOGOUT
              </Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
