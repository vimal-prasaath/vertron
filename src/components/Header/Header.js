import React from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  IconButton,
  Drawer,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import watsapp from "assets/images/icons/watsapp.png";
import logo from "assets/images/icons/logo.png";

const Header = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };
  return (
    <Box position={"sticky"} top={0} zIndex={1000}>
      <Box bgcolor="common.black">
        <Typography
          color="common.white"
          p={1.25}
          textAlign="center"
          variant="body1"
        >
          D-9, 4th St, Ambattur Industrial Estate, Chennai, Tamil Nadu 600058
        </Typography>
      </Box>
      <Box
        borderBottom={1}
        borderColor="#f3f3f3"
        py={1.5}
        px={{ xs: 2, md: 10 }}
        display="flex"
        justifyContent="space-between"
        bgcolor={"common.white"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <IconButton
            size="large"
            onClick={toggleDrawer(true)}
            sx={(theme) => ({
              display: "none",
              [theme.breakpoints.down("md")]: {
                display: "inline-block",
              },
            })}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Link
            component={RouterLink}
            to="/"
            sx={{ textDecoration: "none", position: "relative" }}
            color={"common.black"}
          >
            <Box
              sx={{
                width: { xs: "5rem", md: "9rem" },
                position: { sx: "static", md: "absolute" },
                top: "-1.75rem",
              }}
            >
              <img src={logo} alt="logo" width={"100%"} />
            </Box>
          </Link>
        </Box>
        <Box display={{ xs: "none", md: "flex" }} alignItems="center">
          <Link
            component={RouterLink}
            to={`/`}
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={3.5}>
              Home
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to={`/aboutus`}
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={3.5}>
              About Us
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/services"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={3.5}>
              Services
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/parts"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={3.5}>
              Parts
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/blog"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={3.5}>
              Blog
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/contact"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={3.5}>
              Contact Us
            </Typography>
          </Link>
        </Box>
        <Box display="flex">
          <Link
            to="https://wa.me/917695957120"
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
              <Typography variant="subtitle2">Whatsapp</Typography>
              <Typography variant="subtitle2" fontWeight="bold">
                +91 76959 57120
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      <Drawer
        open={openDrawer}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { minWidth: "20rem" },
        }}
      >
        <Box px={2} py={1} onClick={toggleDrawer(false)}>
          <Box textAlign={"right"}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection={"column"}
            gap={"10px"}
            mt={"10%"}
          >
            <Link
              component={RouterLink}
              to={`/`}
              sx={{ textDecoration: "none", pb: 1 }}
              color={"common.black"}
            >
              <Typography component="span" pb={1} fontWeight={600} variant="h5">
                Home
              </Typography>
            </Link>
            <Link
              component={RouterLink}
              to="/aboutus"
              sx={{ textDecoration: "none", pb: 1 }}
              color={"common.black"}
            >
              <Typography component="span" pb={1} fontWeight={600} variant="h5">
                About Us
              </Typography>
            </Link>
            <Link
              component={RouterLink}
              to="/services"
              sx={{ textDecoration: "none", pb: 1 }}
              color={"common.black"}
            >
              <Typography component="span" pb={1} fontWeight={600} variant="h5">
                Services
              </Typography>
            </Link>
            <Link
              component={RouterLink}
              to="/parts"
              sx={{ textDecoration: "none", pb: 1 }}
              color={"common.black"}
            >
              <Typography component="span" fontWeight={600} variant="h5">
                Parts
              </Typography>
            </Link>
            <Link
              component={RouterLink}
              to="/blog"
              sx={{ textDecoration: "none", pb: 1 }}
              color={"common.black"}
            >
              <Typography component="span" fontWeight={600} variant="h5">
                Blog
              </Typography>
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              sx={{ textDecoration: "none", pb: 1 }}
              color={"common.black"}
            >
              <Typography component="span" fontWeight={600} variant="h5">
                Contact Us
              </Typography>
            </Link>
          </Box>
          <Box pt={5}>
            <Link
              to="tel:+919600711818"
              component={RouterLink}
              sx={{ textDecoration: "none" }}
              color={"common.black"}
            >
              <Button
                variant="contained"
                color="secondary"
                sx={{ py: 1.25, minWidth: "14rem" }}
              >
                Emergency Call
              </Button>
            </Link>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
