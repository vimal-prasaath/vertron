import { Box, Typography } from "@mui/material";
import trust from "assets/images/banner/trust.png";

const Trust = () => {
  return (
    <Box
      display={"flex"}
      px={10}
      alignItems={"center"}
      bgcolor={"#ECEDEF"}
      py={10}
    >
      <Box minWidth={"50%"} width={"50%"} pr={10}>
        <Typography fontSize={"2.5rem"} fontWeight={600} mb={5}>
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
      <Box minWidth={"50%"} width={"50%"} pr={10} textAlign={"right"}>
        <img src={trust} alt="trust" width={"80%"} />
      </Box>
    </Box>
  );
};

export default Trust;
