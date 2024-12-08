import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import bookappointment from "assets/images/banner/part-enq.png";

const BookAppointment = () => {
  return (
    <Box
      minHeight={"50rem"}
      px={10}
      py={6}
      color={"white"}
      sx={{
        background: `url(${bookappointment}) no-repeat`,
        backgroundSize: "cover",
      }}
      display={"flex"}
      alignItems={"center"}
    >
      <Box width={"35%"} minWidth={"35%"}>
        <Typography
          fontSize={"2.5rem"}
          fontWeight={600}
          mb={2}
          textTransform={"uppercase"}
        >
          Need a General or Routine Car Part?
        </Typography>
        <Typography fontSize={"2rem"} mb={2} textTransform={"uppercase"}>
          We Have Got You Covered Again!
        </Typography>
        <Typography fontSize={"1.125rem"} mb={3} lineHeight={2}>
          Our services extend beyond rare luxury car parts – we specialize in
          sourcing and fixing all types of components, ensuring your vehicle
          receives top-notch care and quality solutions, no matter the size or
          complexity of the part needed
        </Typography>
      </Box>
      <Box width={"55%"} minWidth={"55%"} height={"100%"} pl={"15%"}>
        <Box
          border={1}
          borderColor={"#fff"}
          borderRadius={"1rem"}
          p={4}
          bgcolor={"#ffffff3d"}
        >
          <Typography color={"white"} fontSize={"2.5rem"} fontWeight={"bold"}>
            Enquire For Custom Parts
          </Typography>

          <Box>
            <Grid container spacing={4} pt={2}>
              <Grid item xs={6} md={6}>
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
              <Grid item xs={6} md={6}>
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
              <Grid item xs={6} md={6}>
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
              <Grid item xs={6} md={6}>
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
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  placeholder="Choose Parts"
                  variant="filled"
                  inputProps={{ name: "carparts" }}
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
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Choose Parts"
                  variant="filled"
                  inputProps={{ name: "carparts" }}
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
            <Box textAlign={"center"} mt={2}>
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
