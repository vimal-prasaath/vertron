import { BannerContainer } from "./Banner.styles";
import { Box, Button, Typography } from "@mui/material";
import banner from "assets/images/icons/home.png";
// import brandLogos from "assets/images/icons/brand-logo.png";
import Logos from "./Logos";

const Banner = () => {
  return (
    <>
      <BannerContainer
        image={banner}
        px={{ md: 10, xs: 4 }}
        pt={{ md: 4, xs: 0 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography
          fontSize={{ xs: "2.5rem", md: "3.125rem" }}
          fontWeight={600}
          width={{ xs: "100%", md: "50%" }}
          color={"#fff"}
          textTransform={"uppercase"}
        >
          Chennai’s only Exclusive Service Centre for Luxury Cars
        </Typography>
        <Typography
          fontSize={{ xs: "2.25rem", md: "2.5rem" }}
          fontWeight={600}
          color={"#fff"}
          textTransform={"uppercase"}
          my={2}
        >
          Your Car Repair Specialists
        </Typography>
        <Box my={2}>
          <Button variant="contained" sx={{ minHeight: "2.5rem" }}>
            Get In touch
          </Button>
        </Box>
      </BannerContainer>
      {/* <img src={brandLogos} alt="brandLogos" width={"100%"} /> */}
      <Logos />
    </>
  );
};

export default Banner;
