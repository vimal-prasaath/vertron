import { Box, Typography } from "@mui/material";
import brands from "assets/images/banner/brand.png";

const Brands = () => {
  return (
    <Box py={6} px={10}>
      <Typography fontSize={"2.5rem"} fontWeight={"bold"} mb={4}>
        Brands we serve
      </Typography>
      <Box width={"80%"} margin={"auto"}>
        <img src={brands} alt="brands" width={"100%"} />
      </Box>
    </Box>
  );
};

export default Brands;
