import { Box, Typography } from "@mui/material";
import brands from "assets/images/banner/brand.png";

const Brands = () => {
  return (
    <Box px={{ xs: 4, md: 10 }} py={{ xs: 4, md: 6 }}>
      <Typography
        fontSize={{ xs: "2rem", md: "2.5rem" }}
        fontWeight={"bold"}
        mb={4}
        textAlign={{ xs: "center", md: "left" }}
        textTransform={"uppercase"}
      >
        Brands we serve
      </Typography>
      <Box width={{ xs: "100%", md: "80%" }} margin={"auto"}>
        <img src={brands} alt="brands" width={"100%"} />
      </Box>
    </Box>
  );
};

export default Brands;
