import { BannerContainer } from "./Banner.styles";
import { Typography } from "@mui/material";
import banner from "assets/images/banner/whowe.png";

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
          WHO WE ARE
        </Typography>
      </BannerContainer>
    </>
  );
};

export default Banner;
