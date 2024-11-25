import { BannerContainer } from "./Banner.styles";
import { Box, Button, Typography } from "@mui/material";
import banner from "assets/images/icons/home.png";
import brandLogos from "assets/images/icons/brand-logo.png";

const Banner = () => {
  return (
    <>
      <BannerContainer
        image={banner}
        px={10}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography
          fontSize="3.125rem"
          fontWeight={600}
          width="45%"
          color={"#fff"}
          textTransform={"uppercase"}
        >
          Service Centre Exclusively for Luxury Cars
        </Typography>
        <Typography
          fontSize="2.5rem"
          fontWeight={600}
          color={"#fff"}
          textTransform={"uppercase"}
          my={2}
        >
          Car Care Where Precision Meets Pampering
        </Typography>
        <Box my={2}>
          <Button variant="contained">Get In touch</Button>
        </Box>
      </BannerContainer>
      <img src={brandLogos} width={"100%"} />
    </>
  );
};

export default Banner;
