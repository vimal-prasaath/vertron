import { Box, Typography, Link } from "@mui/material";
import bookappointment from "assets/images/icons/book-app.png";
import { Link as RouterLink } from "react-router-dom";
import watsapp from "assets/images/icons/watsapp.png";

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
      <Box width={"40%"} minWidth={"40%"}>
        <Typography
          fontSize={"2.5rem"}
          fontWeight={600}
          mb={3}
          textTransform={"uppercase"}
        >
          We care for Your Car just Like You do
        </Typography>
        <Typography fontSize={"1.125rem"} mb={3} lineHeight={2}>
          When you bring your vehicle to Vertron Motor Company, you can rest
          easy knowing that your vehicle is in professional hands. We take every
          possible step to ensure that your experience with us is pleasant and
          efficient.
        </Typography>
        <Box display="flex">
          <Link
            to="https://wa.me/917695957120"
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
                +91 76959 57120
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      <Box width={"60%"} minWidth={"60%"} height={"100%"} pl={"10%"}>
        <Box
          border={1}
          borderColor={"#fff"}
          borderRadius={"1rem"}
          p={4}
          bgcolor={"#ffffff3d"}
        ></Box>
      </Box>
    </Box>
  );
};

export default BookAppointment;
