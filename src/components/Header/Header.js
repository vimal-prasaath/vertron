import React from "react";
import { Box, Typography, Link, IconButton, Drawer } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import watsapp from "assets/images/icons/watsapp.png";
import logo from "assets/images/icons/logo.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };
  return (
    <Box position={"sticky"} top={0} zIndex={1000}>
      <Box
        bgcolor="common.black"
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        px={{ xs: 2, md: 10 }}
        py={1.5}
      >
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={{ xs: "center", md: "start" }}
        >
          <Typography pr={3} mb={{ xs: 1, md: 0 }}>
            <Link
              component={RouterLink}
              to={`mailto:info@vertronmotor.com`}
              sx={{ textDecoration: "none" }}
              color={"common.white"}
              display={"flex"}
              alignItems={"center"}
              fontSize={"1rem"}
            >
              <MailOutlineIcon />
              <Typography component="span" variant="body1" ml={1}>
                info@vertronmotor.com
              </Typography>
            </Link>
          </Typography>
          <Typography
            color={"common.white"}
            display={"flex"}
            alignItems={"center"}
            fontSize={"1rem"}
            pr={3}
            mb={{ xs: 1, md: 0 }}
          >
            <AccessTimeIcon />
            <Typography component="span" variant="body1" ml={1}>
              06:00 AM - 09:00 PM
            </Typography>
          </Typography>
          <Typography
            color="common.white"
            // textAlign="center"
            variant="body1"
            display={"flex"}
            alignItems={"center"}
            fontSize={"1rem"}
            mb={{ xs: 1, md: 0 }}
          >
            <LocationOnOutlinedIcon />
            <Typography component="span" variant="body1" ml={1}>
              D-9, 4th St, Ambattur Industrial Estate, Chennai, Tamil Nadu
              600058
            </Typography>
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={{ xs: "center", md: "start" }}
          flexGrow={{ xs: 1, md: 0 }}
        >
          <Link
            component={RouterLink}
            to={`/`}
            sx={{ textDecoration: "none" }}
            color={"common.white"}
            display={"flex"}
            alignItems={"center"}
            fontSize={"1rem"}
            mr={2}
          >
            <YouTubeIcon />
          </Link>
          <Link
            component={RouterLink}
            to={`/`}
            sx={{ textDecoration: "none" }}
            color={"common.white"}
            display={"flex"}
            alignItems={"center"}
            fontSize={"1rem"}
            mr={2}
          >
            <FacebookRoundedIcon />
          </Link>
          <Link
            component={RouterLink}
            to={"/"}
            sx={{ textDecoration: "none" }}
            color={"common.white"}
            display={"flex"}
            alignItems={"center"}
            fontSize={"1rem"}
            mr={2}
          >
            <InstagramIcon />
          </Link>
        </Box>
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
            <Typography component="span" mr={5.5} variant="body2">
              Home
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to={`/aboutus`}
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={5.5} variant="body2">
              About Us
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/services"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={5.5} variant="body2">
              Services
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/parts"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={5.5} variant="body2">
              Parts
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/blog"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={5.5} variant="body2">
              Blog
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/contact"
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <Typography component="span" mr={5.5} variant="body2">
              Contact Us
            </Typography>
          </Link>
        </Box>
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
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
