import { Box, Typography, Button } from "@mui/material";
import part from "assets/images/icons/car-part.png";

const CartPart = () => {
  return (
    <Box
      display={"flex"}
      px={10}
      alignItems={"center"}
      bgcolor={"#000000"}
      color={"white"}
      py={5}
    >
      <Box minWidth={"50%"} width={"50%"} px={10}>
        <Typography fontSize={"2.5rem"} fontWeight={600}>
          Looking for a Rare Luxury Car Part?
        </Typography>
        <Typography fontSize={"1.5rem"} my={2} fontWeight={600}>
          We Understand - Your Car Is Your Baby
        </Typography>
        <Typography fontSize={"1.25rem"} my={2}>
          Whether it's from Europe or anywhere worldwide, we procure original
          luxury car parts, guaranteeing authenticity and quality for your
          cherished vehicle, no matter how intricate or rare.
        </Typography>
        <Typography mb={2}>KNOW MORE</Typography>
        <Button variant="contained">Get In touch</Button>
      </Box>
      <Box minWidth={"50%"} width={"50%"} pl={10} textAlign={"righ"}>
        <img src={part} alt="consult" width={"80%"} />
      </Box>
    </Box>
  );
};

export default CartPart;
