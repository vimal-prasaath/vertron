import { Box, Typography, Button } from "@mui/material";
import part from "assets/images/icons/car-part.png";

const CartPart = () => {
  return (
    <Box
      display={"flex"}
      px={{ xs: 4, md: 10 }}
      py={{ xs: 4, md: 5 }}
      alignItems={"center"}
      bgcolor={"#000000"}
      color={"white"}
      flexWrap={"wrap"}
    >
      <Box
        width={{ md: "50%", xs: "100%" }}
        minWidth={{ md: "50%", xs: "100%" }}
        pr={{ xs: 0, md: 10 }}
      >
        <Typography
          fontSize={{ xs: "2rem", md: "2.5rem" }}
          fontWeight={600}
          textAlign={{ xs: "center", md: "left" }}
          textTransform={"uppercase"}
        >
          Looking for a Rare Luxury Car Part?
        </Typography>
        <Typography
          fontSize={"1.5rem"}
          my={3}
          fontWeight={600}
          textTransform={"uppercase"}
        >
          We Understand - Your Car Is Your Baby
        </Typography>
        <Typography fontSize={"1.25rem"} my={2}>
          Whether it's from Europe or anywhere worldwide, we procure original
          luxury car parts, guaranteeing authenticity and quality for your
          cherished vehicle, no matter how intricate or rare.
        </Typography>
        <Typography mb={2}>KNOW MORE</Typography>
        <Box textAlign={{ xs: "center", md: "left" }}>
          <Button variant="contained" sx={{ minHeight: "2.5rem" }}>
            Get In touch
          </Button>
        </Box>
      </Box>
      <Box
        minWidth={{ md: "50%", xs: "100%" }}
        width={{ md: "50%", xs: "100%" }}
        px={{ xs: 0, md: 10 }}
        textAlign={{ xs: "center", md: "right" }}
      >
        <img src={part} alt="consult" width={"80%"} />
      </Box>
    </Box>
  );
};

export default CartPart;
