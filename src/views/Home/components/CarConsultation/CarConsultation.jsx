import { Box, Typography, Button } from "@mui/material";
import consult from "assets/images/icons/car-consult.png";

const CarConsultation = () => {
  return (
    <Box
      display={"flex"}
      px={{ xs: 4, md: 10 }}
      alignItems={"center"}
      bgcolor={"#ECEDEF"}
      py={{ xs: 4, md: 10 }}
      flexWrap={"wrap"}
    >
      <Box
        minWidth={{ xs: "100%", md: "50%" }}
        width={{ xs: "100%", md: "50%" }}
        pr={{ xs: 0, md: 10 }}
        textAlign={{ xs: "center", md: "left" }}
      >
        <img src={consult} alt="consult" width={"80%"} />
      </Box>
      <Box
        minWidth={{ xs: "100%", md: "50%" }}
        width={{ xs: "100%", md: "50%" }}
        px={{ xs: 0, md: 10 }}
      >
        <Typography
          fontSize={{ xs: "2rem", md: "2.5rem" }}
          fontWeight={600}
          textAlign={{ xs: "center", md: "left" }}
        >
          Expert Car Consultation - Ask Anything for FREE
        </Typography>
        <Typography
          fontSize={"1.5rem"}
          my={2}
          fontWeight={600}
          // textAlign={{ xs: "center", md: "left" }}
        >
          Because No Question is Too Basic and No Issue is Too Complex
        </Typography>
        <Typography fontSize={"1.25rem"} my={2}>
          Get free expert advice on insurance claims, car maintenance tips,
          buying guidance for second-hand cars, technical issues and more. Don’t
          hesitate - get answers to all your car-related questions and make
          informed decisions.
        </Typography>
        <Typography mb={2}>KNOW MORE</Typography>
        <Box textAlign={{ xs: "center", md: "left" }}>
          <Button variant="contained">Get In touch</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CarConsultation;
