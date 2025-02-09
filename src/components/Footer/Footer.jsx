import { Box, Button, TextField, Typography, Grid, Link } from "@mui/material";
import logo from "assets/images/icons/logo.png";
import { Link as RouterLink } from "react-router-dom";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const Footer = () => {
  return (
    <Box borderTop={1} borderColor={"#EEEEEE"} pt={4}>
      <Box px={{ md: 10, xs: 4 }}>
        <Box
          pb={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Box display={{ xs: "none", md: "block" }}>
            <img src={logo} width={"100px"} alt="logo" />
          </Box>

          <Box
            display={"flex"}
            flexWrap={"wrap"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontSize={"1.75rem"} fontWeight={600} mr={2}>
              Sign Up For Newsletter
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Your Email"
              InputProps={{
                sx: {
                  borderRadius: "6px",
                },
              }}
              sx={{ borderRadius: "10px", minWidth: "20rem", mr: 2 }}
            />
            <Button variant="contained" sx={{ minHeight: "2.5rem" }}>
              SUBSCRIBE
            </Button>
          </Box>
        </Box>
        <Box>
          <Grid container spacing={4} pt={2}>
            <Grid item xs={12} md={5}>
              <Typography
                fontSize={"1.25rem"}
                fontWeight={600}
                textTransform={"uppercase"}
              >
                Company
              </Typography>
              <Typography
                fontSize={"1.125rem"}
                color="#555"
                my={1}
                width={{ xs: "100%", md: "60%" }}
              >
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan
              </Typography>

              <Typography
                fontSize={"1.25rem"}
                fontWeight={600}
                textTransform={"uppercase"}
                mt={2}
              >
                Social media
              </Typography>
              <Box display={"flex"} mt={1}>
                <Box mr={1}>
                  <FacebookRoundedIcon />
                </Box>
                <Box mr={1}>
                  <YouTubeIcon />
                </Box>
                <Box mr={1}>
                  <InstagramIcon />
                </Box>
                <Box>
                  <XIcon />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} md={3.5}>
              <Typography
                fontSize={"1.25rem"}
                fontWeight={600}
                textTransform={"uppercase"}
              >
                Navigation
              </Typography>
              <Box>
                <Link
                  component={RouterLink}
                  to={`/`}
                  sx={{ textDecoration: "none" }}
                  color={"common.black"}
                >
                  <Typography fontSize={"1.125rem"} color="#555" my={1}>
                    Home
                  </Typography>
                </Link>
                <Link
                  component={RouterLink}
                  to={`/aboutus`}
                  sx={{ textDecoration: "none" }}
                  color={"common.black"}
                >
                  <Typography fontSize={"1.125rem"} color="#555" my={1}>
                    About Us
                  </Typography>
                </Link>
                <Link
                  component={RouterLink}
                  to="/services"
                  sx={{ textDecoration: "none" }}
                  color={"common.black"}
                >
                  <Typography fontSize={"1.125rem"} color="#555" my={1}>
                    Services
                  </Typography>
                </Link>
                <Link
                  component={RouterLink}
                  to="/parts"
                  sx={{ textDecoration: "none" }}
                  color={"common.black"}
                >
                  <Typography fontSize={"1.125rem"} color="#555" my={1}>
                    Parts
                  </Typography>
                </Link>
                <Link
                  component={RouterLink}
                  to="/blog"
                  sx={{ textDecoration: "none" }}
                  color={"common.black"}
                >
                  <Typography fontSize={"1.125rem"} color="#555" my={1}>
                    Blog
                  </Typography>
                </Link>
                <Link
                  component={RouterLink}
                  to="/contact"
                  sx={{ textDecoration: "none" }}
                  color={"common.black"}
                >
                  <Typography fontSize={"1.125rem"} color="#555" my={1}>
                    Contact Us
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={8} md={3.5}>
              <Typography
                fontSize={"1.25rem"}
                fontWeight={600}
                textTransform={"uppercase"}
              >
                Contact Us
              </Typography>
              <Box>
                <Typography
                  fontSize={"1.125rem"}
                  color="#555"
                  my={2}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <LocalPhoneOutlinedIcon sx={{ mr: 1 }} /> +91-89398 54430
                </Typography>
                <Typography
                  fontSize={"1.125rem"}
                  color="#555"
                  my={2}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <EmailOutlinedIcon sx={{ mr: 1 }} /> info@vertronmotor.com
                </Typography>
                <Typography
                  fontSize={"1.125rem"}
                  color="#555"
                  my={2}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <AccessTimeOutlinedIcon sx={{ mr: 1 }} /> 06:00 AM - 09:00 PM
                </Typography>
                <Typography
                  fontSize={"1.125rem"}
                  color="#555"
                  my={2}
                  display={"flex"}
                  alignItems={"flex-start"}
                >
                  <LocationOnOutlinedIcon sx={{ mr: 1 }} /> D-9, 4th St,
                  Ambattur Industrial Estate, Chennai, Tamil Nadu 600058
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box borderTop={1} borderColor={"#efefef"} p={2}>
        <Typography color={"#555"} textAlign={"center"}>
          © 2024 Vertron Motor Company - All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
