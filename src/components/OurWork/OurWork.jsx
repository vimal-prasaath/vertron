import { Box, Typography, Grid } from "@mui/material";
import c1 from "assets/images/icons/c1.png";
import c2 from "assets/images/icons/c2.png";
import c3 from "assets/images/icons/c3.png";

const OurWork = () => {
  return (
    <Box px={{ xs: 4, md: 10 }} py={{ xs: 4, md: 8 }} bgcolor="black">
      <Typography
        color={"#fff"}
        fontSize={{ xs: "2rem", md: "2.5rem" }}
        fontWeight={600}
        mb={4}
        textAlign={{ xs: "center", md: "left" }}
        textTransform={"uppercase"}
      >
        Our Work in Pictures
      </Typography>
      <Grid container spacing={4} pt={2}>
        <Grid item xs={12} md={4}>
          {" "}
          <img src={c1} alt="item" width={"100%"} />
        </Grid>
        <Grid item xs={12} md={4}>
          {" "}
          <img src={c2} alt="item" width={"100%"} />
        </Grid>
        <Grid item xs={12} md={4}>
          {" "}
          <img src={c3} alt="item" width={"100%"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurWork;
