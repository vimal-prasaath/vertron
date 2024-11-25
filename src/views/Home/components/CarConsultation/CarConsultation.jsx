import { Box, Typography, Button } from "@mui/material";
import consult from "assets/images/icons/car-consult.png";

const CarConsultation = () => {
  return (
    <Box
      display={"flex"}
      px={10}
      alignItems={"center"}
      bgcolor={"#ECEDEF"}
      py={10}
    >
      <Box minWidth={"50%"} width={"50%"} pr={10}>
        <img src={consult} alt="consult" width={"80%"} />
      </Box>
      <Box minWidth={"50%"} width={"50%"} px={10}>
        <Typography fontSize={"2.5rem"} fontWeight={600}>
          Expert Car Consultation - Ask Anything for FREE
        </Typography>
        <Typography fontSize={"1.5rem"} my={2} fontWeight={600}>
          Because No Question is Too Basic and No Issue is Too Complex
        </Typography>
        <Typography fontSize={"1.25rem"} my={2}>
          Get free expert advice on insurance claims, car maintenance tips,
          buying guidance for second-hand cars, technical issues and more. Don’t
          hesitate - get answers to all your car-related questions and make
          informed decisions.
        </Typography>
        <Typography mb={2}>KNOW MORE</Typography>
        <Button variant="contained">Get In touch</Button>
      </Box>
    </Box>
  );
};

export default CarConsultation;
