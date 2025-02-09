import { Box, Typography, TextField, Button } from "@mui/material";
import bg from "assets/images/icons/book-card.png";

const BookAppointmentCard = () => {
  return (
    <Box
      p={4}
      sx={{
        background: `url(${bg}) no-repeat`,
        backgroundSize: "cover",
      }}
      borderRadius={"1rem"}
    >
      <Typography
        color={"white"}
        textAlign="center"
        fontSize={"1.5rem"}
        fontWeight={"bold"}
      >
        Book An Appointment
      </Typography>
      <Box my={3}>
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
      </Box>
      <Box my={3}>
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
      </Box>
      <Box my={3}>
        <TextField
          fullWidth
          placeholder="Email"
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
      </Box>
      <Box my={3}>
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
      </Box>
      <Typography color={"white"} mb={3}>
        I agree to Vertron Privacy Policy & Terms of Use.
      </Typography>
      <Box textAlign={"center"}>
        <Button
          variant="contained"
          sx={{ minHeight: "3.125rem", width: "100%" }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default BookAppointmentCard;
