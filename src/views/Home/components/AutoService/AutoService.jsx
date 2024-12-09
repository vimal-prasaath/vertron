import { Box, Typography, Button } from "@mui/material";
import service from "assets/images/icons/service.png";

const AutoServiceCard = () => {
  return (
    <Box width={{ md: "50%", xs: "100%", lg: "20%" }} p={1}>
      <Box
        boxShadow={"0 0 20px 0 rgba(153,153,153,0.2)"}
        p={3}
        textAlign={{ xs: "center", md: "left" }}
      >
        <img src={service} alt="service" width="80" />
        <Typography fontSize={"1.5rem"} my={2}>
          Annual maintenance
        </Typography>
        <Typography fontSize={"1.25rem"} my={2}>
          Essential Routine Car Care for Peak Performance
        </Typography>
        <Typography mb={2}>Know More</Typography>
        <Button variant="contained">Book Now</Button>
      </Box>
    </Box>
  );
};

const AutoService = () => {
  return (
    <Box px={{ md: 10, xs: 4 }} py={{ md: 6, xs: 4 }}>
      <Typography
        fontSize={{ md: "2.5rem", xs: "2rem" }}
        fontWeight={600}
        mb={4}
        textAlign={{ md: "left", xs: "center" }}
      >
        FULL RANGE AUTO SERVICES
      </Typography>
      <Box
        display={"flex"}
        // flexDirection={{ xs: "column", md: "row" }}
        flexWrap={"wrap"}
      >
        <AutoServiceCard />
        <AutoServiceCard />
        <AutoServiceCard />
        <AutoServiceCard />
        <AutoServiceCard />
      </Box>
    </Box>
  );
};

export default AutoService;
