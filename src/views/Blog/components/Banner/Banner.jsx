import { BannerContainer } from "./Banner.styles";
import { Typography } from "@mui/material";
import banner from "assets/images/banner/blog.png";

const Banner = () => {
  return (
    <>
      <BannerContainer
        image={banner}
        px={{ md: 10, xs: 4 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography
          fontSize={{ xs: "2.5rem", md: "3.125rem" }}
          fontWeight={600}
          width={{ xs: "100%", md: "45%" }}
          color={"#fff"}
          textTransform={"uppercase"}
        >
          BLOG
        </Typography>
      </BannerContainer>
    </>
  );
};

export default Banner;
