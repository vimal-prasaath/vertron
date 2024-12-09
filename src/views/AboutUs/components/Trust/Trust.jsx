import { Box, Typography } from "@mui/material";
import trust from "assets/images/banner/trust.png";

const Trust = () => {
  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      px={{ xs: 4, md: 10 }}
      py={{ xs: 4, md: 10 }}
      alignItems={"center"}
      bgcolor={"#ECEDEF"}
    >
      <Box
        width={{ xs: "100%", md: "50%" }}
        minWidth={{ xs: "100%", md: "50%" }}
        pr={{ xs: 0, md: 10 }}
        mb={2}
      >
        <Typography
          fontSize={{ xs: "2rem", md: "2.5rem" }}
          fontWeight={600}
          mb={5}
        >
          VERTRON SYMBOLIZES TRUST
        </Typography>
        <Typography fontSize={"1.25rem"} my={2}>
          At Vertron, we embody trust - quite literally, as "Vertron" is derived
          from the German word for trust. Our commitment to excellence goes
          beyond mere business; it's a passion-driven journey.
        </Typography>
        <Typography fontSize={"1.25rem"} my={2}>
          Just as you cherish your luxury vehicle, we treat each car as our own,
          with meticulous care and attention to detail. With Vertron, you're not
          just a client; you're part of our trusted family, where every service
          is infused with dedication and integrity.
        </Typography>
      </Box>
      <Box
        width={{ xs: "100%", md: "50%" }}
        minWidth={{ xs: "100%", md: "50%" }}
        pr={{ xs: 0, md: 10 }}
        textAlign={{ xs: "center", md: "right" }}
      >
        <img src={trust} alt="trust" width={"80%"} />
      </Box>
    </Box>
  );
};

export default Trust;
