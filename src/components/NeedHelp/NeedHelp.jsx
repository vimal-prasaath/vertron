import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import watsapp from "assets/images/icons/watsapp.png";

const NeedHelp = () => {
  return (
    <Box display="flex">
      <Link
        to="https://wa.me/918939854430"
        target="_blank"
        display="flex"
        mr={4}
        alignItems="center"
        component={RouterLink}
        sx={{ textDecoration: "none" }}
        color={"common.black"}
      >
        <img src={watsapp} width="40px" alt="watsapp" />
        <Box
          display="flex"
          flexDirection="column"
          ml={1.5}
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          })}
        >
          <Typography variant="subtitle2">Need Help</Typography>
          <Typography variant="subtitle2" fontWeight="bold">
            +91-89398 54430
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default NeedHelp;
