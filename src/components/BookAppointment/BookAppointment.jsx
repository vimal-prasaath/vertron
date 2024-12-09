import { Box, Typography, Link, Grid, TextField, Button } from "@mui/material";
import bookappointment from "assets/images/icons/book-app.png";
import { Link as RouterLink } from "react-router-dom";
import watsapp from "assets/images/icons/watsapp.png";

const BookAppointment = () => {
  return (
    <Box
      minHeight={"50rem"}
      px={{ xs: 4, md: 10 }}
      py={{ xs: 4, md: 6 }}
      color={"white"}
      sx={{
        background: `url(${bookappointment}) no-repeat`,
        backgroundSize: "cover",
      }}
      display={"flex"}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
      <Box
        width={{ md: "40%", xs: "100%" }}
        minWidth={{ md: "40%", xs: "100%" }}
      >
        <Typography
          fontSize={{ xs: "2rem", md: "2.5rem" }}
          fontWeight={600}
          mb={3}
          textTransform={"uppercase"}
          textAlign={{ xs: "center", md: "left" }}
        >
          We care for Your Car just Like You do
        </Typography>
        <Typography fontSize={"1.125rem"} mb={3} lineHeight={2}>
          When you bring your vehicle to Vertron Motor Company, you can rest
          easy knowing that your vehicle is in professional hands. We take every
          possible step to ensure that your experience with us is pleasant and
          efficient.
        </Typography>
        <Box display="flex" mb={3}>
          <Link
            to="https://wa.me/918939854430"
            target="_blank"
            display="flex"
            mr={4}
            alignItems="center"
            component={RouterLink}
            sx={{ textDecoration: "none" }}
            color={"common.white"}
          >
            <img src={watsapp} width="40px" alt="watsapp" />
            <Box
              display="flex"
              flexDirection="column"
              m={1.5}
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              })}
            >
              <Typography variant="subtitle2">Need Help?</Typography>
              <Typography variant="subtitle2" fontWeight="bold">
                +91-89398 54430
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      <Box
        width={{ xs: "100%", md: "60%" }}
        minWidth={{ xs: "100%", md: "60%" }}
        height={"100%"}
        pl={{ xs: "0", md: "10%" }}
      >
        <Box
          border={1}
          borderColor={"#fff"}
          borderRadius={"1rem"}
          p={4}
          bgcolor={"#ffffff3d"}
        >
          <Typography color={"white"} fontSize={"2.5rem"} fontWeight={"bold"}>
            Book An Appointment
          </Typography>

          <Box>
            <Grid container spacing={4} pt={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="Name"
                  variant="filled"
                  inputProps={{ name: "name" }}
                  InputProps={{
                    hiddenLabel: true,
                    disableUnderline: true,
                    sx: {
                      background: "white",
                      px: 1,
                      "&:hover": {
                        background: "white",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="Email Address"
                  variant="filled"
                  inputProps={{ name: "email" }}
                  InputProps={{
                    hiddenLabel: true,
                    disableUnderline: true,
                    sx: {
                      background: "white",
                      px: 1,
                      "&:hover": {
                        background: "white",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="Phone Number"
                  variant="filled"
                  inputProps={{ name: "phone" }}
                  InputProps={{
                    hiddenLabel: true,
                    disableUnderline: true,
                    sx: {
                      background: "white",
                      px: 1,
                      "&:hover": {
                        background: "white",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="Car Model"
                  variant="filled"
                  inputProps={{ name: "carmodel" }}
                  InputProps={{
                    hiddenLabel: true,
                    disableUnderline: true,
                    sx: {
                      background: "white",
                      px: 1,
                      "&:hover": {
                        background: "white",
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Typography py={2}>
              I agree to Vertron Privacy Policy & Terms of Use.
            </Typography>
            <Box textAlign={"center"}>
              <Button variant="contained" sx={{ minWidth: "12rem" }}>
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BookAppointment;
