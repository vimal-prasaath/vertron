import { Box, Typography, Button } from "@mui/material";
import service from "assets/images/icons/service.png";

const AutoServiceCard = () => {
  return (
    <Box width={"20%"} p={1}>
      <Box boxShadow={"0 0 20px 0 rgba(153,153,153,0.2)"} p={3}>
        <img src={service} width="80" />
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
    <Box px={10} py={6}>
      <Typography fontSize={"2.5rem"} fontWeight={600} mb={4}>
        FULL RANGE AUTO SERVICES
      </Typography>
      <Box display={"flex"}>
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
